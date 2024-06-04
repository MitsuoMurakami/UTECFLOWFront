import React from "react";
import Tag from "../components/Tag"; 
import { getTags } from "../constants/tags"; 
const Tags = () => {
    const tagsArray = Object.values(getTags); // Convertir el objeto en un array

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Tags</h1>
            <p className="mb-6 text-gray-700">
                Un tag es una etiqueta que se le asigna a un contenido para clasificarlo y organizarlo.
            </p>
            <div className="flex flex-wrap">
                {tagsArray.map(tag => (
                    <Tag key={tag.id} item={tag} />
                ))}
            </div>
        </div>
    );
};

export default Tags;
