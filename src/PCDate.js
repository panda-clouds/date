
class PCDate  {
	constructor() {
		//Empty Constructor
	}

	static dateByAddingThisManyUnits(date,number,unit){

		unit = unit.toLowerCase();
		var tempDate = new Date(date.getTime());
		if(unit == "months" || unit == "month"){
			tempDate.setMonth(date.getMonth() + number);
		}else if(unit == "weeks" || unit == "week"){
			tempDate.setDate(date.getDate() + (number * 7));
		}else if(unit == "days" || unit == "day"){
			tempDate.setDate(date.getDate() + number);
		}else if(unit == "hours" || unit == "hour"){
			tempDate.setHours(date.getHours() + number);
		}else if(unit == "minutes" || unit == "minute"){
			tempDate.setMinutes(date.getMinutes() + number);
		}else  if(unit == "seconds" || unit == "second"){
			tempDate.setSeconds(date.getSeconds() + number);
		}else{
			throw "We can't add that unit yet in dateByAddingThisManyUnits (1)";
		}

		return tempDate;
	}
}

module.exports = PCDate;
