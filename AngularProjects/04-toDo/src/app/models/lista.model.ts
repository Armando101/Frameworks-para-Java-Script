import { ListaItem } from './lista-item.model';

export class Lista {
	public id: number;
	public title: string;
	public createDate: Date;
	public finishDate: Date;
	public done: boolean;
	public items: ListaItem[];

	constructor(title: string) {
		this.title = title;
		this.createDate = new Date();
		this.done = false;
		this.items = [];
		this.id = new Date().getTime();
	}
}