let now = new Date();
console.log(now.toDateString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(`${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초 ${now.getMilliseconds()}`);

console.log(`${now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()}`);
console.log(`0${now.getSeconds()}`.slice(-2));

Date.prototype.hhmiss = function() {
    console.log(`0${now.getHours()}`.slice(-2) + '시 ' + `0${now.getMinutes()}`.slice(-2) + '분 ' +`0${now.getSeconds()}`.slice(-2) + '초')
}
now.hhmiss();