from flask import Flask, jsonify, request
from flask_cors import CORS
from inference_sdk import InferenceHTTPClient
import os
import requests
from dotenv import load_dotenv
from base64 import b64encode

#reusable variables
load_dotenv()
api_key = os.getenv("ROBOFLOW_API_KEY")
model_id = "banana-classification-eprkr/2"

app = Flask(__name__)
cors = CORS(app, origins="*")

@app.route('/api/users', methods=['GET'])
def users():
    return jsonify({"users": ["Alice", "Bob", "Charlie"]})

#route which takes in an image and returns the classification
@app.route('/classify', methods=['POST'])
def classify():
    data = request.json
    img = data.get('image')
    if not img:
        return jsonify({"error": "No image provided"}), 400

    base64_data = img.split(",")[1] if "," in img else img

    # Fix padding
    missing_padding = len(base64_data) % 4
    if missing_padding:
        base64_data += '=' * (4 - missing_padding)

    roboflow_url = f"https://classify.roboflow.com/{model_id}?api_key={api_key}"
    response = requests.post(
        roboflow_url,
        json={"image": base64_data},
        headers={"Content-Type": "application/json"}
    )

    return jsonify(response.json())

if __name__ == '__main__':
    app.run(debug=True, port=8080)