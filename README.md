# Robot Game

This is a simple game where the player controls a robot on a 5x5 grid. The objective is to move the robot to reach as many target squares as possible within a 60-second time limit.



## Features

- A 5x5 grid tabletop
- A toy robot that can be moved with three controls: Left, Right, and Move
- A target square that the robot needs to reach
- A 60-second game timer
- A leaderboard that shows the players and their scores

## Tech Stack

- **Frontend**: React, Material UI, React Router
- **Backend**: Node.js, Express, Prisma, MongoDB

## Prerequisites

- Node.js
- npm or yarn
- MongoDB instance (cloud)

## Clone the repository

- git clone https://github.com/Ikechukwu-attah/glass-canvas
- cd robot-game


## Set up the backend

1. Navigate to the backend directory:

    ```bash
    cd server
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `server` directory and add your environment variables:

    ```env
    DATABASE_URL="your-database-url"
    PORT=4000
    CLIENT_URL=http://localhost:3000
    ```

4. Initialize Prisma and migrate the database:

    ```bash
    npx prisma migrate dev --name init
    ```

5. Start the backend server:

    ```bash
    npm start
    ```

## Set up the frontend

1. Navigate to the frontend directory:

    ```bash
    cd client
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `client` directory and add your environment variables:

    ```env
    REACT_APP_API_BASE_URL=http://localhost:4000
    ```

4. Start the frontend development server:

    ```bash
    npm start
    ```

## API Endpoints

### Player Endpoints

- **Create Player**

    ```http
    POST /players
    ```

    **Request Body**

    ```json
    {
      "username": "string"
    }
    ```

    **Response**

    ```json
    {
      "id": "string",
      "username": "string"
    }
    ```

- **Get Players**

    ```http
    GET /players
    ```

    **Response**

    ```json
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
    ```

### Game Session Endpoints

- **Create Game Session**

    ```http
    POST /game-sections
    ```

    **Request Body**

    ```json
    {
      "robotPosition": "string",
      "targetPosition": "string",
      "playerId": "string",
      "duration": 60,
      "score": 0
    }
    ```

    **Response**

    ```json
    {
      "id": "string",
      "robotPosition": "string",
      "targetPosition": "string",
      "playerId": "string",
      "duration": 60,
      "score": 0,
      "gameOver": false
    }
    ```

- **Get Game Sessions**

    ```http
    GET /game-sections
    ```

    **Response**

    ```json
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
    ```

## Environment Variables

### Server

- `DATABASE_URL`: The URL of your MongoDB instance.
- `PORT`: The port on which the server will run.
- `CLIENT_URL`: The URL of the client application.

### Client

- `REACT_APP_API_BASE_URL`: The base URL of the backend API.

## Usage

1. **Start the backend server**: Run `node index.jsx` in the `server` directory.
2. **Start the frontend development server**: Run `npm start` in the `client` directory.
3. Open your browser and navigate to `http://localhost:3000`.

