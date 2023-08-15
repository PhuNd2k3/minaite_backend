function clean(obj) {
    for (let propName in obj) {
        if (obj[propName] === null || obj[propName] === undefined || obj[propName].length === 0 ) {
            delete obj[propName];
        }
    }
    return obj;
}

module.exports = { clean };
