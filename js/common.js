function quantityTotalByInput(id, plus, quantityTotal){
    const value = document.getElementById(id);
    if(plus){
        value.value = parseInt(value.value) + 1;
    }else{
        value.value = parseInt(value.value) - 1;
    }
    if(quantityTotal == "without-case-quantity"){
        const withoutCaseQuantity = document.getElementById(quantityTotal);
        withoutCaseQuantity.innerText = 1219 * value.value;
    }
    else{
        const withCaseQuantity = document.getElementById(quantityTotal);
        withCaseQuantity.innerText = 59 * value.value;
    }
}

function getBothQuantityTextl(id){
    const quantityTotal = document.getElementById(id);
    return quantityTotal.innerText = parseInt(quantityTotal.innerText);
}

function getTotal(){
    const withoutCaseQuantity = getBothQuantityTextl("without-case-quantity");
    const withCaseQuantity = getBothQuantityTextl("with-case-quantity");
    const subTotal = withoutCaseQuantity + withCaseQuantity;
    document.getElementById("subtotal").innerText = subTotal;
    let tax = document.getElementById("tax").innerText = (subTotal * 0.1).toFixed(2);  //! এই line এ parsefloat একসাথে করলে toFixed(2) থাকা সত্ত্বেও দশমিকের পর ১টা value দেখায় তাই নিছে আলাদাভাবে parsefloat করা হয়ছে যা ঠিকভাবে output দেয়।
    tax = parseFloat(tax);
    const total = document.getElementById("total");
    total.innerText = subTotal + tax;
}