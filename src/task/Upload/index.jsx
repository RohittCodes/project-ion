import React, { useState } from 'react';

function ImageForm() {
  const [image, setImage] = useState(null);

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];
    // Perform validations if needed before setting the image
    setImage(selectedFile);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions with the uploaded image, e.g., send to a server
    if (image) {
      // Handle the uploaded image (e.g., upload to server, process, etc.)
      console.log('Uploaded image:', image);
    }
  };

  console.log(image)
  return (
    <div>
      <h1>Image Upload</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleImageUpload} accept="image/*" />
        <button type="submit">Upload</button>
      </form>
      {image && (
        <div>
          <h2>Preview:</h2>
          <img src={URL.createObjectURL(image)} alt="Uploaded" style={{ maxWidth: '300px' }} />
        </div>
      )}
    </div>
  );
}

export default ImageForm;
