$(document).ready(function(){
    if(window.innerWidth < 1000){
    $(".mobile").hide();
    $("#nav-btn").click(function(){
    $(".mobile").toggle()
    console.log("hello")
 })
}
var i = 0;
setInterval(function(){
    var slider = document.getElementById("slider"); 
    slider.scrollLeft += 600;
    var length = slider.children.length;
    if(i<length){
        i++
    }else{
        slider.classList.remove("slider1");
        slider.scrollLeft = 0;
        console.log("hello");
        i=0;
        slider.classList.add("slider1");
    }
},5000);
////////////////FUNCTION FOR TIMER/////////////////////////////////////////
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
setInterval(function(){
    seconds.innerHTML= seconds.innerHTML-1;
    if(seconds.innerHTML<=0){
        seconds.innerHTML = 60;
        minutes.innerHTML = minutes.innerHTML-1;
    }
    if(minutes.innerHTML<=0){
        minutes.innerHTML = 60;
        hours.innerHTML = minutes.innerHTML-1;
    }
    if(hours.innerHTML<=0){
        minutes.innerHTML = "";
        hours.innerHTML = "THE OFFER IS CLOSED";
        seconds.innerHTML = "";
    }
},1000);
///////////////////////////function for email verification/////////////////////////////
var input = document.getElementById("inpt");
input.addEventListener("keyup",function(){
    var re = /\S+@\S+\.\S+/;
   var check = re.test(input.value);
    if(!check){
        document.getElementById("email").style.display="block"
    }else{
        document.getElementById("email").style.display="none"
    }
})


window.addEventListener("scroll",function(){
 var totalhieght = window.innerHeight-document.body.offsetHeight;
 var hieght = window.pageYOffset;
 var hieght1 = hieght*100/totalhieght;
 document.getElementById("scroll1").style.width = hieght1+"%";

})

   
})
function cetogary(ele){
    $(".catogories").css({"border": "none"})
    ele.style.borderBottom = "2px solid grey";
   
}
function banner(){
    if(window.innerWidth < 500){
    var i = 5;
    var z = setInterval(function(){
        document.getElementById("skip").innerHTML = i;
        i--
        if(i==0){
            clearInterval(z);
           mobile1();
        }
        
},1000)
}
}
banner();
function mobile1(){
$(".mobile1").hide();
}
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data) => {
    var productdiv = document.getElementById("productdiv");
var length = data.products.length;
for(i=0;i<length;i++){
    var div = document.createElement("div");
    div.className = "product-div";
    var image = document.createElement("div");
    var image1 = document.createElement("img");
    image.appendChild(image1);
    image1.className = "product-image"
    image1.src = data.products[i].images[0];
    image.className = "product-image1";
    var discription = document.createElement("h2");
    discription.innerHTML = data.products[i].description;
    discription.className = "discription";
    var price = document.createElement("p");
    price.innerHTML = "Rs. "+" " + data.products[i].price;
    price.className = "price";
    div.appendChild(image);
    div.appendChild(discription);
    div.appendChild(price)
    productdiv.appendChild(div);
    div.id = data.products[i].id;
    div.addEventListener("click",function(){
        var id = this.id;
        var divdata = data.products[id-1];
        var dataJSON = JSON.stringify(divdata);
        console.log(dataJSON);

        // create the form
        var form = document.createElement('form');
        form.setAttribute('method', 'get');
        form.setAttribute('action', 'product.html');
    
        // create hidden input containing JSON and add to form
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", 'data');
        hiddenField.setAttribute("value", dataJSON);
        
        form.appendChild(hiddenField);
    
        // add form to body and submit
        document.body.appendChild(form);
        form.submit();
    })
}
}

);