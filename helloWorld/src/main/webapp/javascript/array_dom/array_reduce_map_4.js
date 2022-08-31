/*
- Array.prototype.map(): 매핑의 의미(A -> A')
    (건수 같음) | (새로운 타입으로 만들어주겠다는 의미로 사용)

- Array.prototype.filter(): 필터링의 의미(A -> a)
    (건수가 줄어듦) | (조건을 만족하는 녀석만 담아주겠다는 의미로 사용)
*/


// 학번도 같이 나오게 추가해서 객체로 만들어내기.
const names = ['이현성', '이주훈', '황용주', '최승현'];

let members = names.map((name, idx, arr) => {
    let obj = {};
    obj.name = name;    // {name: '이현성', sno: 1}
    obj.sno = idx + 1;
                        
    return obj;
});

console.log(members);


// ===============================================================


// members에서 성이 이씨 인 사람만 뽑아내기.
let lees = members.filter((member, idx, arr) => {
    // return 값이 true이면 반환, false이면 반환 X
    return member.name.startsWith('이'); // startsWith: 문자열 메서드 
});

console.log(lees);


// ===============================================================


// 위의 2개를 한 번에 연결해서 실행. ==  names.map().filter();  메서드 체인
let result = names.map((name, idx, arr) => {
    let obj = {};
    obj.name = name;    // {name: '이현성', sno: 1}
    obj.sno = idx + 1;
                        
    return obj;
}).filter((member, idx, arr) => {
    // return 값이 true이면 반환, false이면 반환 X
    return member.name.startsWith('이'); // startsWith: 문자열 메서드 
});

console.log(result);


// ===============================================================


// 위 2개의 콜백 함수들을 새로운 함수에 담아서 메서드체인 간단하게 하기.

// map 메서드.
let mapfnc = (name, idx, arr) => {
    let obj = {};
    obj.name = name;
    obj.sno = idx + 1;
                        
    return obj;
}

// filter 메서드.
let filfnc = (member, idx, arr) => {
    return member.name.startsWith('이');
}

let simpleResult = names.map(mapfnc).filter(filfnc);
console.log(simpleResult);



// ===============================================================



// reduce로 map과 같은 기능 구현.
members = names.reduce((acc, val, idx) => {
    let obj = {};
    obj.name = val;     // {name: '이현성', sno: 1}
    obj.age = idx + 1;
    
    acc.push(obj);
    
    return acc;  
}, []);


// reduce로 filter와 같은 기능 구현.
lees = members.reduce((acc, val, idx) => {
   if (val.name.startsWith('이')) {
        acc.push(val);
   }

   return acc;
}, []);

console.log(lees);

// lees = members.reduce((acc, val, idx) => {
//     if (!val.name.startsWith('이')) {
//         for (let i = 0; i < acc.length; i++) {
//             if (!acc[i].name.startsWith('이')) {
//                 acc.splice(i,1);
//             }
//         }
//     }

//     return acc;
//  }, members);

//  console.log(lees);