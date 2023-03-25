{
    // 객체를 선언합니다
    let object = {
        name: '바나나',
        price: 1200,
    };

    // 출력합니다.
    for (let key in object) {
        console.log(`${key}: ${object[key]}`);
    }
}
