
function Estimate(param) {
    this.units = param;
    
    this.getEstimate = function (unitType, width, height) {
        let priceInfo = this.units.find(unit => unit.type == unitType);
        return priceInfo.price * width * height;
    }

    this.addUnit = function (unit) {
        this.units.push(unit);
    }
}

let unitInfo = [
    {type: 'wood', price: 100},
    {type: 'iron', price: 300},
    {type: 'plastic', price: 200}
];

let estimate = new Estimate(unitInfo);
estimate.addUnit({type: 'paper', price: 50});
console.log(estimate.getEstimate('paper',30, 50));