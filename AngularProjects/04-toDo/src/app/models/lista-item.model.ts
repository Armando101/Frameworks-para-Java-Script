export class ListaItem {
	public description: string;
	public done: boolean;

	constructor(description: string) {
		this.description = description;
		this.done = false;
	}
}