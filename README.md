# Electronic Shop

**An Online Store built with React and Firebase**

## Table of Contents

- [Overview](#overview)
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

Electronic Shop is a lightweight and easy-to-setup template for an online store application. Built with React for the frontend and Firebase for the backend, its design is simple to allow easy modifications for your specific needs. This project provides essential functionalities and components needed for an online shopping experience.

## Demo

A demo video of the application can be found [here](Demo/ElectronicShop%20Demo.mp4).

You can also view the deployed working version of the web app on GH-pages [here](https://adibakshi28.github.io/Electronic_Shop/).

## Features

- **User Authentication**: Secure user authentication using Firebase Authentication.
- **Product Listing**: Display products with details such as name, price, and description.
- **Shopping Cart**: Add, remove, and manage products in the shopping cart.
- **Order Management**: Handle user orders and maintain order history.
- **Responsive Design**: Fully responsive design to ensure usability across different devices.

## Technologies Used

- **Frontend**: 
  - React: A JavaScript library for building user interfaces.
  - JavaScript, CSS, HTML
- **Backend**: 
  - Firebase: Backend-as-a-Service for authentication and database.
  - Firestore: A NoSQL database by Firebase.
- **Build Tools**: 
  - Webpack: A module bundler.
  - Babel: A JavaScript compiler.

## Setup and Installation

### Prerequisites

Ensure you have the following installed:
- Node.js (v14.x or higher)
- npm (Node package manager, v6.x or higher)

### Installation Steps

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/adibakshi28/Electronic_Shop.git
    cd Electronic_Shop
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Firebase Setup**:
    - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
    - Copy the Firebase configuration details.
    - Add your Firebase configuration to `src/firebaseConfig.js`:
      ```javascript
      const firebaseConfig = {
          apiKey: "YOUR_API_KEY",
          authDomain: "YOUR_AUTH_DOMAIN",
          projectId: "YOUR_PROJECT_ID",
          storageBucket: "YOUR_STORAGE_BUCKET",
          messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
          appId: "YOUR_APP_ID"
      };
      export default firebaseConfig;
      ```

4. **Run the Application**:
    ```bash
    npm start
    ```
    The application should now be running on `http://localhost:3000`.

## Project Structure

```bash
Electronic_Shop/
├── build/                  # Production build files
├── Demo/                   # Demo video of the application
│   └── ElectronicShop Demo.mp4
├── node_modules/           # Node.js modules
├── public/                 # Public assets and main HTML file
├── src/                    # Source files for the application
│   ├── components/         # Reusable React components
│   ├── pages/              # Page components
│   ├── App.js              # Main application component
│   ├── firebaseConfig.js   # Firebase configuration file
│   ├── index.js            # Entry point for React
│   └── ...                 # Other files and folders
├── .firebaserc             # Firebase project configuration
├── .gitignore              # Files to ignore in Git
├── firebase.json           # Firebase hosting configuration
├── LICENSE                 # License file
├── package-lock.json       # Exact versions of dependencies
├── package.json            # Project metadata and dependencies
└── README.md               # This README file

## Usage

### Adding Products

To add products, modify the Firestore database in Firebase:

1. Go to Firestore Database in the Firebase Console.
2. Create a collection named `products`.
3. Add documents with fields such as `name`, `price`, `description`, and `imageURL`.

### Authentication

User authentication is handled by Firebase Authentication. Ensure that authentication methods (e.g., email/password) are enabled in the Firebase Console under the Authentication section.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

For more information, visit the [repository](https://github.com/adibakshi28/Electronic_Shop).
