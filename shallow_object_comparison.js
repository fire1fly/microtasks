let obj1 = {
    users: 34,
    source: 'github',
    stars: '832',
    update: false
}
let obj2 = {
    users: 123,
    stars: '1456',
    update: true,
    todo: 'commit'
}

// method 1
const mergeSameKeysOfObjects = (obj1, obj2) => {
    Object.keys(obj1).forEach(key1 => {
        Object.keys(obj2).forEach(key2 => {
            if (key1 === key2) {
                obj1[key1] = obj2[key2];
            }
        });
    });
    return obj1;
}

// method 2
console.log(mergeSameKeysOfObjects(obj1, obj2));

const mergeSameKeysOfObjects2 = (obj1, obj2) => {
    for (key in obj1) {
        if (obj2?.key) {
            obj1[key] = obj2[key];
        }
    }
    return obj1;
}

console.log(mergeSameKeysOfObjects2(obj1, obj2));