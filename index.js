//creating XMLHttpRequest
var xhttp = new XMLHttpRequest();

//request with the open() method
xhttp.open('get', 'products.json', true);
xhttp.send();
xhttp.onload =function(){
    if(this.readyState ==4 && this.status == 200){
        let products = JSON.parse(this.responseText); //responsetext data from server
        //empty variable so i can add the incoming data.
        let output = " ";
        for(let item of products){
            output += `
            <div class="product">
            <img src="${item.image}">
            <p class="title">${item.title}</p>
               <p class="description">${item.description}</p>
               <p class="price">
                  <span>${item.price}</span>
                  <span>rs</span>
               </p>
               <p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
            </div>`;
        }
        document.querySelector(".products").innerHTML = output;

    }
}