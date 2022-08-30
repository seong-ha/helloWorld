// 클래스 Estimate.  속성 - 재료, 단가: 재료와 부피 => 총금액 리턴

class Estimate {
    constructor(param) {
        this.unit = param;
    }

    getEstimate(unitType, width, height) { // 'wood' 20 20 -> 100 * 20 * 20
        let priceInfo = this.unit.find(function(val) { // 만족하는 첫번째 값(val)을 반환하는 메서드
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
let result = estimate.getEstimate('wood', 30, 50);
console.log(`계산 값은 ${result}`);

estimate.addUnit({type: 'ceramic', price: 400});
result = estimate.getEstimate('ceramic', 10, 20);
console.log(`계산 값은 ${result}`);