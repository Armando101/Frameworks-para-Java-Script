export class GraficaData {
	private months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	private values: number[] = [1, 2, 3, 4, 5, 6, 7];

	constructor() {}

	getDataGraphic() {
		return [
			{ data: this.values, label: 'Ventas'}
		];
	}

	incremetnValue(month: string, value: number) {
		month = month.toLowerCase().trim();
		this.months.map((itemMonth, item) => itemMonth === month && (this.values[item] += value));
		return this.getDataGraphic();
	}
}