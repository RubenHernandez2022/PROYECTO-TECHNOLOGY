 jQuery("document") .ready(function($){
    let menubtn=$(".iconito") , menu=$(".navigation ul");

        menubtn.click(function(){
        if (menu.hasClass("x") ){
            menu.removeClass("x");
             menu.addClass("show");
            }
        else{
            menu.addClass("x");
            menu.removeClass("show");
            }
                                });
                                      });

// pag2    

// const celulares=[{nombre:("iphone 11"),
//                   descripcion:("tactil")},
//                   {nombre:("iphone 13"),
//                   descripcion:("toner")}

// ];
// let iphone11=document.querySelector("#iphone11");
// if (iphone11=)


// function comprar() {document.getElementById("iphone11").
    
//     <a  class="boton-tarjeta" href="./compra.html">IPHONE 11 $184999</a>
// }

const darleclik=document.querySelector("#master");
darleclick.addEventListener("click",(event)=>{alert("se clickeo");
                                            console.log(event)});
// document.getElementById("click").onclick=function(hola){<img class="imagenes" src="./IMAGENES/iphone 11.jpg" alt="celular"></img>}
// hola(); 