var all=document.querySelectorAll("#add");
var box= document.getElementById("box");
var show= document.getElementById("show");
var price=document.getElementById("totalprice");
var order = document.getElementById("order");
var re= document.getElementById("reset");
var count=document.getElementById("counter");
var down=document.getElementById("down")
var total=0
var x=0;

all.forEach( function(item){
    item.onclick=function(){
        box.innerHTML += item.getAttribute("name") + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"
        show.style.display="block"
        order.style.display="block"
        re.style.display="block"
        total +=+(item.getAttribute("price"))
        price.style.display="none"
        count.style.visibility="visible"
        down.style.visibility="visible"
        x++
        count.innerHTML=x
    }
}
)

show.onclick=function(){
    price.style.display="block"
    price.innerHTML="total price is: " + total + " LE"
}

re.onclick= function(){
    total=0
    x=0
    box.innerHTML =""
    price.style.display="none"
    count.style.visibility="hidden"
    down.style.visibility="hidden"
}

order.onclick=function(){
    total=0
    x=0
    box.innerHTML =""
    price.style.display="none"
    count.style.visibility="hidden"
    down.style.visibility="hidden"
    alert("Done")
}


