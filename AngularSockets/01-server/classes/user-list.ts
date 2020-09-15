import { User } from './user';

export class UserList {
	private list: User[] = [];

	constructor() {}

	// Agregar user
	public add(user: User) {
		this.list.push(user);
		return  user;
	}

	public updateName(id: string, newName: string): void {
		const user = this.list.find((user: User) => user.id === id);
		user && (user.name = newName);

		console.log(this.list);
	}

	// Get users list
	public getList(): User[] {
		return this.list;
	}

	public getUser(id: string): User | undefined {
		return this.list.find(user => user.id === id);
	}

	// get users in sala
	public getUserSala(sala: string): User[] {
		return this.list.filter(user => user.sala === sala);
	}

	// Delete users
	public deleteUser(id: string): User | undefined {
		const user = this.getUser(id);
		user && (this.list = this.list.filter(user => user.id !== id));
		return user;
	}
}