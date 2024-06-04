import React from "react";
import PropTypes from "prop-types";

const Tag = ({ item }) => {
    return (
        <div className="border border-gray-300 p-4 rounded-lg m-2 w-64 shadow-md">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="mt-2 text-gray-600">{item.description}</p>
        </div>
    );
};

Tag.propTypes = {
    item: PropTypes.object.isRequired
};

export default Tag;