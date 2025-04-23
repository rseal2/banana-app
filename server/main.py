from flask import Flask, jsonify
from flask_cors import CORS
from inference_sdk import InferenceHTTPClient
import os
from dotenv import load_dotenv

#global variables
load_dotenv()
api_key = os.getenv("ROBOFLOW_API_KEY")

CLIENT = InferenceHTTPClient(
    api_url = "https://classify.roboflow.com",
    api_key = api_key
)

model_id = "banana-classification-eprkr/2"

app = Flask(__name__)
cors = CORS(app, origins="*")

@app.route('/api/users', methods=['GET'])
def users():
    return jsonify({"users": ["Alice", "Bob", "Charlie"]})

@app.route('/classify', methods=['POST'])
def classify():
    image = "placeholder"
    #TODO:get image from request on front end
    classification = CLIENT.infer(image, model_id)
    return jsonify(classification)

if __name__ == '__main__':
    app.run(debug=True, port=8080)