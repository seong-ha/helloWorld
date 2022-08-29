
const arr = [];
// 값 추가할 때
// arr[arr.length] = 10; // 이렇게 해도 되고
arr.push(10); // 함수 이용해서 이렇게 해도 됨.
arr.push(20);

let obj = {
    sname: 'Hong',
    age: 20,
    friends: ['Park'],
    addFriend: function (friend) {
        this.friends.push(friend);
    },
    showFriendName: function () {
        this.friends.forEach((val) => {
            console.log(val.name);
        })
    }
}

obj.addFriend('Jeon');
obj.addFriend({name: 'Hwang', phone: '010-1111-2222'});

console.log(obj);

console.log(obj.friends[2].phone);
console.log(obj.friends[2]['phone']);
obj.showFriendName();