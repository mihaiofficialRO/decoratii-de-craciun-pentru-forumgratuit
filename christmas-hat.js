$(function() {
        /*** zona editable ***/
            var last = true; // true ó false : para que aparezca o no en los avatares del apartado ULTIMOS MENSAJES
            var topic = true; // true ó false : para que aparezca o no en los avatares del perfil de los mensajes
            var conexion = true; // true ó false : para que aparezca en el widget CONEXIÓN
            var imageURL= "https://i.servimg.com/u/f68/09/00/22/90/santac10.png"; 
        /**** fin zona editable ***/
            if (topic == true) {
                var xmas = '<div class="xmas-hat-profile"><img src="'+imageURL+'"></div>';
                $('.postprofile').before(xmas);
            }
 
            if (last == true) {
                $('.lastpost-avatar').before('<div class="xmas-hat-lastTopics"><img src="'+imageURL+'"></div>');
            }
     
            if (conexion == true) {
              $('.mod-login-avatar').before('<div class="xmas-hat-Conexion"><img src="'+imageURL+'"></div>');
            }
       
        });
