const PCDate = require("../src/PCDate.js");

describe('PCDate.isDate', () => {

	it('returns false when given number', () => {
		const string = 5;
		const boolResults = PCDate.isDate(string);
		expect(boolResults).toBe(false);
	});

	it('returns false when given a undefined', () => {
		const string = undefined;
		const boolResults = PCDate.isDate(string);
		expect(boolResults).toBe(false);
	});

	it('returns false when given a null', () => {
		const string = null;
		const boolResults = PCDate.isDate(string);
		expect(boolResults).toBe(false);
	});

	it('returns false when given an object', () => {
		const string = {};
		const boolResults = PCDate.isDate(string);
		expect(boolResults).toBe(false);
	});

	it('returns false when given an array', () => {
		const string = [];
		const boolResults = PCDate.isDate(string);
		expect(boolResults).toBe(false);
	});

	it('returns false when given a string', () => {
		const string = "hello";
		const boolResults = PCDate.isDate(string);
		expect(boolResults).toBe(false);
	});

	it('returns true when given a date', () => {
		const string = new Date();
		const boolResults = PCDate.isDate(string);
		expect(boolResults).toBe(true);
	});
});
describe('PCDate.dateByAddingThisManyUnits', () => {

	// We face a unique challenge writing unit tests for months and years
	// if we use "now" (ie when the test is actually run)
	// we will get varing results based on the current month or year.
	// therefor we have opted to use a fixed date

	const fixedDate = new Date(1545261511776);
	// December 19, 2018 at 4:19pm

	describe('PCDate.dateByAddingThisManyUnits (years)', () => {

		it('adds one year', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,1,"year");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(31536000000);
		});

		it('subtracts year', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,-1,"year");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(-31536000000);
		});

		it('adds two years', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,2,"years");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(63158400000);
		});

		it('subtracts two years', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,-2,"years");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(-63072000000);
		});

		it('adds 500 years', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,500,"years");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(15778454400000);
		});

		it('subtracts 500 years', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,-500,"years");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(-15778539102000);
		});

		it('adds zero years', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,0,"years");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(0);
		});

		it('subtracts null year', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,null,"year");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(0);
		});
	});

	describe('PCDate.dateByAddingThisManyUnits (months)', () => {

		it('adds one month', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,1,"month");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(2678400000);
		});

		it('subtracts month', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,-1,"month");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(-2592000000);
		});

		it('adds two months', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,2,"months");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(5356800000);
		});

		it('subtracts two months', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,-2,"months");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(-5270400000);
		});

		it('adds 500 months', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,500,"months");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(1314921600000);
		});

		it('subtracts 500 months', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,-500,"months");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(-1314921600000);
		});

		it('adds zero month', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,0,"months");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(0);
		});

		it('subtracts null month', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,null,"month");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(0);
		});
	});

	describe('PCDate.dateByAddingThisManyUnits (weeks)', () => {

		it('adds one week', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,1,"week");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(604800000);
		});

		it('subtracts week', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,-1,"week");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(-604800000);
		});

		it('adds two weeks', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,2,"weeks");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(1209600000);
		});

		it('subtracts two weeks', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,-2,"weeks");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(-1209600000);
		});

		it('adds 500 weeks', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,500,"weeks");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(302400000000);
		});

		it('subtracts 500 weeks', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,-500,"weeks");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(-302400000000);
		});

		it('adds zero weeks', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,0,"weeks");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(0);
		});

		it('subtracts null week', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,null,"week");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(0);
		});
	});

	describe('PCDate.dateByAddingThisManyUnits (days)', () => {

		it('adds one day', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,1,"day");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(86400000);
		});

		it('subtracts day', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,-1,"day");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(-86400000);
		});

		it('adds two days', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,2,"days");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(172800000);
		});

		it('subtracts two days', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,-2,"days");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(-172800000);
		});

		it('adds 500 days', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,500,"days");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(43200000000);
		});

		it('subtracts 500 days', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,-500,"days");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(-43200000000);
		});

		it('adds zero days', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,0,"days");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(0);
		});

		it('subtracts null day', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,null,"day");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(0);
		});
	});

	describe('PCDate.dateByAddingThisManyUnits (hours)', () => {

		it('adds one hour', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,1,"hour");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(3600000);
		});

		it('subtracts hour', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,-1,"hour");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(-3600000);
		});

		it('adds two hours', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,2,"hours");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(7200000);
		});

		it('subtracts two hours', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,-2,"hours");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(-7200000);
		});

		it('adds 500 hours', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,500,"hours");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(1800000000);
		});

		it('subtracts 500 hours', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,-500,"hours");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(-1800000000);
		});

		it('adds zero hours', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,0,"hours");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(0);
		});

		it('subtracts null hour', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,null,"hour");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(0);
		});
	});

	describe('PCDate.dateByAddingThisManyUnits (minutes)', () => {

		it('adds one minute', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,1,"minute");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(60000);
		});

		it('subtracts minute', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,-1,"minute");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(-60000);
		});

		it('adds two minutes', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,2,"minutes");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(120000);
		});

		it('subtracts two minutes', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,-2,"minutes");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(-120000);
		});

		it('adds 500 minutes', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,500,"minutes");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(30000000);
		});

		it('subtracts 500 minutes', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,-500,"minutes");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(-30000000);
		});

		it('adds zero minutes', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,0,"minutes");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(0);
		});

		it('subtracts null minute', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,null,"minute");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(0);
		});
	});

	describe('PCDate.dateByAddingThisManyUnits (seconds)', () => {

		it('adds one second', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,1,"second");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(1000);
		});

		it('subtracts second', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,-1,"second");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(-1000);
		});

		it('adds two seconds', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,2,"seconds");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(2000);
		});

		it('subtracts two seconds', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,-2,"seconds");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(-2000);
		});

		it('adds 500 seconds', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,500,"seconds");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(500000);
		});

		it('subtracts 500 seconds', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,-500,"seconds");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(-500000);
		});

		it('adds zero seconds', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,0,"seconds");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(0);
		});

		it('subtracts null second', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(fixedDate,null,"second");
			expect(newDate.getTime() - fixedDate.getTime()).toBe(0);
		});
	});

	describe('PCDate.dateByAddingThisManyUnits (invalid)', () => {

		it('should throw when passed an invalid unit', () => {
			expect(function(){ PCDate.dateByAddingThisManyUnits(fixedDate,1,"invalid"); }).toThrow("PCDate.dateByAddingThisManyUnits() error: Please select a valid unit.");
		});

		it('should throw when passed a null unit', () => {
			expect(function(){ PCDate.dateByAddingThisManyUnits(fixedDate,1,null); }).toThrow("PCDate.dateByAddingThisManyUnits() error: Please select a valid unit.");
		});

		it('should throw when passed a null date', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(null,1,"second");
			expect(newDate).toBe(null);
		});

		it('should throw when passed a null date and unit', () => {
			const newDate = PCDate.dateByAddingThisManyUnits(null,1,null);
			expect(newDate).toBe(null);
		});
	});
});
