console.log('Hello'.charAt(0));
console.log('Hello'.charCodeAt(0));

function checkGender(no) {
    let reverseNo = no.split('').reverse().join('');
    let gender = parseInt(reverseNo.charAt(6));
    console.log(gender);

    switch (gender) {
        case 1: case 3:
            console.log('남자입니다.');
            break;
        case 2: case 4:
            console.log('여자입니다.');
            break;
        default:
            console.log('잘못된 주민번호입니다.');
    }
}

checkGender('970301-3345678');
checkGender('970301-1345678');
checkGender('9703012345678');
checkGender('9703014345678');