
/*
< 배열 요소 추가/삭제 >
 
- push(): 배열 마지막에 추가.
- pop(): 배열 마지막 제거

- unshift(): 첫번째 추가
- shift(): 첫번째 제거

- slice(first idx, last idx)
    : 첫번째 idx부터 마지막 idx(미포함)까지 잘라서 새 배열로 반환한다.(원본영향X)

- splice(idx, 대체할 개수, 대체할 값...)
    : 시작idx부터 대체할 개수만큼 대체할 값으로 대체(추가/수정/삭제)
      - 대체할 개수 0: 추가
      - 대체할 개수 0 초과: 수정 및 삭제

- concat(arr): 배열 합치기.
*/

const names = [];
names[0] = '정다슬';
names[names.length] = '백진희';
names[names.length] = '황용주';
names[names.length] = '손정빈';


// ========================================================================


names.push('김아현');

names.pop();
names.pop();

names.shift();
names.unshift('손정빈');
names.forEach(name => console.log(name)); // 손정빈, 백진희, 황용주


// ========================================================================


let sliceNames = names.slice(0,2);
console.log(sliceNames);  // 손정빈, 백진희


// ========================================================================


sliceNames.splice(2, 0, '홍길동');
console.log(sliceNames);  // 손정빈, 백진희, 홍길동

// names.splice(0, 0,'김민지', '노은경', '진정욱'); // splice(): 추가
// names.splice(0,3,'홍길동'); //  splice(): 삭제 및 수정
console.log(names);


// ========================================================================


names.length = 2;   // 크기를 지정.
console.log(names);


// ========================================================================


const concatNames = names.concat(sliceNames);
console.log(concatNames);