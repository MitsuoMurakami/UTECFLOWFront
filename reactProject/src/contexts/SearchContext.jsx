import React from "react";
import axios from "axios";

export const SearchContext = React.createContext();

export const SearchProvider = ({ children }) => {
    const [searchResults, setSearchResults] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [boolBusqueda, setBoolBusqueda] = React.useState(false);

    React.useEffect(() => {
        if (searchTerm) {
            setLoading(true);
            axios.post('https://4cko1or492.execute-api.us-east-1.amazonaws.com/test/preguntas/leerPreguntas', {
                'titulo': searchTerm
            })
            .then(response => {
                console.log(response.data);
                setSearchResults(response.data.body);
                setLoading(false);
                setBoolBusqueda(true);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
        }
    }, [searchTerm]);

    return (
        <SearchContext.Provider value={{ searchResults, setSearchTerm, loading, error , boolBusqueda}}>
            {children}
        </SearchContext.Provider>
    );
};
