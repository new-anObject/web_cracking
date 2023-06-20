# YOLOv5 🚀 by Ultralytics, GPL-3.0 license
"""
Perform test request
"""

# import pprint

import requests

DETECTION_URL = "http://localhost:5200/v1/img/point"
IMAGE = "captcha_7.png"

# Read image
with open(IMAGE, "rb") as f:
    image_data = f.read()

response = requests.post(DETECTION_URL, files={"image": image_data}).text

print(response)
