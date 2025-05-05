import React, { useState } from "react";
import axios from "axios";

function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [caption, setCaption] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setCaption("");
    setAudioUrl("");
  };

  const handleUpload = async () => {
    if (!image) return alert("Please select an image.");
    const formData = new FormData();
    formData.append("image", image);

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/upload", formData);
      setCaption(res.data.caption);
      setAudioUrl(`http://localhost:5000${res.data.audio}`);
      setLoading(false);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Please check the backend.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        AI Image Caption Generator
      </h1>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow"
      >
        {loading ? "Generating..." : "Upload & Get Caption"}
      </button>

      {preview && (
        <div className="mt-6 w-full max-w-md">
          <img
            src={preview}
            alt="Preview"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      )}

      {caption && (
        <div className="mt-4 bg-white shadow-md p-4 rounded-lg w-full max-w-md text-center">
          <h3 className="text-lg font-semibold mb-2">📝 Caption:</h3>
          <p className="text-gray-700">{caption}</p>
        </div>
      )}

      {audioUrl && (
        <audio
          controls
          className="mt-4 w-full max-w-md bg-white p-2 rounded shadow"
        >
          <source src={audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}

export default App;
