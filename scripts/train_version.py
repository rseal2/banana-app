from roboflow import Roboflow
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
api_key = os.getenv("ROBOFLOW_API_KEY")

# Initialize Roboflow
rf = Roboflow(api_key) 

#Retrieve the project
workspace = rf.workspace("ml-project-zblcx")
project = workspace.project("banana-classification-eprkr")

#retrieve version to train
version = project.version("2")

#export dataset in required format
version.export("multiclass")

#train this version
model = version.train(
    speed="fast",
    checkpoint= None
)

