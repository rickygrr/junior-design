# Team 9105 - Customer Delivery Documents 

The junior-design github repository consists of two deliverables: the data visualization dashboard and the object detection plugin. The data visualization dashboard is a React Native application, while the object detection plugin is a python script that utilizes OpenCV in conjunction with Pupil Labs software. It is necessary to have the Pupil Labs Core head mounted device for this project.
Throughout the first sprint of the project, we started developing the data visualization dashboard. However, we decided to focus on the object detection plugin in the later sprints, as it is the main deliverable for the project. Following, are the release notes and install guides for both of these deliverables.


## Data Visualization Dashboard

### Release Notes

#### New Software Features
The data visualization dashboard consists of four main components - the area of interest side menu, the pie chart data layout, the bar graph data layout, and the grid data layout. In addition, there is an 'export' feature, which enables the user to download the current view of the data visualization dashboard as a pdf. 

#### Bug Fixes
N/A

#### Areas of Development 
There are two functionalities that are missing - 
1. The 'import data' feature, which enables the user to import a csv data file and display it in the data visualization dashboard.
2. The 'share' feature, which sends an email with the current view of the dashboard as a pdf, is currently not connected to an email service. As a result, this feature is not working properly.

### Install Guide

#### Pre-Requisites
1. [Install Node](https://nodejs.org/en/download/) 
2. Install Yarn Packet Manager
```
$ npm install yarnpkg -g
```

#### Dependent Libraries
1. Add Kendo Material Theme, KendoReact Layout Components, KendoReact PDF, and KendoReact Buttons
```
$ yarn add @progress/kendo-theme-material @progress/kendo-react-layout @progress/kendo-react-pdf @progress/kendo-drawing @progress/kendo-react-buttons
```
2. Add Bootstrap
```
$ yarn add bootstrap-4-grid
```
3. Add KendoReact Ripple
```
$ yarn add @progress/kendo-react-ripple
```
4. Add KendoReact Dialogs, KendoReact Inputs, and KendoReact Intl
```
$ yarn add @progress/kendo-react-dialogs @progress/kendo-react-inputs @progress/kendo-react-intl
```
5. Add KendoReact Charts
```
$ yarn add @progress/kendo-react-charts hammerjs
```
6. Add Kendo Data Query, KendoReact Date Inputs, KendoReact Dropdowns, KendoReact Grid, KendoReact Inputs, and KendoReact Intl
```
$ yarn add @progress/kendo-data-query @progress/kendo-react-dateinputs @progress/kendo-react-dropdowns @progress/kendo-react-grid @progress/kendo-react-inputs @progress/kendo-react-intl
```
7. Add KendoReact Layout
```
$ yarn add @progress/kendo-react-layout
```

#### Download & Run Instructions
1. Download the zip file for the junior-design github repository in the 'Clone or download' tab
2. Change to the junior-design/data-visualization directory
```
$ cd junior-design/data-visualization
```
3. Run the React data-visualization application on localhost
```
$ yarn start
```

---
## Objection Detection Plugin
The object detection plugin takes in videos and pupil data from a Pupil Capture recording, and allows the user to select and track a region of interest in the video clip. It also uses the pupil data to calculate how often the user looked at the region of interest.

#### Areas of Development

For the object detection plugin, there are 4 features that could be developed.
1. Adding a way to run the program with multiple videos without having to change directories. Possibly make the program look at "videos" folder.
2. Track more than one area at a time.
3. Add more metrics about eye tracking.
4. Integrate the outputted csv into the dashboard. Right now, they're separate systems.

#### Pre-Requisites
OpenCV and Pandas should be installed on the system for this plugin to work. The follwing are commands to install these through PyPI.

OpenCV:
```
$ pip install opencv-python
$ pip install opencv-contrib-python
```

Pandas:
```
$ pip install pandas
```

#### Usage
When run, the script will display the video clip on the screen. The user can then press ```A``` on the keyboard, which will pause the video and allow the user to draw a square on the screen to select the region to track. After selecting the region, pressing ```Enter``` will resume the video, and display the tracked region. After running the plugin, it will create or append to a csv called test.csv with some data. Be careful not to mix different videos into this csv.

To run this plugin, you'll need to record a video in Pupil Capture of Pupil Labs first. You will also need the gaze data associated with the video. Export the data from Pupil Labs by going into Pupil Player, opening the recording, and pressing 'e'. Then, move the ```world.mp4 ``` and ```gaze_positions.csv``` into a directory that contains ```object_detection_plugin.py```. Note: you may need to change the name of the video and csv to ```world2.mp4``` and ```gaze_positions.csv``` respectively. This can be fixed later by changing the names the plugin plugin is looking for. Then run the following line in command prompt once you've changed directory (cd) to where all these files are.
```
$ python object_detection_plugin.py
```



