import time
import cv2

cap = cv2.VideoCapture(0)
fps = cap.get(cv2.CAP_PROP_FPS)

print("Initializing ... ", end="")

width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

writer = cv2.VideoWriter('dataset/basicvideo.mp4', cv2.VideoWriter_fourcc(
    *'mp4v'), 30.0, (width, height))

count = 0
n_frames = 0
total_frames = 5 * 30
current_time = time.time()

print("OK")

while n_frames < total_frames:
    ret, frame = cap.read()

    writer.write(frame)
    n_frames = n_frames + 1

    if time.time() > current_time + 1.0:
        current_time = time.time()
        count = count + 1
        print(count)

    # cv2.imshow('frame', frame)

    if cv2.waitKey(1) & 0xFF == 27:
        break


cap.release()
writer.release()
cv2.destroyAllWindows()
