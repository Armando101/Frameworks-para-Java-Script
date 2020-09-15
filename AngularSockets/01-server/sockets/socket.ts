import { Socket } from 'socket.io';
import SocketIO from 'socket.io';
import { UserList } from '../classes/user-list';
import { User } from '../classes/user';

export const usersConnected = new UserList();

export const connectClient = (client: Socket) => {
	const user = new User(client.id);
	usersConnected.add(user);

}

export const disconnect = (client: Socket) => {
	client.on('disconnect', () => {
		usersConnected.deleteUser(client.id);
		console.log(usersConnected.getList());
		console.log('Client disconnected');
	});
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
		usersConnected.updateName(client.id, user.name);
		console.log(user.name, ' configurado')
		console.log(usersConnected.getList());
		callback({
			ok: true,
			message: `User ${user.name}, configurado`
		});
	});
}