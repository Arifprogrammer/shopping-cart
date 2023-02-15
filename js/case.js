document.getElementById("with-case-plus-btn").addEventListener("click", function(){
    quantityTotalByInput("with-case-input", true, "with-case-quantity");
    getTotal();
})
document.getElementById("with-case-minus-btn").addEventListener("click", function(){
    quantityTotalByInput("with-case-input", false, "with-case-quantity");
    getTotal();
})