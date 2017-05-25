const mealCost, tipPercent, taxPercent;

(function() {
    const tip = (mealCost *  (tipPercent/100));
    const tax = (mealCost * (taxPercent/100));

    const totalCost = (parseFloat(mealCost) + parseFloat(tip) + parseFloat(tax)).toFixed(0);
        
    console.log(`The total meal cost is ${totalCost} dollars.`)
})()