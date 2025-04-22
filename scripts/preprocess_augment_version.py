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

#Create new project version and preprocess/augment
version_one = project.generate_version(settings={
    "augmentation" : {
    },
   "preprocessing" :{
        "auto-orient": True,
        "resize": {"width":416, "height":416, "format": "Stretch to"},
        "grayscale": False
    }
})

#create version object for new version
version = project.version(version_one)

