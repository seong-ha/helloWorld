

let str = 'Good, Morning!';
// slice: 잘라내기                                                         |123456789|
console.log(str.slice(2, 7)); // 인덱스 2부터 7(미포함)까지.                12|34567|89
console.log(str.slice(2)); // 인덱스 2부터 끝까지                           12|3456789|
console.log(str.slice(2, -2)); // 인덱스 2부터 끝에서 인덱스2(미포함)까지    12|34567|89
console.log(str.slice(-2)); // 끝에서 인덱스2(미포함)까지만                  1234567|89|

console.log(str.substring(0,7));    //  인덱스 0에서 7(미포함)까지 빼오기

console.log(str.indexOf('orn'));    // 앞에서부터 해당 문자열 찾아서 시작위치 반환
console.log(str.lastIndexOf('orn'));    // 뒤에서부터 해당 문자열 찾아서 시작위치 반환(인덱스는 둘다 같은걸 찾음. 수사시작점이 다른것뿐)

console.log(str.indexOf('Good', 5));  // 뒤쪽 인덱스를 기준으로 뒤로 가며 해당 단어 수사 시작. 있으면 위치 반환. 없으면 -1반환
 
 // str.indexOf('Good', 0 + 1) -> 1 기준으로 'Good'을 수사하면 없으니 -1 반환
console.log(str.indexOf('Good', str.indexOf('Good') + 1));


// 문자열에서 반복되는 횟수
let cnt = 0;
let pos = str.indexOf('o');

while(pos != -1) {
    cnt ++;
    pos = str.indexOf('o', pos + 1);
}
console.log(cnt + ' 회');





const members = [
    {name: '황병걸', age: 25},
    {name: '김효인', age: 22},
    {name: '이상욱', age: 18},
    {name: '최근석', age: 29}
];

// members배열에서 serachKey를 찾아서 나이를 콘솔에 출력
let searchKey = prompt('찾을 이름을 입력');  
let searched = 0;
members.forEach((member, idx) => {

    // if (member.name == searchKey) {
    //     console.log(`${member.name}의 나이는 ${member.age}살입니다.`);
    //     searched++;
    // }

    if (member.name.indexOf(searchKey) != -1) {
        console.log(`${member.name}의 나이는 ${member.age}살입니다.`);
        searched++;
    }

    // if (member.name.includes(searchKey)) {
    //     console.log(`${member.name}의 나이는 ${member.age}살입니다.`);
    //     searched++;
    // }
    
    if (idx == (members.length - 1) && searched == 0) {
        console.log('찾으시는 분이 없습니다.');
    }
})