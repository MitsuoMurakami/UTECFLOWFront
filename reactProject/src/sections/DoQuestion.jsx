import React, { useState } from 'react';
import { Bs1CircleFill, Bs2CircleFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [title, setTitle] = useState('');
  const [course, setCourse] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState(['CS', '5to ciclo', 'Software']);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [file, setFile] = useState(null); // Estado para el archivo seleccionado

  // Estados de validación
  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isQuestionValid, setIsQuestionValid] = useState(true);
  const [isCourseValid, setIsCourseValid] = useState(true);

  const navigate = useNavigate();

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
    setIsQuestionValid(event.target.value.trim() !== '');
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setIsTitleValid(event.target.value.trim() !== '');
  };

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
    setIsCourseValid(event.target.value.trim() !== '');
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
    navigate('/dashboard/questions');
  };

  const handleSend = async () => {
    if (question.trim() === '' || title.trim() === '' || course.trim() === '') {
      setAttemptedSubmit(true);
      setIsTitleValid(title.trim() !== '');
      setIsQuestionValid(question.trim() !== '');
      setIsCourseValid(course.trim() !== '');
      return;
    }

    if (file && file.size > 1024 * 1024) { // 1MB = 1024 * 1024 bytes
      alert('El archivo seleccionado excede el tamaño máximo permitido (1MB).');
      return;
    }

    const formData = new FormData();
    formData.append('file', file); // Agregar el archivo al FormData

    const data = {
      texto: question,
      archivo: file ? file.name : "None",
      titulo: title,
      usuario_gmail: "yared.riveros@utec.edu.pe",
      curso: course,
      respondido: false,
      tags: tags,
    };

    try {
      const response = await axios.post(
        'https://4cko1or492.execute-api.us-east-1.amazonaws.com/test/preguntas/crearPregunta',
        data
      );

      if (file) {
        const fileResponse = await axios.post(
          'URL_PARA_SUBIR_ARCHIVOS', 
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        );
        console.log('File upload response:', fileResponse);
      }

      console.log('Question send response:', response)
      if (response.status === 200) {
        alert('Pregunta enviada con éxito');
        navigate('/dashboard/doubts');
      }
    } catch (error) {
      console.error('Error al enviar la pregunta:', error);
      setErrorMessage('Error al enviar la pregunta. Intente nuevamente más tarde.');
    }
  };

  const isSendDisabled = question.trim() === '' || title.trim() === '' || course.trim() === '';

  return (
    <div className="flex flex-col flex-grow justify-center items-center bg-gray-100 h-full">
      <div className="bg-white p-4 md:p-8 rounded-lg w-full max-w-5xl h-full">
        <div className="flex items-center gap-2 mb-4">
          <Bs1CircleFill className="text-cach-l2 text-2xl" />
          <h3 className="text-lg font-medium">Haz una pregunta</h3>
        </div>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          className={`w-full mb-4 border ${attemptedSubmit && !isTitleValid ? 'border-red-500' : 'border-gray-300'} bg-cach-l1 rounded-md p-2 md:p-4 focus:outline-none`}
          placeholder="Título de la pregunta"
        />
        {attemptedSubmit && !isTitleValid && <p className="text-red-500 text-sm mb-2">Por favor, ingrese un título válido.</p>}
        <textarea
          value={question}
          onChange={handleQuestionChange}
          className={`w-full h-16 md:h-20 border ${attemptedSubmit && !isQuestionValid ? 'border-red-500' : 'border-gray-300'} bg-cach-l1 rounded-md p-2 md:p-4 focus:outline-none resize-none mb-4`}
          placeholder="¿Qué temas recomiendan aprender antes de llevar Ingeniería de Software?"
        ></textarea>
        {attemptedSubmit && !isQuestionValid && <p className="text-red-500 text-sm mb-2">Por favor, ingrese una pregunta válida.</p>}
        <input
          type="text"
          value={course}
          onChange={handleCourseChange}
          className={`w-full mb-4 border ${attemptedSubmit && !isCourseValid ? 'border-red-500' : 'border-gray-300'} bg-cach-l1 rounded-md p-2 md:p-4 focus:outline-none`}
          placeholder="Curso relacionado"
        />
        {attemptedSubmit && !isCourseValid && <p className="text-red-500 text-sm mb-2">Por favor, ingrese un curso válido.</p>}
        {attemptedSubmit && isSendDisabled && <p className="text-red-500 text-sm mb-4">Por favor, complete todos los campos.</p>}
        {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
        {/* Campo para subir archivo */}
        <div className="mb-4">
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="border border-gray-300 bg-cach-l1 rounded-md p-2 focus:outline-none"
          />
          {file && file.size > 1024 * 1024 && (
            <p className="text-red-500 text-sm mt-1">El archivo seleccionado excede el tamaño máximo permitido (1MB).</p>
          )}
        </div>
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
          <button
            onClick={handleSend}
            className={`px-4 py-2 rounded-md text-white ${isSendDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-cach-l2'}`}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;
