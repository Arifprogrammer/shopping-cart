document.getElementById("without-case-plus-btn").addEventListener("click", function(){
    quantityTotalByInput("without-case-input", true, "without-case-quantity");
    getTotal();
})
document.getElementById("without-case-minus-btn").addEventListener("click", function(){
    quantityTotalByInput("without-case-input", false, "without-case-quantity");
    getTotal();
})