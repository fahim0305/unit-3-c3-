let storage = JSON.parse(localStorage.getItem("user"))  || [];  

let user_details = document.querySelector("form"); 
user_details.addEventListener("submit", userFunction); 

function userFunction() { 
    event.preventDefault(); 

    let user_name = user_details.name.valueOf; 

    let user_email = user_details.email.value; 

    let user_address = user_details.address.value; 

    let amount_paid = user_details.amount.value; 

    let object = { 
        name: user_name, 
        email: user_email, 
        address: user_address, 
        amount: amount_paid, 
    } 

    storage.push(object) 

    localStorage.setItem("user", JSON.stringify(storage)) 
}