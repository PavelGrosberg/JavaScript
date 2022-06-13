// С этого урока начинаем работать с функционалом интернет - магазина.Предположим, есть
// сущность корзины.Нужно реализовать функционал подсчета стоимости корзины в
// зависимости от находящихся в ней товаров.


const cart = [
    ['хлеб', 30],
    ['батон', 50],
    ['колбаса', 250],
    ['масло', 150],
    ['сыр', 200]
]

const cartSum1 = function cartSum(cart) {
    var sum = cart.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue[1]
    }, 0);
    return sum
}
console.log(cartSum1(cart))

const cartSum2 = (cart) => {
    return cart.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue[1]
    }, 0);

}
console.log(cartSum2(cart))
