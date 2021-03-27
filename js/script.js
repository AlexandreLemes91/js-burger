/* var di richiamo */
var btn = document.getElementById("button");
var burgerName = document.getElementById("name");
var ingredients = document.getElementsByClassName("ingredient-checkbox");
var price = document.getElementById("price");
var coupon0 = document.getElementById("coupon");
var coupons = ["123", "456", "789", "101"];
var addCheck = document.getElementsByClassName("ingredient-add");

/* cliccabile gli span */
for(i=0; i < addCheck.length; i++){
    var add = addCheck[i];

    add.addEventListener("click", function(){
        var checkbox = this.previousElementSibling;
        console.log(checkbox);
        checkbox.checked = !checkbox.checked;
    });
}

/* btn onclick */
btn.addEventListener("click", function(){
    var name = burgerName.value.trim();
    
    if( name.length === 0 ){
        alert("Inserisci un nome per il tuo Burger!");
    }else{
        var burgerPrice = 50;
        for(i=0; i < ingredients.length; i++){
            var ingredientCheck = ingredients[i];
            console.log(ingredientCheck); 
            
            if(ingredientCheck.checked){
                burgerPrice += parseInt(ingredientCheck.value);
            }
        }

        var coupon1 = coupon0.value;
        if(coupons.includes(coupon1)){
            console.log("ok codice");
            burgerPrice -= burgerPrice * 0.2;
            alert("HAI DIRITO AL 20% DI SCONTO");
        }else{
            alert("Non hai inserito alcun coupon o codice non riconosciuto");
        }
        price.innerHTML = burgerPrice.toFixed(2);
    }

});