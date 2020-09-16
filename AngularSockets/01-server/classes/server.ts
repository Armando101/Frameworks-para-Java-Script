import express from 'express';
import socketIO from 'socket.io';
import http from 'http';
import { SERVER_PORT } from '../global/environments';
import * as socket from '../sockets/socket';

export default class Server {
    private static _instance: Server;

    public app: express.Application;
    public port: number;

    public io: SocketIO.Server;
    private httpServer: http.Server;

    private constructor() {
        this.app = express();
        this.port = SERVER_PORT;

        this.httpServer = new http.Server(this.app);
        // Para sockets no podemos usar el app de expres
        // Es necesario el servidor de http por eso lo incluimos
        this.io = socketIO(this.httpServer);
        this.listenSocket();
    }

    public static getInstance() {
        return this._instance || (this._instance = new this());
    }

    private listenSocket() {
        console.log('Listening sockets');
        this.io.on('connection', client => {
        	console.log('New client connected: ', client.id);

            // Connec client
            socket.connectClient(client, this.io);

            // Configuarmos usuarios
            socket.configUser(client, this.io);

            // Get active users
            socket.getUsers(client, this.io);

            // Recibimos mensajes
            socket.message(client, this.io);

        	// Detectamos si el cliente se desconecta
        	socket.disconnect(client, this.io);
        });
    }

    start(callback: VoidFunction) {
        this.httpServer.listen(this.port, callback);
    }
}