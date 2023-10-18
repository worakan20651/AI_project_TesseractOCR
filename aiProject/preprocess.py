import cv2

def preprocess():
    # Load the image
    image = cv2.imread('your_image.png')

    # 1. Resize the image (optional but can improve OCR)
    image = cv2.resize(image, None, fx=2, fy=2, interpolation=cv2.INTER_CUBIC)

    # 2. Convert the image to grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # 3. Apply thresholding to create a binary image
    # Adjust the threshold value based on your image's characteristics
    _, binary_image = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

    # 4. Apply noise reduction (optional)
    # You can use techniques like median blurring to reduce noise
    # binary_image = cv2.medianBlur(binary_image, 3)
    return binary_image