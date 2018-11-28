const PCDate = require("../src/PCDate.js");

describe('PCDate.dateByAddingThisManyUnits', () => {

	it('adds one second', () => {
		const now = new Date();

		const newDate = PCDate.dateByAddingThisManyUnits(now,1,"second");

		expect(newDate.getTime() - now.getTime()).toBe(1000);
	});

	it('adds one week', () => {
		const now = new Date();

		const newDate = PCDate.dateByAddingThisManyUnits(now,1,"week");

		expect(newDate.getTime() - now.getTime()).toBe(604800 * 1000);
	});

	it('adds two weeks', () => {
		const now = new Date();

		const newDate = PCDate.dateByAddingThisManyUnits(now,2,"weeks");

		expect(newDate.getTime() - now.getTime()).toBe(1209600 * 1000);
	});
});
