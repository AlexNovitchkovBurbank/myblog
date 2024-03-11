import { OvernightPerDayBaseRate, OvernightPricesOver6People } from "../../OvernightPrices.js";
import StringToIntConverter from "../Converters/StringToIntConverter.js";

const OvernightCalculator = {
    Calculate() {
        const numDaysInput = document.querySelector("#num-days-input-for-day-use-only-checkbox");
        const numPeopleInput = document.querySelector("#num-people-input-for-day-use-only-checkbox");

        if (numPeopleInput === null)
            throw new Error("Number of people input does not exist for the day use only container");

        if (numDaysInput === null)
            throw new Error("Number of days input container does not exist for the day use only container");

        const numDaysInputValueAsNum = StringToIntConverter.Convert(numDaysInput.value);
        const numPeopleInputValueAsNum = StringToIntConverter.Convert(numPeopleInput.value);

        let total = 0.0;

        if (isNaN(numPeopleInputValueAsNum) || isNaN(numDaysInputValueAsNum)) {
            total = NaN;
        }
        if (numPeopleInputValueAsNum >= 6) {
            total = (OvernightPerDayBaseRate + OvernightPricesOver6People[numPeopleInputValueAsNum - 6 - 1]) * numDaysInputValueAsNum;
        }
        else if (numPeopleInputValueAsNum === 0 || numDaysInputValueAsNum === 0) {
            total = 0.0;
        }
        else {
            total = OvernightPerDayBaseRate * numDaysInputValueAsNum;
        }

        return total;
    }
}

export default OvernightCalculator;