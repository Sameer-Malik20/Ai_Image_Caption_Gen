from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
import os
from utitsl.caption_generator import generate_caption
from utitsl.TTS import generate_audio

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/upload', methods=['POST'])
def upload_image():
    image = request.files.get('image')
    if not image:
        return jsonify({'error': 'No image provided'}), 400

    image_path = os.path.join(UPLOAD_FOLDER, image.filename)
    image.save(image_path)

    # Step 1: Generate caption using Gemini
    caption = generate_caption(image_path)

    # Step 2: Generate audio for that caption
    audio_path = generate_audio(caption, image.filename.split('.')[0])

    return jsonify({
        'caption': caption,
        'audio': f"/audio/{os.path.basename(audio_path)}"
    })

@app.route('/audio/<filename>')
def get_audio(filename):
    return send_file(f'output/{filename}', mimetype='audio/mpeg')

if __name__ == '__main__':
    app.run(debug=True)
