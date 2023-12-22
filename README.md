# Getting Started with SpaceX Launches
Welcome to the documentation for the SpaceX Launches application. This document provides an overview of the application, its features, and guidelines on how to set it up locally and use it.

This project was created with React and has been deployed to vercel.
For live demo, click [https://spacexlaunches-demo.vercel.app/](https://spacexlaunches-demo.vercel.app/) to view it in the browser.

## Getting Started
### Prerequisites
Before you begin, ensure you have the following installed:

Node.js &
npm (Node Package Manager)

## Installation
- Clone the repository: `git clone https://github.com/rizwan-rizu/spacexlaunches.git`
- Navigate to the project folder: `cd spacexlaunches`
- Install dependencies: `npm install`
- Run the the appliation locally: `npm start`

## Technology Used
- Typescript
- React
- Material-UI (MUI)
- Mui-system for the styled-components
- Mui data grid.
- React-router-dom
- moment (open source date library)
- axios

## Some implementation being implemented
-  Implemented re-usable API Service using Axios with Request Interceptor to append authorization header for the Bearer token and Response Interceptor to watch for the API response; if it fails with 401, then 
 retry the previous API call by getting the refreshed token. That code is commented out because the SpaceX API does not currently require the Bearer token but api service is being used to avoid any code redundancy.
- By using React Router i have created Protected Routes so that only authorized users can access the route/page based on the user roles. Currently I have commented out some logic in the protected route because of no roles and permissions.
- Implemented state management using the context api without any external library installation.
- For the purpose of code reusability, common components were created to be called whenever necessary.

## Things application should have but not implemented currently due to limited time
- Error Boundaries for error handling in React to catch JavaScript errors occurring anywhere in their child component tree
- Unit testing
- Setting up ESLint for improved code quality
- Implementation of infinite scrolling for the launches, fetching additional results as the user scrolls down. (couldn't implement it as the spacex api doesn't have the pagination implemented)

## Design Choice
This application was designed and developed to appeal to users who prefer the dashboard layout with navigation on the left as well as those who prefer the Top Nav layout. (screenshots attached below)

We list all of the previous and upcoming launches on the main page/default route. In that view, too, I've given the user the option to choose between the cards and the data grid view, depending on their preference. (screenshots attached below)

I've also included links, an image list, and a YouTube video of the launch on the detail page of the rocket, launch pad, and launch.

## Screenshots
### Dashboard Layout

![Dashboard layout](/src/assets/images/sidenav-layout.png?raw=true "Optional Title")

![Dashboard layout](/src/assets/images/sidebar-open.png?raw=true "Optional Title")

### TopNav Layout

![Topnav layout](/src/assets/images/topnav-layout.png?raw=true "Optional Title")

### Card view of launches

![card view](/src/assets/images/cards-layout.png?raw=true "Optional Title")

### Grid view of launches

![grid view](/src/assets/images/dashboard1.png?raw=true "Optional Title")

### Other

![grid view](/src/assets/images/imagelist.png?raw=true "Optional Title")

![grid view](/src/assets/images/video.png?raw=true "Optional Title")

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
