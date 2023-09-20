# Drag-and-Drop Image Gallery with Authentication

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Authentication](#authentication)
- [Gallery Component](#gallery-component)
- [Loading State](#loading-state)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This React-based project is a fully functional and responsive image gallery that showcases a collection of images in a visually appealing way. It includes authentication features, allowing users to sign up and log in to access the gallery. Authenticated users can use drag-and-drop functionality to rearrange images within the gallery.

## Features

- **Authentication:**
  - Users can sign up and log in using their email and password.
  - Simple authentication with error handling and validation.

- **Image Display:**
  - Displays a grid layout of portrait images with consistent spacing and sizing.
  - Fetches static portrait images from Unsplash using their API.
  - Images are presented in a visually appealing manner with tags.

- **Loading State:**
  - Provides a loading state when images are being fetched.
  - Displays a loading spinner to indicate that the gallery is loading.

- **Search Functionality:**
  - Includes a search field to filter images based on tags.

- **Drag-and-Drop:**
  - Allows authenticated users to drag and rearrange images within the gallery.
  - Provides smooth animations and visual cues during drag-and-drop interactions.

- **Responsive Design:**
  - Ensures the gallery is responsive and functions seamlessly on various devices, including mobile phones, tablets, and desktops.

- **Styling and Design:**
  - Implements a visually appealing design for the gallery with CSS.

## Technologies Used

- React
- Firebase Authentication
- Axios (for making API requests to Unsplash)
- HTML5 and CSS for styling
- dnd kit (for drag and drop)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/image-gallery.git
   cd image-gallery
   ```

2. Install the project dependencies:

   ```bash
   npm install
   ```

## Configuration

Before running the application, you need to configure Firebase for authentication. Follow these steps:

1. Create a Firebase project on the Firebase Console (https://console.firebase.google.com/).

2. Go to "Authentication" in your Firebase project and enable the "Email/Password" sign-in method.

3. Set up your Firebase project configuration by creating a `firebase.js` file in the project's source directory. Replace the placeholders with your Firebase project configuration:

   ```javascript
   // src/firebase.js
   import firebase from 'firebase/app';
   import 'firebase/auth';

   const firebaseConfig = {
     apiKey: 'YOUR_API_KEY',
     authDomain: 'YOUR_AUTH_DOMAIN',
     projectId: 'YOUR_PROJECT_ID',
     storageBucket: 'YOUR_STORAGE_BUCKET',
     messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
     appId: 'YOUR_APP_ID',
   };

   const app = firebase.initializeApp(firebaseConfig);

   export const auth = app.auth();
   export default app;
   ```

## Usage

Run the development server:

```bash
npm start
```

Visit http://localhost:3000 in your web browser to access the application.

## Authentication

- Use the provided authentication form to sign up or log in.
- Use the following test credentials:
  - Email: user@example.com
  - Password: 1Password

## Gallery Component

- The main image gallery component displays portrait images fetched from Unsplash.
- Users can rearrange images using drag-and-drop functionality.
- Images are organized in a visually appealing grid layout.

## Loading State

- A loading spinner is displayed while images are being fetched.
- Users receive feedback that the gallery is loading.

## Styling

- CSS is used for styling, and you can customize the design to fit your preferences.

## Contributing

Contributions to this project are welcome. Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Create a pull request with a description of your changes.

## License
---

This project was created by Al-Ameen Olayinka Quadri.
```