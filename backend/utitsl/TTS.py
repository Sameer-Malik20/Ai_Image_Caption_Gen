from gtts import gTTS
import os

def generate_audio(text, filename):
    output_folder = 'output'
    os.makedirs(output_folder, exist_ok=True)

    output_path = os.path.join(output_folder, f"{filename}.mp3")
    tts = gTTS(text)
    tts.save(output_path)
    return output_path
