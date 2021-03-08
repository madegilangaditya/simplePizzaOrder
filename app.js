// initiate variable
let price = 0;
let toppings = 0;
let pizza = 0;
let size = 0;

document.querySelector('#getPizza').addEventListener('click', getPizza);
document.querySelector('#getPizzaSize').addEventListener('click', getPizzaSize);

const pizzaTopping = document.querySelectorAll('.pz-topping');
for(let i = 0 ; i < pizzaTopping.length; i++){
    pizzaTopping[i].addEventListener('click', getPizzaToppings);
}

// Get Pizza when clicked the pizza
function getPizza(e){
    if(e.target.classList.contains('pz-radio')){      
        pizza = parseInt(e.target.value);
        disableToppings(e.target.id, toppings);
        console.log(toppings);
        sumPrice(pizza, size, toppings);
    }
}

// Get pizza size price
function getPizzaSize(e){
    if(e.target.classList.contains('size')){
        size = 0;
         if(e.target.value === 'sm'){
            size = -1
         } else if(e.target.value === 'lg'){
            size =  2;
         }
    }
    sumPrice(pizza, size, toppings);
}

// Disable some toppings regardless from pizza type
function disableToppings(id, toppings) {
    let topping = 0;
    for(let i = 0 ; i < pizzaTopping.length; i++){
        if(id === 'pizza1'){
            if(pizzaTopping[i].id === 'lobster' || pizzaTopping[i].id === 'oyster' || pizzaTopping[i].id === 'salmon' || pizzaTopping[i].id === 'bacon' || pizzaTopping[i].id === 'duck' || pizzaTopping[i].id === 'sausage'){
                
                if(pizzaTopping[i].checked === true){
                    console.log(`toppings= ${toppings}`);
                    pizzaTopping[i].checked = false;
                    toppingsDec(pizzaTopping[i], topping);
                }
                
                pizzaTopping[i].disabled = true;
            }else{
                pizzaTopping[i].disabled = false;
            }
        }else if(id === 'pizza2'){
            if(pizzaTopping[i].id === 'avocado' || pizzaTopping[i].id === 'tuna' || pizzaTopping[i].id === 'duck' || pizzaTopping[i].id === 'sausage'){
                
                if(pizzaTopping[i].checked === true){
                    console.log(`toppings= ${toppings}`);
                    pizzaTopping[i].checked = false;
                    toppingsDec(pizzaTopping[i], topping);
                }
                
                pizzaTopping[i].disabled = true;
            }else{
                pizzaTopping[i].disabled = false;
            }
        }else if(id === 'pizza3'){
            if(pizzaTopping[i].id === 'avocado' || pizzaTopping[i].id === 'lobster' || pizzaTopping[i].id === 'oyster' || pizzaTopping[i].id === 'salmon'){
                
                if(pizzaTopping[i].checked === true){
                    console.log(`toppings= ${toppings}`);
                    pizzaTopping[i].checked = false;
                    toppingsDec(pizzaTopping[i], topping);
                }
                pizzaTopping[i].disabled = true;
            }else{
                pizzaTopping[i].disabled = false;
            }
        }
    }
}

// Get pizza toppings price
function getPizzaToppings(e){
    if(this.checked){
        if(this.parentElement.parentElement.classList.contains('val1')){
            toppings += 1;
        } else if(this.parentElement.parentElement.classList.contains('val2')){
            toppings += 2;
        } else if(this.parentElement.parentElement.classList.contains('val3')){
            toppings += 3;
        }
        console.log(e);
    }else{
        if(this.parentElement.parentElement.classList.contains('val1')){
            toppings -= 1;
        } else if(this.parentElement.parentElement.classList.contains('val2')){
            toppings -= 2;
        } else if(this.parentElement.parentElement.classList.contains('val3')){
            toppings -= 3;
        }
    }
    console.log(toppings);
    sumPrice(pizza, size, toppings);
}

// Reduce total price when pizza type disable topping allready checked
function toppingsDec(pizzaTopping, topping){
        if(pizzaTopping.parentElement.parentElement.classList.contains('val1') ){
            topping += 1;
        } else if(pizzaTopping.parentElement.parentElement.classList.contains('val2') ){
            topping += 2;
        } else if(pizzaTopping.parentElement.parentElement.classList.contains('val3') ){
            topping += 3;
        }
    
    // let result;
    toppings = toppings - topping;
}

// Sum total price
function sumPrice(pizza, size, toppings){
    price = pizza + size + toppings;
    document.querySelector('#price').textContent = `$${price}`; 
}