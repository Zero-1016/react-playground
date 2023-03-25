// 상품 목록을 선언합니다
let products = [
    {
        name: '바나나',
        price: '1200',
        print: function () {
            console.log(`${this.name}의 가격은 ${this.price}입니다.`);
        },
    },
    {
        name: '바나나',
        price: '1200',
        print: function () {
            console.log(`${this.name}의 가격은 ${this.price}입니다.`);
        },
    },
    {
        name: '사과',
        price: '2000',
        print: function () {
            console.log(`${this.name}의 가격은 ${this.price}입니다.`);
        },
    },
    {
        name: '배',
        price: '3000',
        print: function () {
            console.log(`${this.name}의 가격은 ${this.price}입니다.`);
        },
    },
    {
        name: '고구마',
        price: '700',
        print: function () {
            console.log(`${this.name}의 가격은 ${this.price}입니다.`);
        },
    },
    {
        name: '감자',
        price: '600',
        print: function () {
            console.log(`${this.name}의 가격은 ${this.price}입니다.`);
        },
    },
    {
        name: '수박',
        price: '5000',
        print: function () {
            console.log(`${this.name}의 가격은 ${this.price}입니다.`);
        },
    },
];

// 반복해서 출력하니다.
for (let product of products) {
    product.print();
}
