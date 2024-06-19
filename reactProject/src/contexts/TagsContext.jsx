import React from "react";
import axios from "axios";

export const TagsContext = React.createContext();

export const TagsProvider = ({ children }) => { 
    const [tags, setTags] = React.useState([]); 
    const [loading, setLoading] = React.useState(true); 
    const [error, setError] = React.useState(null); 

    React.useEffect(() => { 
        axios.get("https://4cko1or492.execute-api.us-east-1.amazonaws.com/test/tags") 
            .then(response => { 
                console.log(response.data); 
                setTags(response.data.body); 
                setLoading(false); 
            }) 
            .catch(error => { 
                setError(error); 
                setLoading(false); 
            }); 
    }, []); 

    return ( 
        <TagsContext.Provider value={{ tags, loading, error }}> 
            {children} 
        </TagsContext.Provider> 
    ); 
}
