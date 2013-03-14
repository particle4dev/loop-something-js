        /** 
         *  ##### Examples [http://jsbin.com/oseqaw/1/edit]
   		 
        console.log( "Loop Function" );
   		var a = new LoopSomething(2000, function(m, f){
            console.log( m + " " + f );
        });
        a.setup("hello", "world", function(){
            console.log( 'do callback' );
        });
        var id = setTimeout(function(){
            a.cancel();
        },9000);
         **/
        console.log( "Loop Object" );
        var obj = {
            firstName:'Steve',
            lastName :'Hoang',
            information: function(){
                console.log("My name is " + this.firstName + " " + this.lastName);
            }
        };
   		var a = new LoopSomething(2000, obj.information, obj);
        a.setup(function(){
            console.log( 'do callback' );
        });
        var id = setTimeout(function(){
            a.cancel();
        },9000);
  		
