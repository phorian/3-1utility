//Currency-converter using specific values

//readily listens to the html as soon as it loads
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("c-amount").addEventListener("input", calculator);
    document.getElementById("c-rate").addEventListener("change", changeCurrency);

function calculator(){
    let amount = document.getElementById("c-amount").value;
    let rate = document.getElementById("c-rate").value;
    
    //check for empty input
    if(rate === "select") {
        document.getElementById("currency-converted").setAttribute("placeholder", "Please select a currency");
        } else {
            let compute = amount * rate;
            document.getElementById("currency-converted").value = compute.toFixed(2);
        }
    
}
    function changeCurrency (){
        let rate = document.getElementById("c-rate").value;
        let amount = document.getElementById("c-amount").value;
        
        //compute
        let compute = rate * amount;
         document.getElementById("currency-converted").value = compute.toFixed(2);
        
    }
    let menu = document.querySelectorAll('select');
    M.FormSelect.init(menu,{});
    });