Robot Game

This is a simple game where the player controls a robot on a 5x5 grid. The objective is to move the robot to reach as many target squares as possible within a 60-second time limit.

Features
A 5x5 grid tabletop
A toy robot that can be moved with three controls: Left, Right, and Move
A target square that the robot needs to reach
A 60-second game timer
A leaderboard that shows the players and their scores

Tech Stack
Frontend: React, Material UI, React Router
Backend: Node.js, Express, Prisma, MongoDB

Prerequisites
Node.js
npm or yarn
MongoDB instance (cloud)

Set up the backend
1 Navigate to the backend directory:
cd server

2 Install dependencies:
npm install

3 Create a .env file in the server directory and add your environment variables:
DATABASE_URL="secret...."
PORT=4000
CLIENT_URL=http://localhost:3000

4 Initialize Prisma and migrate the database:
npx prisma migrate

5 Start the backend server:
npm start

Set up the frontend
1 Navigate to the frontend directory:
cd client

2 Install dependencies:
npm install

3 Create a .env file in the client directory and add your environment variables:
REACT_APP_API_BASE_URL=http://localhost:4000

4 Start the frontend development server:
npm start

API Endpoints

Player Endpoints:

Create Player:
POST /players
Request Body:
{
"username": "string"
}
Response:
{
"id": "string",
"username": "string"
}

Get Players:
GET /players
Response:
[
{
"id": "string",
"username": "string",
"games": [
{
"id": "string",
"score": 0,
"startTime": "2024-05-16T02:51:01.501Z",
"endTime": null,
"robotPosition": "string",
"targetPosition": "string",
"duration": 60,
"gameOver": false,
"playerId": "string"
}
]
}
]

Game Session Endpoints
Create Game Session:
POST /game-sections
Request Body:
{
"robotPosition": "string",
"targetPosition": "string",
"playerId": "string",
"duration": 60,
"score": 0
}

     Response

       {
        "id": "string",
        "robotPosition": "string",
        "targetPosition": "string",
        "playerId": "string",
        "duration": 60,
        "score": 0,
        "gameOver": false

}

Get Game Sessions
GET /game-sections
Response:
[
{
"id": "string",
"score": 0,
"startTime": "2024-05-16T02:51:01.501Z",
"endTime": null,
"robotPosition": "string",
"targetPosition": "string",
"duration": 60,
"gameOver": false,
"playerId": "string"
}
]

Environment Variables

Server
DATABASE_URL: The URL of your MongoDB instance.
PORT: The port on which the server will run.
CLIENT_URL: The URL of the client application.

Client
REACT_APP_API_BASE_URL: The base URL of the backend API.

Usage
Start the backend server: Run npm start in the server directory.
Start the frontend development server: Run npm start in the client directory.
Open your browser and navigate to http://localhost:3000.

NOTE:
Your React app might start on a different server. To avoid CORS errors, go to the server folder, open the .env file, and change the value of CLIENT_URL to match the URL of the client server that is running.
