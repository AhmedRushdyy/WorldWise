WorldWise
WorldWise is a React application that allows users to explore cities from around the world. It provides information about various cities, including their locations on a map, details about each city, and the ability to create and delete cities.

Features
View a list of cities and their locations on a map.
Click on a city marker to see detailed information about the city.
Create a new city by providing its details.
Delete a city from the list.
Prerequisites
Before running the WorldWise application, ensure you have the following dependencies installed:

Node.js (version 14 or higher)
Installation
Clone the repository:
git clone https://github.com/sparkz-technology/worldwise.git
Change into the project directory:
cd worldwise
Install the dependencies:
npm install
Configuration
The WorldWise application uses a JSON server to provide city data. By default, the server is configured to run on http://localhost:8000. If you need to change the server URL, modify the BASE_URL constant in the CitiesProvider component located in src/providers/CitiesProvider.js.

Usage
Start the JSON server to serve the city data:
npm run server
Start the development server:
npm run dev
Open your browser and navigate to http://localhost:3000 to access the WorldWise application.
Authentication
The WorldWise application includes authentication functionality. You can log in using the following credentials:

Email: sparkz@worldwise.com
Password: qwerty
Available Scripts
In the project directory, you can run the following scripts:

npm run dev: Starts the development server.
npm run build: Builds the application for production.
npm run lint: Runs the ESLint linter to check for code quality and style issues.
npm run preview: Serves the production build locally for preview.
npm run server: Starts the JSON server to serve city data.
Contributing
Contributions are welcome! Feel free to open issues and submit pull requests to help improve the WorldWise application.

Acknowledgements
The WorldWise application uses the following open-source libraries:

React
React Router
Leaflet
React Leaflet
React DatePicker
JSON Server
ESLint
Thank you for using WorldWise!
