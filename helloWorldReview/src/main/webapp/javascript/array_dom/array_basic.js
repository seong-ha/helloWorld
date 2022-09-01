const names = [];

names[0] = '정다슬';
names[names.length] = '백진희';
names[names.length] = '황용주';
names[names.length] = '손정빈';
names[names.length] = '범건라';

names.push('이주훈');
console.log(names);
names.pop();
console.log(names);

names.shift();
names.unshift('  ');
console.log(names);

let sliceNames = names.slice(1,4);
console.log(sliceNames);

names.splice(0,3, 'splice');
console.log(names);

names.length = 2;
console.log(names);

let concat = names.concat(sliceNames);
console.log(concat);