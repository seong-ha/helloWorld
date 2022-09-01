const names = ['이현성', '이주훈', '김상영', '황용주', '전성하', '김준형'];

let members = names.map((val, idx, arr) => {
    let obj = {
        name: val,
        age: idx + 1
    };

    return obj;
})

console.log(members);


let lees = members.filter((val, idx, arr) => {

    if (val.name.startsWith('이')) {
        return val;
    }
});

console.log(lees);


let leesMembers = names.map((val, idx, arr) => {
    let obj = {
        name: val,
        age: idx + 1
    };

    return obj;
}).filter((val, idx, arr) => {
    if (val.name.startsWith('이')) {
        return val;
    }
});

console.log(leesMembers);




let mapFnc = (val, idx, arr) => {
    let obj = {
        name: val,
        age: idx + 1
    };

    return obj;
};

let filterFnc = (val, idx, arr) => {
    if (val.name.startsWith('이')) {
        return val;
    }
};


let simples = names.map(mapFnc).filter(filterFnc);
console.log(simples);


let reduceMap = names.reduce((acc, val, idx, arr) => {
    
    let obj = {};
    obj.name = val;
    obj.age = idx + 1;

    acc.push(obj);

    return acc;
}, []);

console.log(reduceMap);



let reduceFilter = reduceMap.reduce((acc, val, idx, arr) => {
    if (val.name.startsWith('이')) {
        acc.push(val);
    }

    return acc;
}, []);

console.log(reduceFilter);