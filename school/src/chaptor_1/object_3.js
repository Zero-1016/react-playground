const object = {
    number: 273,
    string: 'RintIanTta',
    boolean: true,
    array: [52, 273, 103, 32],
    method: function () {},
};

for (let i in object) {
    console.log(`${i}:${object[i]}`);
}
