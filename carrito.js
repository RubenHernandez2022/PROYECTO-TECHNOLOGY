function selectAll(){
    var obj = document.getElementsByClassName("selectOne");
    var btSelectAll = document.getElementById("allCheck").checked;
    for(inputCheck of obj){
        inputCheck.checked = btSelectAll;
    }
}
// eliminación única
function deleteChild(obj){
    var nowtr = obj.parentElement.parentElement;
    var nowtable = nowtr.parentElement;
    nowtable.removeChild(nowtr);
    // Precio total
    allShopPriceTotal();
    
}
// eliminación por lotes
function selectDelete(){
    var obj = document.getElementsByClassName("selectOne");
    for (var i = obj.length - 1;i >= 0;i--){
        var nowCheck = obj[i];
        if (nowCheck.checked == true){
            deleteChild(nowCheck);
        }
    }
    // Precio total
    allShopPriceTotal();
    
}


// Inicializar todos los subtotales de productos
function singleAllSubTotal(){
    var obj = document.getElementsByClassName("shopCount");
    for(shopCount of obj){
        singleSubTotal(shopCount);
    }
}
// Calcula el subtotal de un solo producto
function singleSubTotal(obj){
    var price = obj.parentElement.children[3].innerHTML;
    var count = obj.parentElement.children[4].children[1].value;
    obj.innerHTML = eval(price + "*" + count);
}
// El precio total 
function allShopPriceTotal(){
    var obj = document.getElementById("resultTotalMoney");
    var allSingelSubElement = document.getElementsByClassName("shopCount");
    var sum = "0";
    for (singelSubElement of allSingelSubElement){
        if (sum != ""){
            sum += "+";
        }
        sum += singelSubElement.innerHTML;
    }
    obj.innerHTML = eval(sum);
}

    

// Compra ahora
function buyNow(){
    var result = confirm("¡FELICIDADES por comprar!");
    if (result == false){
        return
    }
    var obj = document.getElementById("mytable");
    obj.innerHTML = "";
    // Precio total
    allShopPriceTotal();
    alert("¡Compra exitosa!");
}

// Añadir al carrito
function addToCart(obj){
    var result = confirm('¿Añadir este producto al carrito de la compra? ');
    if (result == false){
        return;
    }
    // Formulario de carrito de compras
    var cartBox = document.getElementById("mytable");
    // Objeto de mercancía
    var shop = {
        shopImg:obj.children[0].src,
        shopIntegral:parseInt(eval(obj.children[2].innerHTML + "/20")),
        shopPrice:obj.children[2].innerHTML
    }
    // Determine si el producto existe
    var img = document.getElementsByClassName("imgbackground");
    var result = "-1";
    for (var i = 0;i < img.length;i++){
        if (shop.shopImg == img[i].children[0].src){
            result = i;
        }
    }
    if (result != "-1"){
        var count = img[result].parentElement.children[4].children[1];
        count.value = eval(count.value + "+1");
        // Recalcular el subtotal
        singleAllSubTotal();
    }else{
        // Crea un objeto de carrito de compras
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerHTML = '<input type="checkbox"  class="selectOne" />';
        var td2 = document.createElement("td");
        td2.className = "imgbackground";
        td2.innerHTML = '<img src="'+ shop.shopImg +'" height="100" width="100"/>';
        var td4 = document.createElement("td");
        td4.innerHTML = shop.shopPrice;
        var td5 = document.createElement("td");
         td5.innerHTML ='<input type="text" size="1" readonly="true" value="1"/>'
                      
        var td6 = document.createElement("td");
        td6.className = "shopCount";
        td6.innerHTML = parseInt(shop.shopPrice);
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        // Añadir al carrito
        cartBox.appendChild(tr);
    }
    
    // Precio total
    allShopPriceTotal();
   
}

// Inicializar el contenido de la interfaz
window.onload = function(){
    singleAllSubTotal();
    allShopPriceTotal();
}


function submenu() {
    var element = document.getElementById("lista");
    element.classList.toggle("sub");
  }


