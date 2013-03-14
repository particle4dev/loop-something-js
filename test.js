        /** 
         *  ##### Examples [http://jsbin.com/oseqaw/1/edit]
   		 **/	
   		 		var a = new LoopSomething(2000, function(m, f){ 
		 			console.log( m + " " + f );
		 		});
		 		a.setup("hello", "world", function(){
                   console.log( 'do callback' );
                });
		 		var id = setTimeout(function(){
		  			a.cancel();                   
		 		},9000);
   		 
  		
