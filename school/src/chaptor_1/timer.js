setTimeout(function () {
    console.log('1초가 지났습니다.');
}, 1000);

const interval_console = setInterval(function () {
    console.log('1초마다 호출됩니다.');
}, 1000);

setTimeout(function () {
    clearInterval(interval_console);
}, 3000);
