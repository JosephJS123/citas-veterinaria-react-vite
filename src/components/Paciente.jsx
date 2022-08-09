import React from "react";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("¿ Deseas eliminar este paciente ?");

    if (respuesta) {
      eliminarPaciente(id);
    }
  }

  return (
    <div className="mt-5 bg-white shadow-md mx-5 px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-orange-400 uppercase">
        Nombre:{" "}
        <span className="font-normal normal-case text-gray-700">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-orange-400 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case text-gray-700">
          {propietario}
        </span>
      </p>

      <p className="font-bold mb-3 text-orange-400 uppercase">
        Email:{" "}
        <span className="font-normal normal-case text-gray-700">{email}</span>
      </p>

      <p className="font-bold mb-3 text-orange-400 uppercase">
        Fecha alta:{" "}
        <span className="font-normal normal-case text-gray-700">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-orange-400 uppercase">
        Sintomas:{" "}
        <span className="font-normal normal-case text-gray-700">
          {sintomas}
        </span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          className="py-2 px-10 bg-blue-400 text-white uppercase font-bold hover:bg-transparent hover:text-blue-400 hover:border-2 cursor-pointer rounded-md transition-all"
          type="button"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          className="py-2 px-10 bg-rose-400 text-white uppercase font-bold hover:bg-transparent hover:text-rose-400 hover:border-2 cursor-pointer rounded-md transition-all"
          type="button"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
