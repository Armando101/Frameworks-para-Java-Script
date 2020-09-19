export class GraficaData {
	private months: string[] = ['january', 'february', 'march', 'april', 'may', 'june', 'july'];
	private values: number[] = [0, 0, 0, 0, 0, 0, 0];

	constructor() {}

	getDataGraphic() {
		return [
			{ data: this.values, label: 'Ventas'}
		];
	}

	incremetnValue(month: string, value: number) {
		month = month.toLowerCase().trim();
		this.months.map((itemMonth, item) => {
			itemMonth === month && (this.values[item] += value)
		});
		return this.getDataGraphic();
	}
}