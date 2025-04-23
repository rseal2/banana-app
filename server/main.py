from flask import Flask, jsonify
from flask_cors import CORS
from inference_sdk import InferenceHTTPClient
import os
import requests
from dotenv import load_dotenv

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
    img = data.get("image")
    if not img:
        return jsonify({"error" : "No image provided"}), 400
    
    roboflow_url = f"https://classify.roboflow.com/{model_id}?api_key={api_key}"

    response = requests.post(
        roboflow_url,
        json={"image":base64_image.split(","[1] if "," in base64_image else base64_image)},
        headers={"Content-Type": "application/json"}
    )
    return jsonify(response.json())

if __name__ == '__main__':
    app.run(debug=True, port=8080)