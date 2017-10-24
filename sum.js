const sum = (a, b) => ( a + b )
const sumMinus = (a, b) => ( a-b)

const forEach = (items, callback) => {
    for(let index = 0; index < items.length; index++) {
        callback(items[index])
    }
}

export {
    sum,
    sumMinus,
    forEach
}
