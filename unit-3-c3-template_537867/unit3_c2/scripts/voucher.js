async function obtainData() { 

    let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers" 

    try { 
        const res = await fetch(url); 

        const data = await res.json(); 

        console.log(data[0].vouchers) 
        appendData(data[0].vouchers) 
    } 
    catch(error) { 
        console.log(error); 
    }
} 

obtainData() 

let buy = []; 

const appendData = (data) => { 
    document.getElementById("voucher_list").innerText = null; 

    data.forEach(function(el) { 
        let box = document.createElement("div") 

        let heading = document.getElementById("p");  
        heading.innerText = el.name; 

        let img1 = document.createElement("img"); 
        img1.src = el.image; 

        let amount = document.createElement("p"); 
        amount.innerText = el.amount; 

        let button1 = document.createElement("button"); 
        button1.innerText = "buy now"; 

        button1.setAttribute ("class", "buy_voucher"); 
        button1.addEventListener("click", function() { 
            buy.push(el); 
            localStorage.setItem("purchase", JSON.stringify(buy))
        }); 


        box.append(img1, heading, amount, button1) 


        document.getElementById("voucher_list").append(box) 
    }); 
}

