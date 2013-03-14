var impose = function(object, func, args){
	return func.apply(object, args);
}

var LoopSomething = (function(){
			/**
			 * Define class 
			 * 
			 * @author      Steve Hoang <particles4dev>
			 * @version     
			 * @since       0.1
			 *
			 * @param d     delay time
			 * @param t     a function to execute 
			 * @param [o]   a object (has a function to execute)
			**/   
  			var f = function(d, t, o){
  				/** 
			     * Private property
			    **/
    			var self = this;
    			var delay = (d === null) ? 1000 : d;
    			var object = (o === null) ? null : o;   
    			var todo = t,
    			start = 0,end = 2*delay,
        		run = true;
        		/** 
			     * Public property
			    **/
        		this.timeoutID = null;
        		/** 
			     * Get current time
			     * 
			     * @return          Number
			     * @see             void
			    **/
    			var getTime = function(){      				
      				return new Date().getTime();
    			};   
    			/** 
			     * Set a timer to delay
			     * 
			     * @param value     
			     * @return          void
			     * @see             void
			    **/
    			this.setDelay = function(value){
      				delay = value;
      				start = 0;
      				end = 2*delay;
   				};
   				/** 
			     * Specify a function to execute when the delay time is done
			     * 
			     * @param func     
			     * @return          void
			     * @see             void
			    **/
			    this.setTodo = function(func){
			      	todo = func;
			    };
			    /** 
			     * 
			     * 
			     * @param f   		 
			     * @param args 		    
			     * @return          void
			     * @see             void
			    **/
			    var remind = function(func, args){
			    	if(run === true){
			    		console.log("Object Loop : ");
			    		console.log(this);
				      	start = getTime();
				      	if(object == null)
				      		func.apply(func, args);
				      	else
				      		func.apply(object, args);
                        var callback = args[args.length-1];
                        if(typeof callback == 'function')
                        callback();  
				      	end = getTime();
				      	self.setup.apply(self, args);
			      	}
			    };

			    /** 
			     * 
			     *
			     * @param callback   
			     * @return          void
			     * @see             void
			    **/
    			this.setup = function() {    				
    				if(run === true){
					    var args = [];
	        			for (var i = 0; i < arguments.length; i++) {
	          				args.push(arguments[i]);
	        			}
	        			var mt = delay - (end - start);        			
	        			if(mt > 0){	        				    
	          				this.timeoutID = window.setTimeout(impose, mt, this, remind,[todo, args]);          				
	          			} 
	        			else{
	          				impose(this, remind, [todo, args]);
	        			}
	      			}	      
    			};
    			/** 
			     * exits the loop
			     *
			     * @return          void
			     * @see             void
			    **/
    			this.cancel = function() {
      				if(typeof this.timeoutID == "number") {
        				window.clearTimeout(this.timeoutID);
        				delete this.timeoutID;        				
      				}
      				run = false;
        			console.log('stop loop');
      				return this;
    			};
    			/** 
			     * Get current state
			     *
			     * @return          void
			     * @see             void
			    **/
    			this.getState = function(){
    				console.log('Run is ' + run);	
    				return run;
    			}
  			};
  			return f;  
		})();