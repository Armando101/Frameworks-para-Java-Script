import { Socket } from 'socket.io';
import SocketIO from 'socket.io';

export const disconnect = (client: Socket) => {
	client.on('disconnect', () => console.log('Client disconnected'));
}

// Listen messages
export const message = (client: Socket, io: SocketIO.Server) => {
	client.on('message', (payload: {from: string, body: string}) => {
		console.log('Message recived ', payload);

		io.emit('new-message', payload);
	});
}

// Configurar usuario
export const configUser = (client: Socket, io: SocketIO.Server) => {
	client.on('config-user', (user: { name: string}, callback: Function ) => { 
		console.log(user.name, ' configurado')
		callback({
			ok: true,
			message: `User ${user.name}, configurado`
		});
	});
}