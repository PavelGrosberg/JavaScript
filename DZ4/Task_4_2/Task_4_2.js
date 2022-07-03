// Продолжить работу с интернет-магазином:

// В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.


const id = {
    1: {
        title: 'хлеб',
        price: 30
    },
    2: {
        title: 'батон',
        price: 50
    },
    3: {
        title: 'колбаса',
        price: 250
    },
    4: {
        title: 'масло',
        price: 150
    },
    5: {
        title: 'сыр',
        price: 200
    },
}

const magazine = {
    products: id,
    cart: {},

    addToCart: () => {
        let id = prompt('Введите ID товара (1-хлеб, 2-батон, 3-колбаса, 4-масло, 5-сыр.');
        magazine.cart[id] = magazine.products[id];
        alert('Спасибо за покупку!!!')
    },

    cartSum: function () {
        return Object.values(magazine.cart).reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.price;
        }, 0);
    }
}
