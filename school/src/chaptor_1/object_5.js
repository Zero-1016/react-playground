{
    let products = [
        { name: '바나나', price: 1200 },
        { name: '사과', price: 2000 },
        { name: '배', price: 3000 },
        { name: '고구마', price: 700 },
        { name: '감자', price: 600 },
        { name: '수박', price: 5000 },
    ];

    function printProduct(product) {
        console.log(`${product.name}의 가격은 ${product.price}원 입니다.`);
    }

    for (let product of products) {
        printProduct(product);
    }
}
