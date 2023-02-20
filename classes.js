class Good {
    constructor(id, name, description, sizes, price, avaible) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.avaible = avaible;
    }
    setAvailable(bool) {
        this.avaible = bool
    }
};

class GoodList {
    constructor(goods, filter, sortPrice, sortDir) {
        this.#goods = goods;
        this.filter = filter;
        this.sortPrice = sortPrice;
        this.sortDir = sortDir;
    }

    get list() {
        return this.goods.filter.sortPrice
    }

    add(good) {
        this.goods.add(good)
    }

    remove(id) {
        this.goods.splice(array.map(x => goods.id))
    }
}

class BasketGood {
    constructor(amount) {
        this.amount = amount
    }
}

class Basket {
    constructor(goods) {
        this.goods = goods
    }
}