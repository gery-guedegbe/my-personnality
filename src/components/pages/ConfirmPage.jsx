import React from "react";

const ConfirmPage = ({ scores, onModify, onSubmit }) => {
  // Recevoir les scores, la fonction pour modifier et soumettre en tant que props
  return (
    <div className="h-screen w-full bg-opacity-20 bg-black flex items-center justify-center text-center ">
      <div className=" w-72 h-auto bg-white p-4 rounded-lg shadow flex flex-col items-center space-y-4">
        <div className="text-lg font-semibold">
          Merci d'avoir complété le questionnaire.
        </div>
        <p className="text-sm text-gray-500">
          {" "}
          Si vous souhaitez modifier vos réponses, cliquez sur{" "}
          <span className="font-semibold text-gray-600">"Modifier"</span>. Si
          vous êtes prêt à soumettre vos réponses, cliquez sur{" "}
          <span className="font-bold text-gray-600">"Soumettre"</span>.
        </p>

        <div className="w-full flex items-center justify-evenly ">
          <button
            className="bg-principal hover:bg-boldPrincipal text-white font-semibold p-2 rounded-lg shadow-md"
            onClick={onSubmit} // Appeler la fonction onSubmit lors du clic sur "Soumettre"
          >
            {" "}
            Soumettre
          </button>
          <button
            className="bg-white text-gray-500 font-semibold p-2 rounded-lg shadow-md"
            onClick={onModify} // Appeler la fonction onModify lors du clic sur "Modifier"
          >
            Modifier
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPage;
