Hospital Operation Scheduler
Project Description
The Hospital Operation Scheduler is a web-based application designed to modernize and simplify the process of managing surgical schedules. It provides a centralized platform for hospital administrators and staff to create, track, and manage operations, ensuring a smooth and efficient workflow. By replacing manual scheduling with a digital solution, the application helps prevent resource conflicts, improves communication, and enhances overall operational efficiency within a healthcare facility.

Live Demo
You can view the live application here:

https://hospital-operation-scheduler.netlify.app/

Features
Operation Management: Create, update, and delete operation entries with essential details like patient name, procedure type, and date.

Surgeon and Room Assignment: Assign specific surgeons and operating rooms to each scheduled procedure.

Real-time Updates: Data is stored in a real-time database, ensuring all users have access to the most current schedule.

Conflict Detection: The system helps to identify and prevent potential conflicts, such as double-booking a surgeon or an operating room.

Intuitive Interface: A clean and easy-to-use interface makes navigation and scheduling straightforward for all staff.

Technology Stack
This project is built using a modern and lightweight technology stack.

Frontend:

HTML5: Provides the structure and content of the web pages.

CSS3: Handles all styling, layout, and visual presentation.

JavaScript (ES6+): Manages the application's logic, user interactions, and dynamic content updates.

Backend & Database:

Firebase: A comprehensive platform used for the backend.

Firebase Realtime Database: Stores and synchronizes the operation schedule in real time.

Firebase Authentication: (If implemented) Manages user sign-in and access control.

Getting Started
Follow these instructions to get a local copy of the project up and running on your machine for development and testing purposes.

Prerequisites
You will need the following installed on your machine:

Git

A modern web browser (e.g., Chrome, Firefox)

Installation
Clone the repository:

git clone https://github.com/your-username/hospital-operation-scheduler.git

Navigate to the project directory:

cd hospital-operation-scheduler

Firebase Setup
To get the application working, you need to configure your own Firebase project.

Create a Firebase Project:

Go to the Firebase Console.

Click "Add project" and follow the on-screen instructions to create a new project.

Add a Web App:

In your new Firebase project, click on the "Web" icon (</>) to create a web app.

Follow the setup wizard. Firebase will provide you with a configuration object. It will look something like this:

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
  databaseURL: "..."
};

Update the Code:

In your project's JavaScript file (e.g., script.js), locate where the Firebase configuration is initialized.

Replace the placeholder configuration with the one you copied from the Firebase Console.

Set Database Rules:

In the Firebase Console, navigate to the Realtime Database section.

Go to the Rules tab.

For a simple, public-facing demo, you can use the following rules, but note that these are insecure for production and should be updated later:

{
  "rules": {
    ".read": true,
    ".write": true
  }
}

Running the Application
This is a front-end only application, so you can run it by simply opening the index.html file in your browser.

# From the project root directory
open index.html # on macOS
start index.html # on Windows

Alternatively, you can use a simple web server like Live Server in VS Code to get a hot-reloading development environment.

Author
Your Name - https://github.com/souvik-mohanty
