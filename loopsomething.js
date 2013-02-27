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
			 *
			**/   
  			var f = function(d, t){
  				/** 
			     * Private property
			    **/
    			var self = this;
    			var delay = (d === null) ? 1000 : d;    
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
				      	start = getTime();
				      	func.apply(func, args);
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
    			this.setup = function(callback) {    				
    				if(run === true){
					    var args = [];
	        			for (var i = 0; i < arguments.length; i++) {
	          				args.push(arguments[i]);
	        			}
	        			var mt = delay - (end - start);        			
	        			if(mt > 0){
	        				callback();    
	          				this.timeoutID = window.setTimeout(remind, mt, todo, args);          				
	          			} 
	        			else{
	          				remind(todo, args);
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