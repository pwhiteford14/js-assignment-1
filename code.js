/**
* @Author Whiteford, Parker (pwhiteford02@gmail.com)
* @version 1.0
 * @summary calculates price of new home
*@todo nothing
* */
"use strict";
const Prompt = require('readline-sync');
let bedroomAmount, bathroomAmount, garageSize, lotNumber, total;


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
        totalCalc();
    }

main();

function setLotNumber() {
    lotNumber = Prompt.question("Enter your Lot Number: ");
}

function setBathroomAmount () {
        bathroomAmount = Number(Prompt.question("Enter your Preferred Amount of Bathrooms: "));
    }

    function setBedroomAmount () {
        bedroomAmount = Number(Prompt.question("Enter your Preferred Amount of Bedrooms: "));
    }

    function setGarageSize() {
        garageSize = Number(Prompt.question("Enter your Preferred amount of car space for your new garage: "));
    }

    function calcPrice() {
        const BEDROOM_PRICE = 17000;
        const BATHROOM_PRICE = 12500;
        const BASE_PRICE = 50000;
        const GARAGE_SIZE_PRICE = 6000;
        total = (BEDROOM_PRICE * bedroomAmount) + (BATHROOM_PRICE * bathroomAmount) + (garageSize * GARAGE_SIZE_PRICE) + BASE_PRICE;
    //this calculates things
    }

    function totalCalc () {
       console.log("the estimated price of your new home on lot " + lotNumber + " will be $" + total );
    }


