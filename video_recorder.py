import os
import time
import cv2

print("Initializing ... ", end="")
file_path = None

cap = cv2.VideoCapture(0)
fourcc = cv2.VideoWriter_fourcc(*'XVID')
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
fps = cap.get(cv2.CAP_PROP_FPS)

print("OK")
print(f"WIDTH: {width} HEIGHT: {height} FPS: {fps}")


DATA_DIR = os.path.join(os.getcwd(), "dataset")

RECORDING_DURATION = 2
TOTAL_FRAMES = int(RECORDING_DURATION * fps)


def record_data(subject_id, gesture):
    global file_path
    save_location = os.path.join(DATA_DIR, subject_id, gesture)
    if not os.path.exists(save_location):
        os.makedirs(save_location)
    filename = str(int(time.time())) + ".avi"
    file_path = os.path.join(save_location, filename)

    writer = cv2.VideoWriter(
        file_path, fourcc, fps, (width, height)
    )

    n_frames = 0
    while n_frames < TOTAL_FRAMES:
        ret, frame = cap.read()

        if not ret:
            continue

        # cv2.imshow("WebCam", frame)

        writer.write(frame)
        n_frames = n_frames + 1

    writer.release()
    # cv2.destroyAllWindows()


def delete_last_recording():
    global file_path
    try:
        os.remove(file_path)
        print(f"Removed {file_path}")
    except:
        print("Couldn't remove file!")


def cleanup():
    cap.release()
    cv2.destroyAllWindows()
