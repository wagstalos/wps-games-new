$(document).ready(function(){
     
     $( "#btn-sites" ).click(function() {
        $( "#portfolio-jogos" ).fadeOut( "fast", function() {
            // Animation complete
            $( "#portfolio-sites" ).addClass( "bounceInLeft" );
            $( "#portfolio-jogos" ).removeClass( "bounceInLeft" );
        }); 
         $( "#texto-jogos" ).fadeOut( "fast", function() {
            // Animation complete
            $( "#texto-sites" ).addClass( "slideInUp" );
        });  
        $( "#portfolio-sites" ).fadeIn( "fast", function() {
            // Animation complete
        }); 
         $( "#texto-sites" ).fadeIn( "fast", function() {
            // Animation complete
        });  
    });

     $( "#btn-jogos" ).click(function() {
        $( "#portfolio-sites").fadeOut( "fast", function() {
            // Animation complete
            $( "#portfolio-jogos").addClass( "bounceInLeft" );
            $( "#portfolio-sites" ).removeClass( "bounceInLeft" );
        }); 
          $( "#texto-sites").fadeOut( "fast", function() {
            // Animation complete
            $( "#texto-jogos" ).addClass( "slideInUp" );
        }); 

        $( "#portfolio-jogos" ).fadeIn( "fast", function() {
          // Animation complete
        });
          $("#texto-jogos" ).fadeIn( "fast", function() {
          // Animation complete
        });  
    });

		 // //niceScroll
   //    var nice = $("html").niceScroll({
   //    	cursorcolor: "#00ff8c",
   //    	cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
   //  	  cursoropacitymax: 1,
   //    	//cursorborder: "0px solid #00ff8c",
   //    	cursorwidth: "11px",
   //    	zindex: "auto" | [1000],
   //    	emulatetouch: false,
   //    	//hwacceleration: true,
   //    	cursorborderradius: "15px",
   //    	// cursordragontouch: true,
   //    }); // The document page (body)


    // sticky plugin
    $(".sticky-header").sticky({ topSpacing: 0});

    //para linkar com efeito de animação
	 var $doc =$('html,body');
		$('.scroll-page').click(function(){
			$doc.animate({
				scrollTop: $($.attr(this,'href')).offset().top
			},500);	
			return false;
		});

    //menu
    $(window).scroll(function() {
    if ($(document).scrollTop() >50) {
      $('.default-header').addClass('bg-topo');
      $(".logo").css("height", "40");
      $('a[href="#topo"]').fadeIn();
    } else {
      $('.default-header').removeClass('bg-topo');
      $(".logo").css("height", "70");
       $('a[href="#topo"]').fadeOut();
    }
  });
    // btn Subit topo
    $('a[href="#topo"]').click(function(){
            $('html, body').animate({scrollTop : 0},900);
            return false;
        });
    //tilt plugin
     $('.js-tilt').tilt({
        maxTilt:        5,
        perspective:    2000,   // Transform perspective, the lower the more extreme the tilt gets.
       	easing:         "cubic-bezier(.03,.77,.52,.99)",    // Easing on enter/exit.
        scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
        speed:          100,    // Speed of the enter/exit transition.
        transition:     true,   // Set a transition on enter/exit.
        disableAxis:    null,   // What axis should be disabled. Can be X or Y.
        reset:          true,   // If the tilt effect has to be reset on exit.
        glare:          false,  // Enables glare effect
        maxGlare:       1       // From 0 - 1.

        })
     // owl-carousel plugin
  		$('.owl-carousel').owlCarousel({
    		loop:true,
   			margin:10,
    		responsiveClass:true,
    		responsive:{
        	0:{
            	items:1,
            	nav:true,
            	loop:false
        	   },
        	768:{
            	items:3,
            	nav:true,
            	loop:false
               },
        	1200:{
            	items:4,
            	nav:true,
            	loop:false
        		}
    		}		
		})
});

//escrever texto
consoleText(['Venha para WPS Games','Criação de jogos','Animações','e Sites!'], 'text', ['#fff']);
			  function consoleText(words, id, colors) {
			    if (colors === undefined) colors = ['#fff'];
			    var visible = true;
			    var con = document.getElementById('console');
			    var letterCount = 1;
			    var x = 1;
			    var waiting = false;
			    var target = document.getElementById(id)
			    target.setAttribute('style', 'color:' + colors[0])
			    window.setInterval(function() {

			      if (letterCount === 0 && waiting === false) {
			        waiting = true;
			        target.innerHTML = words[0].substring(0, letterCount)
			        window.setTimeout(function() {
			          var usedColor = colors.shift();
			          colors.push(usedColor);
			          var usedWord = words.shift();
			          words.push(usedWord);
			          x = 1;
			          target.setAttribute('style', 'color:' + colors[0])
			          letterCount += x;
			          waiting = false;
			        }, 1000)
			      } else if (letterCount === words[0].length + 1 && waiting === false) {
			        waiting = true;
			        window.setTimeout(function() {
			          x = -1;
			          letterCount += x;
			          waiting = false;
			        }, 1000)
			      } else if (waiting === false) {
			        target.innerHTML = words[0].substring(0, letterCount)
			        letterCount += x;
			      }
			    }, 120)
			    window.setInterval(function() {
			      if (visible === true) {
			        con.className = 'console-underscore hidden'
			        visible = false;

			      } else {
			        con.className = 'console-underscore'

			        visible = true;
			      }
			    }, 400)
}


if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').then(function(registration) {
    // Registro realizado com sucesso (NOTA: Observe que declaro um arquivo chamado sw.js, ele é onde colocaremos as notações do nosso Service Workers)
      console.log('O ServiceWorker foi registrado com escopo: ',    registration.scope);
      }).catch(function(err) {
    // O registro falhou :(
      console.log('O registro do ServiceWorker falhou com o erro: ', err);
      });
    }

     if(window.Notification && Notification.permission !== "denied") {
  Notification.requestPermission(function(status) {  // status is "granted", if accepted by user
    var n = new Notification('WPS Games', { 
      body: 'Bem-vindo à WPS Games',
      icon: 'img/wpsgamesicon.png' // optional
    }); 
  });
}