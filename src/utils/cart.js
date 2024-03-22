
export function Addtocart(cartArg, product) {
    console.log(cartArg);
    let cart = { ...cartArg }
    let price = product.price;
    if (product.discount) price -= product.discount;
    if (cart.products.length) {
        const productIndex = cart.products.findIndex(e => e.id == product.id);
        if (productIndex == -1) {
            cart.products.push({
                ...product,
                productQty: 1
            });
            cart.totalPrice += product.price
        }
        else {
            cart.products[productIndex] = {
                ...cart.products[productIndex],
                productQty: cart.products[productIndex].productQty + 1
            }
            cart.totalPrice += product.price
        }
    }
    else {
        cart.products.push({
            ...product,
            productQty: 1
        });
        cart.totalPrice += product.price
    };

    return cart;
}
export function deletecart() {
    return {
        products: [],
        totalPrice: 0
    }
}
export function deleteproduct(cartArg, product) {
    let cart = { ...cartArg }
    let price = product.price;
    if (product.discount) price -= product.discount;
    cart.products = cart.products.filter(e => e.id !== product.id);
    cart.totalPrice -= price * product.productQty;
    return cart;
}
export function removefromcart(cartArg, product) {
    let cart = { ...cartArg }
    let price = product.price;

    if (product.discount) price -= product.discount;
    if (price == 0) {
        return deletecart();
    };
    if (cart?.products?.length) {
        const productIndex = cart.products.findIndex(e => e.id == product.id);
        if (productIndex !== -1) {
            if (cart.products[productIndex].productQty == 1) {
                return deleteproduct(cart, product)
            } else {
                cart.products[productIndex].productQty -= 1;
                cart.price -= product.price

            }
        }
    }
    return cart;
}


