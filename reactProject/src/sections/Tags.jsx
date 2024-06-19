import React from "react";
import Tag from "../components/Tag"; 
import { TagsContext } from "../contexts/TagsContext";

const Tags = () => {
    const { tags, loading, error } = React.useContext(TagsContext);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!tags || tags.length === 0) {
        return <p>No tags available.</p>;
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Tags</h1>
            <p className="mb-6 text-gray-700">
                Un tag es una etiqueta que se le asigna a un contenido para clasificarlo y organizarlo.
            </p>
            <div className="flex flex-wrap">
                {tags.map(tag => (
                    <Tag key={tag.id} item={tag} />
                ))}
            </div>
        </div>
    );
};

export default Tags;
