import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from './flag.avif'; // Importez l'image de fond depuis la racine du dossier src

const BackOfficeInterface = () => {
  // Définition des états pour gérer le fichier, l'empreinte CHECKSUM et les messages d'erreur/succès
  const [file, setFile] = useState(null);
  const [checksum, setChecksum] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0); // Ajout de l'état pour suivre la progression de l'upload

  // Fonction pour gérer le changement de fichier sélectionné par l'utilisateur
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Fonction pour gérer le changement de l'empreinte CHECKSUM
  const handleChecksumChange = (event) => {
    setChecksum(event.target.value);
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Vérification que le fichier et l'empreinte CHECKSUM sont remplis
    if (!file || !checksum) {
      setErrorMessage('Veuillez sélectionner un fichier et saisir une empreinte CHECKSUM.');
      return;
    }
    // Envoyer le fichier au serveur
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('checksum', checksum);

      // Configuration de la requête POST pour suivre la progression de l'upload
      const config = {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(progress);
        },
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      // Envoyer une requête POST au serveur avec le fichier et l'empreinte CHECKSUM
      const response = await axios.post('https://apex.oracle.com/pls/apex/candidat/election/candidat', formData, config);

      // Si la réponse est réussie, appeler la fonction pour valider l'importation côté serveur
      if (response.status === 200) {
        const validationResponse = await axios.post('URL_DE_LA_FONCTION_DE_VALIDATION', { /* données supplémentaires si nécessaire */ });
        if (validationResponse.status === 200) {
          // Afficher un message de succès si la validation est réussie
          setSuccessMessage(validationResponse.data.message);
        } else {
          // Afficher un message d'erreur si la validation a échoué
          setErrorMessage(validationResponse.data.error);
        }
      }
    } catch (error) {
      // Gérer les erreurs en affichant un message d'erreur
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
      <h1 className="text-center mb-4">Bienvenue, cher membre du DGE</h1>
      <div className="card p-4" style={{ maxWidth: '400px', width: '100%' }}>
        {/* Formulaire pour sélectionner le fichier et saisir l'empreinte CHECKSUM */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3 d-flex flex-column align-items-start">
            <label htmlFor="file" className="form-label">Sélectionnez le fichier électoral :</label>
            <input type="file" className="form-control" id="file" onChange={handleFileChange} />
          </div>
          <div className="mb-3 d-flex flex-column align-items-start">
            <label htmlFor="checksum" className="form-label">Saisissez l'empreinte CHECKSUM SHA256 :</label>
            <input type="text" className="form-control" id="checksum" value={checksum} onChange={handleChecksumChange} />
          </div>
          {/* Bouton pour soumettre le formulaire */}
          <button type="submit" className="btn btn-primary w-100">Uploader le fichier</button>
        </form>
        {/* Barre de progression */}
        {uploadProgress > 0 && (
          <div className="progress mt-3">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${uploadProgress}%` }}
              aria-valuenow={uploadProgress}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {uploadProgress}%
            </div>
          </div>
        )}
        {/* Affichage des messages d'erreur/succès */}
        {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
        {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
      </div>
    </div>
  );
};

export default BackOfficeInterface;