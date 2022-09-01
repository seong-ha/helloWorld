const members = ['진정욱', '노은경', '백나현'];
console.log(members.indexOf('백나'));


const newMems = ['김민지', '노은경', '정다슬'];

newMems.forEach(val => {
    
    if (members.indexOf(val) == -1) {
        members.push(val);
    }
});

console.log(members);


let result = members.every(val => val.length == 3);
console.log(result);

result = members.some(val => val == '진정욱');
console.log(result);

result = members.find(val => val.startsWith('김'));
console.log(result);