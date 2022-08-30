function Student(sno, sname) {
    this.sno = sno;
    this.sname = sname;
    this.showInfo = function() {
        return `학번은 ${this.sno}, 이름은 ${this.sname}입니다.`;
    }
}

let s1 = new Student('s77', '전성하');
console.log(s1.sno);
console.log(s1.sname);
console.log(s1.showInfo());

class Food {
    constructor() {

    }

    set eat(food){
        this._food = food;
    }

    get eat() {
        return this._food;
    }
}

let breakfast = new Food();
breakfast.eat = 'noodle';

console.log(breakfast.eat);
console.log(breakfast._food);

console.log(breakfast);