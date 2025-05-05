import google.generativeai as genai
import os
from dotenv import load_dotenv
from PIL import Image

load_dotenv()

genai.configure(api_key="AIzaSyC--QnxvB3oS5JrAyvN1HOGnJE-sGDb0zg")
model = genai.GenerativeModel('gemini-2.0-flash')

def generate_caption(image_path):
    image = Image.open(image_path)
    response = model.generate_content([
        "Describe the image in detail.",
        image
    ])
    return response.text
