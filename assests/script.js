let cart = [];
var printcart = document.getElementById("pmodel");
var cartdetail = document.getElementById("addmore");
var totalElement = document.getElementById('cartspan2');
let count = 1 ;
function place_order(productName,price)
{

    console.log(productName,price);
}

function cartlist(productName, price)
{
    
    alert( "Your " + productName + " has added to the cart \n Check out The cart " ) ;
    cart.push({  productName, price });
    updateCart();

}
    function updateCart() 
    {
         printcart.innerHTML = '';
         cartdetail.innerHTML = '';
        let totalPrice = 0; 

        cart.forEach(detail => 
        {
            var objectElement = document.createElement('p');
            objectElement.textContent =  detail.productName + ' : ' + detail.price;
            printcart.appendChild(objectElement);
            totalPrice +=  detail.price;
            
        });
        totalElement.textContent = totalPrice;
    
    }
