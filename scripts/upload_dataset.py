from roboflow import Roboflow
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
api_key = os.getenv("ROBOFLOW_API_KEY")
# Initialize Roboflow
rf = Roboflow(api_key)  # Replace with your actual API key

# Target project (from your URL)
workspace = rf.workspace("ml-project-zblcx")
project = workspace.project("banana-classification-eprkr")

# Upload classification dataset
# For classification datasets, use this specific format:
workspace.upload_dataset(
    "/Users/riyak/dev/raikes-unl/machine-learning/Project_Second_Year/banana_img_dataset.folder",
    "banana-classification-eprkr",
    num_workers=8,
    project_license="MIT",
    project_type="classification", # Must match project type
    batch_name=None,
    num_retries=0
)

print("Upload complete! Verify at:")
print(f"https://app.roboflow.com/ml-project-zblcx/banana-classification-eprkr")