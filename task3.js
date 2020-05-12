const object1 = {
    name: 'Boris',
    weight: 15
};

const object2 = {
    name: 'Boris',
    weight: 15
};

const object3 = {
    name: 'Rex',
    weight: 20,
};

// Реализуйте функцию isEquivalent
function isEquivalent(a, b) {
    if (a === b) {
        return true;
    }

    if (a == null || typeof(a) != "object" ||
        b == null || typeof(b) != "object") {
        return false;
    }

    return JSON.stringify(a) === JSON.stringify(b);
}

console.log(isEquivalent(object1, object2)); // true
console.log(isEquivalent(object1, object3)); // false