import cv2
import sys
import pandas as pd

(major_ver, minor_ver, subminor_ver) = (cv2.__version__).split('.')

def create_tracker(minor_ver):
    """Create a tracker using OpenCV"""
    tracker_types = ['BOOSTING', 'MIL','KCF', 'TLD', 'MEDIANFLOW', 'GOTURN', 'MOSSE', 'CSRT']
    tracker_type = tracker_types[2]

    if int(minor_ver) < 0:
        tracker = cv2.Tracker_create(tracker_type)
    else:
        if tracker_type == 'BOOSTING':
            tracker = cv2.TrackerBoosting_create()
        if tracker_type == 'MIL':
            tracker = cv2.TrackerMIL_create()
        if tracker_type == 'KCF':
            tracker = cv2.TrackerKCF_create()
        if tracker_type == 'TLD':
            tracker = cv2.TrackerTLD_create()
        if tracker_type == 'MEDIANFLOW':
            tracker = cv2.TrackerMedianFlow_create()
        if tracker_type == 'GOTURN':
            tracker = cv2.TrackerGOTURN_create()
        if tracker_type == 'MOSSE':
            tracker = cv2.TrackerMOSSE_create()
        if tracker_type == "CSRT":
            tracker = cv2.TrackerCSRT_create()
    return tracker


def collision(box, point):
    """Determine if point collides with box"""
    p_x, p_y = point
    # (box_x, box_y): top left corrdinates of box
    box_x, box_y, box_w, box_h = box
    return p_x > box_x and p_x < box_x + box_w and p_y > box_y and p_y < box_y + box_h


if __name__ == '__main__' :

    # Set up tracker.
    # Instead of MIL, you can also use
    print(major_ver, minor_ver, subminor_ver)
    tracker = create_tracker(minor_ver)

    # Read video
    video = cv2.VideoCapture("world2.mp4")

    # Exit if video not opened.
    if not video.isOpened():
        print ("Could not open video")
        sys.exit()

    # Read first frame.
    ok, frame = video.read()
    if not ok:
        print ('Cannot read video file')
        sys.exit()

    # Define an initial bounding box
    bbox = (287, 23, 86, 320)

    counter = 0

    # Draw box or centroid or both
    draw_box = True
    draw_centroid = True

    # Read coordinates
    df = pd.read_csv("gaze_positions2.csv")
    gaze_timestamp = df['gaze_timestamp']
    norm_pos_x = df['norm_pos_x']
    norm_pos_y = df['norm_pos_y']

    # Scale coordinates
    # pupil labs coordinates have (0, 0) at bottom left, (1, 1) at top right
    pos_x = norm_pos_x * 1280
    pos_y = 720 - (norm_pos_y * 720)
    i = 0

    screen_center_x = 640
    screen_center_y = 360

    tracker_started = False

    while True:
        # Read a new frame
        ok, frame = video.read()
        if not ok:
            break
        height, width, channels = frame.shape

        if cv2.waitKey(1) == ord('a'):
            counter = 0
            print('select box')

            tracker = create_tracker(minor_ver)
            bbox = cv2.selectROI("Frame", frame, fromCenter=False,
                    showCrosshair=True)

            # Initialize tracker with first frame and bounding box
            ok = tracker.init(frame, bbox)
            tracker_started = True
            continue
        else:
            # Start timer
            timer = cv2.getTickCount()

            # Calculate Frames per second (FPS)
            fps = cv2.getTickFrequency() / (cv2.getTickCount() - timer);

            # Draw gaze center
            gaze_center = (int(pos_x[i]), int(pos_y[i]))
            cv2.circle(frame, gaze_center, 10, (0, 255, 0), -1)
            i += 1

            if tracker_started:
                # Update tracker
                ok, bbox = tracker.update(frame)

                # Draw bounding box
                if ok:
                    if draw_box:
                        # Tracking success
                        p1 = (int(bbox[0]), int(bbox[1]))
                        p2 = (int(bbox[0] + bbox[2]), int(bbox[1] + bbox[3]))
                        cv2.rectangle(frame, p1, p2, (255,0,0), 2, 1)
                        # Check collision
                        if collision(bbox, gaze_center):
                            counter += 1
                        cv2.putText(frame, "Seen for {} frames".format(counter), (100,80), cv2.FONT_HERSHEY_SIMPLEX, 0.75,(0,255,0),2)

                    if draw_centroid:
                        center_x = int(bbox[0] + (bbox[2] / 2))
                        center_y = int(bbox[1] + (bbox[3] / 2))
                        center_point = (center_x, center_y)
                        cv2.circle(frame, center_point, 10, (255, 0, 0), -1)

                else :
                    # Tracking failure
                    cv2.putText(frame, "Tracking failure detected", (100,80), cv2.FONT_HERSHEY_SIMPLEX, 0.75,(0,0,255),2)
            else :
                # No tracker
                cv2.putText(frame, "Tracker not initialized", (100,80), cv2.FONT_HERSHEY_SIMPLEX, 0.75,(255,0,0),2)

            # Uncomment below to display tracker type/FPS on screen
            # Display tracker type on frame
            # cv2.putText(frame, tracker_type + " Tracker", (100,20), cv2.FONT_HERSHEY_SIMPLEX, 0.75, (50,170,50),2);

            # Display FPS on frame
            # cv2.putText(frame, "FPS : " + str(int(fps)), (100,50), cv2.FONT_HERSHEY_SIMPLEX, 0.75, (50,170,50), 2);

            # Display result
            cv2.imshow("Tracking", frame)
            cv2.waitKey(3)

        # Exit if ESC pressed
        k = cv2.waitKey(1) & 0xff
        if k == 27 :
            break
