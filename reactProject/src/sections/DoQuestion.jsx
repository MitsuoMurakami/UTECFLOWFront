import React, { useState } from 'react';
import { Bs1CircleFill, Bs2CircleFill } from "react-icons/bs";

const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState(['CS', '5to ciclo', 'Software']);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleTagInputChange = (event) => {
    setTagInput(event.target.value);
  };

  const handleTagClick = (tag) => {
    setTags(tags.filter(t => t !== tag));
  };

  const handleAddTag = () => {
    if (tagInput.trim() !== '') {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleCancel = () => {
    // Función para cancelar la pregunta
  };

  const handleSend = () => {
    // Función para enviar la pregunta
  };

  return (
    <div className="flex flex-col flex-grow justify-center items-center bg-gray-100 h-full">
      <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-full max-w-5xl h-full">
        <div className="flex items-center gap-2 mb-4">
          <Bs1CircleFill className="text-cach-l2 text-2xl" />
          <h3 className="text-lg font-medium">Haz una pregunta</h3>
        </div>
        <textarea
          value={question}
          onChange={handleQuestionChange}
          className="w-full h-16 md:h-20 border border-gray-300 bg-cach-l1 rounded-md p-2 md:p-4 focus:outline-none resize-none mb-4"
          placeholder="¿Qué temas recomiendan aprender antes de llevar Ingeniería de Software?"
        ></textarea>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Bs2CircleFill className="text-cach-l2 text-2xl" />
            <h3 className="text-lg font-medium">Agrega Tags relacionados a tu pregunta</h3>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="bg-blue-100 text-cach-l2 py-1 px-3 rounded-full cursor-pointer"
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={tagInput}
            onChange={handleTagInputChange}
            className="w-full md:w-64 border border-gray-300 rounded-md p-2 focus:outline-none bg-cach-l1"
            placeholder="Agrega un tag..."
          />
          <button
            onClick={handleAddTag}
            className="bg-cach-l2 text-white px-4 py-2 rounded-md"
          >
            Agregar
          </button>
        </div>
        <div className="flex justify-end gap-4 mb-4">
          <button onClick={handleCancel} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Cancelar</button>
          <button onClick={handleSend} className="bg-cach-l2 text-white px-4 py-2 rounded-md">Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;
