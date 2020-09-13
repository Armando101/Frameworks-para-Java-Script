import express from 'express';
import Server from "./classes/server";
import router from "./routes/router";

const server = new Server();

// Body parser
server.app.use(express.urlencoded({ extended: true}));
server.app.use(express.json());

server.app.use('/', router)

server.start(() => {
    console.log(`Server running at http://localhost:${server.port}`)
})