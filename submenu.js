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

// function saludo(){
//     let nombre=prompt("Ingrese nombre:");
//     document.getElementById("resultado").innerHTML="Bienvenida/o:  "+nombre;
    
// }

//  saludo();

 function cambiar(){
     document.getElementById("direccion").innerHTML="Estamos en Chiclana 490, BHI";
 }
 cambiar();


 