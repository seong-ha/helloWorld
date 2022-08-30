class Estimate {
    constructor(param) {
        this.unit = param;
    }

    getEstimate(unitType, width, height) {
        let priceInfo = this.unit.find(function(val) {
            return val.type == unitType;
        })

        return priceInfo.price * width * height;
    }

    addUnit(unit) {
        this.unit.push(unit);
    }
}

let unitInfo = [
    {type: 'wood', price: 100},
    {type: 'iron', price: 300},
    {type: 'plastic', price: 200}
];

let estimate = new Estimate(unitInfo);
let result = estimate.getEstimate('iron',30, 50);
console.log(`철의 견적은 ${result}원 입니다.`);

estimate.addUnit({type: 'paper', price: 50});
console.log(estimate.unit);