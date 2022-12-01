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

// let nombre="";             
// let respuesta="";
// function saludo(){
//     nombre=localStorage.getItem("guardar",JSON.stringify(nombre))
//     respuesta=prompt("desea ingresar como: "+nombre+"SI O NO");
//     console.log(respuesta);
//     console.log(nombre)
//     if (respuesta=="NO"){
//         nombre=prompt("Ingrese nombre:");
//         document.getElementById("resultado").innerHTML="Bienvenida/o:  "+nombre;
//         localStorage.setItem("guardar",JSON.stringify(nombre))
//         nombre=localStorage.getItem("guardar")
//         }else
//      { 
//         document.getElementById("resultado").innerHTML="Bienvenida/o:  "+nombre;
//        }
//      }
    
 
 
//   saludo();

 function cambiar(){
     document.getElementById("direccion").innerHTML="Estamos en Chiclana 490, BHI";
 }
 cambiar();


 