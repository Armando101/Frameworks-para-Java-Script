import express from 'express';
import socketIO from 'socket.io';
import http from 'http';
import { SERVER_PORT } from '../global/environments';

export default class Server {
    public app: express.Application;
    public port: number;

    public io: SocketIO.Server;
    private httpServer: http.Server;

    constructor() {
        this.app = express();
        this.port = SERVER_PORT;

        this.httpServer = new http.Server(this.app);
        // Para sockets no podemos usar el app de expres
        // Es necesario el servidor de http por eso lo incluimos
        this.io = socketIO(this.httpServer);
        this.listenSocket();
    }

    private listenSocket() {
        console.log('Listening sockets');
        this.io.on('connection', client => console.log('New client connected'));
    }

    start(callback: VoidFunction) {
        this.httpServer.listen(this.port, callback);
    }
}