import React, { useState } from "react";
import "../Styles.css";

function ImageUploader({ onUpload }) {
  const [inputKey, setInputKey] = useState(Date.now());

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpload(reader.result);
        setInputKey(Date.now());
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-uploader">
      <input
        key={inputKey}
        type="file"
        accept="image/*"
        onChange={handleUpload}
      />
    </div>
  );
}

export default ImageUploader;
