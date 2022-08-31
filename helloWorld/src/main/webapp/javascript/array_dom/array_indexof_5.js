/*
 String.prototype.indexOf(값)
 Array.prototype.indexOf(값)

 있으면 index, 없으면 -1 반환

Array.prototype.some(값): 해당 값이 하나라도 있으면 true, 없으면 false
Array.prototype.every(값): 해당 값을 모두 만족하면 true, 아니면 false
Array.prototype.find(값): 해당 값을 만족하는 첫번째 값을 반환. 아니면 undefined 반환

 */

 const members = ['진정욱', '노은경', '백나현'];
 let pos = members.indexOf('노은경');
 console.log(pos);
 
//  pos = members.indexOf('노언경');
//  console.log(pos);



// ===================================================================



// members배열에 newMems를 추가. 같은 값은 무시. 다른 값은 추가.
// 반복문 사용.
const newMems = ['김민지', '노은경', '정다슬'];
newMems.forEach(member => {
        if (members.indexOf(member) == -1) {
            members.push(member);
        }
})

console.log(members); //['진정욱', '노은경', '백나현', '김민지', '정다슬']



// ===================================================================



// some, every, find

let result = members.some(member => member == '노은경');
console.log(result);

result = members.every(member => member.length == 3);
console.log(result); // true

members.push('강민');
result = members.every(member => member.length == 3);
console.log(result); // false

result = members.find(member => member.startsWith('김'));
console.log(result);