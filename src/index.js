const all = [
    'this',
    'is',
    'the',
    'test'
]

const random = () => {
    return all[Math.random(3)]
}


module.exports = {
    all, 
    random
}