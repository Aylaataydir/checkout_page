
const tax = 0.18;
const shipping = 20;


const products = document.querySelector(".products");


products.onclick = (e) => {

    const product = e.target.closest(".product");
    const piece = product.querySelector(".piece-number");

    if (!product) return

    if (e.target.classList.contains("fa-plus")) {
        piece.textContent++


    } else if (e.target.classList.contains("fa-minus")) {

        if (piece.textContent > 1)
            piece.textContent--

        else {
            confirm("Product will be remove?") && e.target.closest(".product").remove() 
        }

    } else if (e.target.classList.contains("remove")) {
        confirm("Product will be remove?") && e.target.closest(".product").remove()
    }


    calculatePrice(e.target)
    calculateCard()

}


const calculatePrice = (btn) => {

    const product = btn.closest(".product")
    const productPriceEl = product.querySelector(".product-price")
    const productPrice = productPriceEl.getAttribute("data-price");
    let productPiece = product.querySelector(".piece-number").textContent;

    const newProductPrice = productPiece * productPrice;
    productPriceEl.textContent = newProductPrice.toFixed(2)

}



const calculateCard = () => {

    const subPriceEl = document.querySelector("#subtotal-price");
    const taxEl = document.querySelector("#tax-price");
    const shippingEl = document.querySelector("#shipping-price");
    const totalPriceEl = document.querySelector(".total-price");
    const productPrices = document.querySelectorAll(".product-price");

    let sum = 0

    productPrices.forEach((e) => {
        sum += Number(e.textContent)
    })

    subPriceEl.textContent = sum.toFixed(2)
    taxEl.textContent = (subPriceEl.textContent * tax).toFixed(2)

    totalPriceEl.textContent = (Number(subPriceEl.textContent) + Number(taxEl.textContent) + Number(shippingEl.textContent)).toFixed(2)

    totalPriceEl.textContent > 250 ? shippingEl.textContent = 0 : shippingEl.textContent = shipping

}

calculateCard()



