function Estimate(param) {
    this.unit = param;
    
    this.getEstimate = function (unitType, width, height) { // 'wood' 20 20 -> 100 * 20 * 20
        let priceInfo = this.unit.find(val => val.type == unitType);
        return priceInfo.price * width * height;
    }

    this.addUnit = function (unit) {
        this.unit.push(unit);
    }
}

let unitInfo = [
    {type: 'wood', price: 100},
    {type: 'iron', price: 300},
    {type: 'plastic', price: 200}
];

let estimate = new Estimate(unitInfo);
let result = estimate.getEstimate('iron', 10, 10);
console.log(`계산 값은 ${result}`);

estimate.addUnit({type: 'paper', price: 50});
result = estimate.getEstimate('paper', 35, 20);
console.log(`계산 값은 ${result}`);