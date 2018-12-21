
class PCDate  {
	constructor() {
		//Empty Constructor
	}

	static isDate(date){
		if(!date) return false;
		if(isNaN(date)) return false;
		return Object.prototype.toString.call(date) === "[object Date]";
	}

	static addTime(date,number,unit){
		const error = "PCDate.addTime() error: Please select a valid unit.";
		if(!date) return null;
		if(!unit) throw error;
		unit = unit.toLowerCase();
		var tempDate = new Date(date.getTime());
		if(unit == "years" || unit == "year"){
			tempDate.setFullYear(date.getFullYear() + number);
		}else if(unit == "months" || unit == "month"){

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
			throw error;
		}

		return tempDate;
	}

	static subtractTime(date,number,unit){
		return PCDate.addTime(date,-number,unit);
	}
}

module.exports = PCDate;
