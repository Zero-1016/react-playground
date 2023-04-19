(function () {
    console.log(this);
})();

(function () {
    console.log('====================================');
})();

(() => {
    console.log(this);
})();
