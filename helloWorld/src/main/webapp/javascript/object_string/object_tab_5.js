function Table(param) {

    this.members = param;
    
    this.addMember = function (member) {
        this.members.push(member)
    };

    this.showList = function () {
        let str = '<table border="1">';
        
        this.members.forEach((val, idx) => {
            if (idx == 0) {
                str += '<tr>';
                for (let prop in val) {
                    str += `<th>${prop}</th>`;
                }
                str += '</tr>';
            }

            str += '<tr>';
            for (let prop in val) {
                str += `<td>${val[prop]}</td>`;
            }
            str += '</tr>';
        });

        str += '</table>';
        return str;
    };
    
}

let members = [
    {id: 'user1', name: '홍길동', age: 20},
    {id: 'user2', name: '고길동', age: 22},
    {id: 'user3', name: '박길동', age: 25}
];

let t1 = new Table(members);
t1.addMember({id: 'user4', name: '전성하', age: 30});
let str = t1.showList();
document.write(str);