from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import pytesseract
import cv2
import numpy as np

app = Flask(__name__)
CORS(app)

def deskew(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    edges = cv2.Canny(gray, 50, 150, apertureSize=3)
    lines = cv2.HoughLines(edges, 1, np.pi / 180, 100)

    if lines is not None:
        for rho, theta in lines[0]:
            if np.pi / 2 - 0.1 < theta < np.pi / 2 + 0.1:
                angle = np.degrees(theta - np.pi / 2)
                rotated = rotate(image, angle)
                return rotated
    return image

def rotate(image, angle):
    center = tuple(np.array(image.shape[1::-1]) / 2)
    rot_mat = cv2.getRotationMatrix2D(center, angle, 1.0)
    rotated = cv2.warpAffine(image, rot_mat, image.shape[1::-1], flags=cv2.INTER_LINEAR)
    return rotated

def preprocess(file_path):
    image = cv2.imread(file_path)
    image = deskew(image)  # เรียกใช้ deskew() หลังจากโหลดภาพ

    # 1. Resize the image (optional but can improve OCR)
    image = cv2.resize(image, None, fx=2, fy=2, interpolation=cv2.INTER_CUBIC)

    # 2. Convert the image to grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # 3. Apply thresholding to create a binary image
    # Adjust the threshold value based on your image's characteristics
    _, binary_image = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

    # 4. Apply noise reduction (optional)
    # You can use techniques like median blurring to reduce noise
    binary_image = cv2.medianBlur(binary_image, 3)
    
    return binary_image

@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    file_path = "C:\\Users\\lukwa\\Downloads\\ServerFlask\\ServerFlask\\Tesseract-OCR\\uploads\\" + file.filename

    try:
        file.save(file_path)
        
        if file is not None:  # คุณอาจต้องแก้เป็น `if file_path is not None:` หรือตามที่เหมาะสม
            image = preprocess(file_path)
            result = pytesseract.image_to_string(image, lang='tha-hand')
            return jsonify({'message': result})
        else:
            return jsonify({'message': 'Failed to load image'})
    except Exception as e:
        return jsonify({'error': str(e)})


if __name__ == '__main__':
    app.run(debug=True)