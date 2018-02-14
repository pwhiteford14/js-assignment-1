/**
* @Author Whiteford, Parker (pwhiteford02@gmail.com)
* @version 0.0.1
 * @summary code stuff
*@todo Everything
* */

"use strict";
const Prompt = require('readline-sync');
let bedroomAmount, bathroomAmount, garageSize, lotNumber;
let basePrice, bedroomPrice, bathroomPrice, garageSizePrice, total;


/**
 * @method
 * @desc The dispatch method for our progress
 * @returns {null}

 **/

function main() {
setLotNumber();
setBathroomAmount();
setBedroomAmount();
setGarageSize();
calcPrice();
console.log("your Home plot lot" + lotNumber +  "will cost in total" + total + "dollars")
}

main();

    function setLotNumber() {
        lotNumber = Prompt.question("Enter your Lot Number");
    }

    function setBathroomAmount () {
        bathroomAmount = Prompt.question("Enter your Preferred Amount of Bathrooms")
    }

    function setBedroomAmount () {
        bathroomAmount = Prompt.question("Enter your Preferred Amount of Bedrooms ")
    }

    function setGarageSize() {
        garageSize = Prompt.question("Enter your Preferred amount of car space for your new garage")
    }

    function calcPrice() {
        bedroomPrice= 17000;
        bathroomPrice = 12500;
        basePrice = 50000;
        garageSizePrice = 6000;
        total = (bedroomPrice * bedroomAmount)+  (bathroomPrice * bathroomAmount) + (garageSize * garageSizePrice) + basePrice;
    }








