function calcSum(num) {
    let n = 0;
    for (let i = 1; i <= num; i++) {
        n = n + i;
        // n += i;
    };
    console.log(n);
};

calcSum(4);
calcSum(10);
calcSum(15);