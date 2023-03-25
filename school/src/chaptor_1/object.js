let object = {
    name: '바나나',
    price: 1200,
    print: function () {
        console.log(`${this.name}의 가격은 ${this.price}`);
    },
};

object.print();
