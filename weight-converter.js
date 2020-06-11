//weight converter
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("weightform").addEventListener("input", convertWeight)

function convertWeight(){
    let pound = document.getElementById("pound").value;
    let Kilogram = document.getElementById("kg").value;
    let ounce = document.getElementById("ounce").value;
    let stone = document.getElementById("stones").value;
    let gramm = document.getElementById("gram").value;
    
    
    //compute 
    switch (pound){
        case pound:
            document.getElementById("kg").value = document.getElementById("pound").value/2.2046;
            ounce.value = pound.value*16;
            stone.value = pound.value/0.0022046;
            gramm.value = pound.value*0.071429;
            
    }
}})
