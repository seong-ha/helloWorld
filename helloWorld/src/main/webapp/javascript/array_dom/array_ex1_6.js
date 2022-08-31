const data = `[{"id":1,"first_name":"Larry","last_name":"Roderigo","email":"lroderigo0@histats.com","gender":"Male","salary":8464},
               {"id":2,"first_name":"Wally","last_name":"Kuban","email":"wkuban1@comcast.net","gender":"Male","salary":9749},
               {"id":3,"first_name":"Antonella","last_name":"Mant","email":"amant2@addthis.com","gender":"Female","salary":6795},
               {"id":4,"first_name":"Philippa","last_name":"Brackstone","email":"pbrackstone3@nps.gov","gender":"Female","salary":9067},
               {"id":5,"first_name":"Brandy","last_name":"Brokenshaw","email":"bbrokenshaw4@newsvine.com","gender":"Male","salary":5165},
               {"id":6,"first_name":"Torre","last_name":"Robertshaw","email":"trobertshaw5@desdev.cn","gender":"Male","salary":7552},
               {"id":7,"first_name":"Godfree","last_name":"Rapps","email":"grapps6@bizjournals.com","gender":"Male","salary":3748},
               {"id":8,"first_name":"Ruby","last_name":"Thews","email":"rthews7@gravatar.com","gender":"Non-binary","salary":1557},
               {"id":9,"first_name":"Row","last_name":"Ballintyne","email":"rballintyne8@ezinearticles.com","gender":"Female","salary":2496},
               {"id":10,"first_name":"Cecilio","last_name":"Northeast","email":"cnortheast9@artisteer.com","gender":"Male","salary":8077},
               {"id":11,"first_name":"Ernaline","last_name":"Phlippsen","email":"ephlippsena@statcounter.com","gender":"Female","salary":7748},
               {"id":12,"first_name":"Odilia","last_name":"Evenden","email":"oevendenb@java.com","gender":"Female","salary":9414},
               {"id":13,"first_name":"Gilemette","last_name":"Stroban","email":"gstrobanc@creativecommons.org","gender":"Female","salary":8899},
               {"id":14,"first_name":"Noah","last_name":"Petrie","email":"npetried@shareasale.com","gender":"Male","salary":4334},
               {"id":15,"first_name":"Hort","last_name":"Ledwith","email":"hledwithe@umn.edu","gender":"Male","salary":6472}]`;


let result = JSON.parse(data); // string -> object
console.log(result);

result.forEach(element => {
    console.log(element.first_name);
});




// 성별이 Female이고 salary 5000이상인 사람.

let str = '';

result.forEach((member, idx) => {
    if (idx == 0) {
        str += '<ul>';
    }

    if (member.gender == 'Female' && member.salary >= 5000) {
        str += '<li>'
        for (let prop in member) {
            str += `<span style="width: 1000px">${prop}: ${member[prop]}</span>`
            str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
        }
        str += '</li>';
    }

    if (idx == result.length - 1) {
        str += '</ul>';
    }
})

document.write(str);  // <ul><li>id값 이름값 성값 급여값</li>...</ul>


// 교수님이 하신거.
// let str = result.reduce((acc, val, idx) => {
//     if (idx == 0) {
//         acc = '<ul>';
//     }

//     if (val.gender == 'Female' && val.salary >= 5000) {
//         acc += `<li>${val.id} ${val.first_name} ${val.last_name} ${val.salary}</li>`;
//     }

//     if (idx == result.length - 1) {
//         acc += '</ul>';
//     }

//     return acc;
// },{})

// document.write(str);