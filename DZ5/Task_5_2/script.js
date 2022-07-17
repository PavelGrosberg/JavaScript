
// Задание 2
class Product {
    constructor(name, price, quantity = 0) {
        this.price = price;
        this.name = name;
        this.quantity = quantity;
        // дополнительные поля для каталога, например
        this.picUrl = '';
        this.description = '';
        this.feedback = ''

    }

    // Сделал метод для удобства, чтобы выводить
    stringify() {
        return JSON.stringify(this)
    }

}

class Basket {
    constructor(...items) {
        this.items = []
        for (let item of items) {
            this.items.push(item)
        }
        window.addEventListener('DOMContentLoaded', (event) => this.renderCart())
    }

    countBasketPrice() {
        return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    }

    countItems() {
        return this.items.length
    }

    renderCart() {
        let parent = document.getElementsByClassName('cart')[0];
        let status = this.countItems();
        let statusP = document.createElement('p');
        parent.appendChild(statusP);
        let text;
        if (status > 0) {
            text = `В корзине: ${status} товаров на сумму ${this.countBasketPrice()} рублей`;
            parent.style.backgroundColor = "#7FFF94";
        } else {
            text = 'Корзина пуста';
        }
        statusP.innerText = text;
    }

}

const b = new Basket(new Product('2', 122, 3), new Product('1', 113, 1));

//Задание 3
function generateCatalog() {
    let cat = [];
    const a = new Product('soap', 100);
    a.description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci.";

    const b = new Product('bread', 80);
    b.description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci.";

    const c = new Product('milk', 78);
    c.description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, adipisci.";

    cat.push(a, b, c);

    return cat
}

function renderCatalog(data) {
    const parent = document.getElementById('catalog');
    const h2 = document.createElement('h2');
    h2.innerText = 'Каталог';
    parent.appendChild(h2);
    for (let i = 0; i < data.length; i++) {
        const div = document.createElement('div');
        div.className = 'item-card';
        parent.appendChild(div);
        const h = document.createElement('h3');
        h.innerText = `${data[i].name} - ${data[i].price} ₽`;
        div.appendChild(h);
        const p = document.createElement('p');
        p.innerText = data[i].description;
        div.appendChild(p);
    }

}

function showCatalog() {
    window.addEventListener('DOMContentLoaded', (event) => renderCatalog(generateCatalog()));
}

showCatalog()