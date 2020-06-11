//calculate function
function calculateTip(){
    let billPrice = document.getElementById("billprice").value;
    let sQ = document.getElementById("servicequality").value;
    let numPeople = document.getElementById("ppleshr").value;
    
    //check for zero input
    if (billPrice === "" || sQ === 0) {
        alert("please input values");
    return;
}
    //validate number of people to be 1 or more than 1 but not less or empty
    if( numPeople == "" || numPeople <= 1){
        numPeople = 1; 
        document.getElementById("each").style.display = "none";
       } else{
           document.getElementById("each").style.display = "block";
       }
    //compute all values and calculate
    let total = (billPrice * sQ) / numPeople;
    total = Math.round(total * 100)/ 100;
    //this allows us to always have to digit after decimal point
    total = total.toFixed(2);
    //display tip result
    document.getElementById("result").style.display = "block"
    document.getElementById("tip").innerHTML = total; 
    }

//hide the result on load
document.getElementById("result").style.display = "none"
document.getElementById("each").style.display = "none"

//using Dom to call function
document.getElementById("calculate").addEventListener("click" calculateTip);
























