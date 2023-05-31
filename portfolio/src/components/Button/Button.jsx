import React from 'react';

const DownloadButton = ({ fileUrl, label }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
    link.target = '_blank'; // Adicionando o atributo target="_blank"
    link.click();
  };

  return (
    <button className='button-curriculo' onClick={handleDownload}>
      {label}
    </button>
  );
};

export default DownloadButton;


