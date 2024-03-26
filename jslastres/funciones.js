/* $(document)*/ jQuery(document).ready(listo);
                                                 /*cuando toda la web este listo ... se llama a funcion listo  */

                                                /* crear una funcion listo -- igual que clase */
function listo(){/*mensaje */
/* alert("hola mundo") */    

/*AHORA PARA SELECIONAR UN ELEMENTO DEL HTML */
jQuery(".hamb").click(function(e){                     /*e === variable */
    e.preventDefault();         /*para que deje de funcionar su accion por defecto */
    jQuery("header .container nav").toggleClass("open");      /*agrega y quita clase */                                               /*al hacer clic hacer evento */
        jQuery(".hamb i").toggleClass("fa-x");      /*ni idea que iso pero weno xD */   
    })  ;



/* trabajart con elos elementos a del nav  */
jquery("header .container nav a").click(function(){     /*al hacer click */

    jQuery("header .container nav").removeClass("open"); 
    jQuery(".hamb i").removeClass("fa-x"); 

    var dev = jQuery(this).attr("href"); /* obtener el valor de los href   attr atributos */

    jQuery("html,body").animate({
    "scrollTop": jQuery(dev).offset().top
     });
 
    });


}

