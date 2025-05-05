# AI Image Caption Generator

This is an AI-powered image captioning application that allows users to upload images, generate captions for them, and even ask questions related to the generated caption. The app also provides an audio output of the generated caption for better accessibility.

## Features

- **Image Upload**: Upload an image to the app.
- **Caption Generation**: The app generates a caption based on the uploaded image using advanced AI models (Gemini API).
- **Audio Output**: The caption is also converted into speech using text-to-speech technology.
- **Question Answering**: Users can ask questions based on the generated caption, and the app provides an answer.

## Technologies Used

### Backend:
- **Flask**: For building the backend API.
- **Gemini API**: Used for generating captions for the uploaded images.
- **Text-to-Speech (TTS)**: Converts the generated captions into audio.

### Frontend:
- **React**: For building the user interface.
- **Tailwind CSS**: For styling the frontend components.
- **Axios**: For making API requests from the frontend to the backend.

### Installation

### 1. Clone the repository:

```bash
git clone <repository-url>
2. Backend Setup:
Navigate to the backend directory.

bash
Copy
Edit
cd backend
Install the required Python packages:

bash
Copy
Edit
pip install -r requirements.txt
Create a .env file in the backend directory and add your API keys (e.g., Gemini API key).

ini
Copy
Edit
GEMINI_API_KEY=your-api-key-here
Run the Flask backend server:

bash
Copy
Edit
python app.py
3. Frontend Setup:
Navigate to the client directory.

bash
Copy
Edit
cd client
Install the required Node.js packages:

bash
Copy
Edit
npm install
Run the React development server:

bash
Copy
Edit
npm start
Usage
Upload an Image: Click on the "Upload & Get Caption" button to upload an image.

Generate Caption: Once the image is uploaded, the app will generate a caption for the image using the Gemini API.

Audio Output: The caption will also be converted into audio which you can listen to.

Ask Questions: You can ask questions related to the generated caption, and the app will provide an answer.

API Endpoints
1. /upload (POST)
Description: Upload an image to generate a caption.

Request:

image (multipart/form-data): The image file to be uploaded.

Response:

caption: The generated caption of the image.

audio: URL to the audio file of the generated caption.

2. /ask (POST)
Description: Ask a question based on the generated caption.

Request:

question: The question related to the caption.

context: The generated caption to be used as context for the question.

Response:

answer: The answer to the question based on the caption.

Contributing
Contributions are welcome! If you'd like to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.
