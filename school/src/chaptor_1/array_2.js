let array = [52, 273, 32, 64, 72];

// forEach()
console.log('-----forEach-----');
array.forEach((v, i) => {
    console.log(`${i}번째 요소는 ${v}입니다.`);
});

// map 메소드
console.log();
console.log('-----map-----');
let outputA = array.map((v, i) => {
    return v * v;
});
console.log(outputA);

// filter 메소드
console.log();
console.log('-----filter-----');
let outputB = array.filter((v) => {
    return v % 2 == 0;
});
console.log(outputB);
