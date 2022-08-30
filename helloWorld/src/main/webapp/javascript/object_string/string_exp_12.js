

let now = new Date();
console.log(now.toDateString()) // Tue Aug 30 2022
console.log(now.toLocaleDateString()) // 2022. 8. 30
console.log(now.toLocaleTimeString()) // 오후 5:29:11
console.log(`${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초 ${now.getMilliseconds()}`);

console.log(`${now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()}`)
console.log(`0${now.getSeconds()}`.slice(-2));  // 더 간단히 01 ~09 , 0|10| ~ 0|59|

console.log('abc'.toUpperCase());
console.log('ABC'.toLowerCase());

Date.prototype.hhmiss = function() {
    // 09:08:07, 12:34:07

    let time = `0${now.getHours()}`.slice(-2) + `시 ` + `0${now.getMinutes()}`.slice(-2) + '분 ' + `0${now.getSeconds()}`.slice(-2) + `초 ${now.getMilliseconds()}`;
    console.log(time);
}

now.hhmiss();