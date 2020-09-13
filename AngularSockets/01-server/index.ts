import express from 'express';
import Server from "./classes/server";
import router from "./routes/router";
import cors from 'cors';

const server = new Server();

// Body parser
server.app.use(express.urlencoded({ extended: true}));
server.app.use(express.json());

// CORS
server.app.use(cors({ origin: true, credentials: true }));

// Rutas de servicios
server.app.use('/', router)

server.start(() => {
    console.log(`Server running at http://localhost:${server.port}`)
});