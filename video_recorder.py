import time
import cv2

cap= cv2.VideoCapture(0)
fps = cap.get(cv2.CAP_PROP_FPS)


width= int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height= int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

writer= cv2.VideoWriter('basicvideo.mp4', cv2.VideoWriter_fourcc(*'mp4v'), 30.0, (width,height))


n_frames = 0
total_frames = 5 * 30

while n_frames < total_frames:
    ret,frame= cap.read()

    writer.write(frame)
    n_frames = n_frames + 1

    # cv2.imshow('frame', frame)

    if cv2.waitKey(1) & 0xFF == 27:
        break


cap.release()
writer.release()
cv2.destroyAllWindows()