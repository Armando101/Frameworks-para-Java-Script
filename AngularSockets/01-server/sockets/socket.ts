import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import { UserList } from '../classes/user-list';
import { User } from '../classes/user';

export const usersConnected = new UserList();

export const connectClient = (client: Socket, io: socketIO.Server) => {
	const user = new User(client.id);
	usersConnected.add(user);
}

export const disconnect = (client: Socket, io: socketIO.Server) => {
	client.on('disconnect', () => {
		usersConnected.deleteUser(client.id);
		console.log(usersConnected.getList());
		io.emit('active-users', usersConnected.getList());
	});
}

// Listen messages
export const message = (client: Socket, io: socketIO.Server) => {
	client.on('message', (payload: {from: string, body: string}) => {
		console.log('Message recived ', payload);

		io.emit('new-message', payload);
	});
}

// Configurar usuario
export const configUser = (client: Socket, io: socketIO.Server) => {
	client.on('config-user', (user: { name: string}, callback: Function ) => {
		usersConnected.updateName(client.id, user.name);
		io.emit('active-users', usersConnected.getList());
		console.log(usersConnected.getList());
		callback({
			ok: true,
			message: `User ${user.name}, configurado`
		});
	});
}

// Obtener usuarios
export const getUsers = (client: Socket, io: socketIO.Server) => {
	client.on('get-users', () => {
		io.to(client.id).emit('active-users', usersConnected.getList());
	});
}
