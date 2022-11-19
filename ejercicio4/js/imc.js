function getImc(height, weigth) {
    return (weigth / height ** 2);
};
console.log(getImc(1.78, 61));
console.log(getImc(1.80, 78));