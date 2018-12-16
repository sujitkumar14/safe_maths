const BigNumber = require('bignumber.js');
let self;

function SafeMaths(){

	self = this;

	function perform(first, operation, sec) {

    	try{
		    let a = new BigNumber(first);
		    let b = new BigNumber(sec);

		    // Figure out which operation to perform.
		    let operator;
		    switch(operation.toLowerCase()) {
		        case '-':
		            operator = function(a,b) { return a.minus(b); };
		            break;
		        case '+':
		            operator = function(a,b) { return a.plus(b); };
		            break;
		        case '*':
		        case 'x':

		            operator = function(a,b) { return a.times(b); };
		            break;
		        case '÷':
		        case '/':

		            operator = function(a,b) { return a.div(b); };
		            break;
		        case '^':
		            operator  = function(a,b){ return a.pow(b);};
		            break;

		        // Let us pass in a function to perform other operations.
		        default:
		            operator = operation;
		    }

		    let result = operator(a,b);
		    return result.toString(10);
		}
		catch(err){
			throw new Error(err.message);
		}
	};
}

/**
* Function to add two number
*/
SafeMaths.prototype.add = function(a,b){

	try{
		
		return self.perform(a,'+',b);

	}
	catch(err){
		throw new Error(err.message);
	}
};

/**
* function to subtract 
*/
SafeMaths.prototype.sub = function(a,b){

	try{

		return self.perform(a,'-',b);
	}
	catch(err){
		throw new Error(err.message);
	}
}

/**
* function to multiply 
*/
SafeMaths.prototype.mul = function(a,b){
	try{

		return self.perform(a,'*',b);
	}
	catch(err){
		throw new Error(err.message);
	}
}

/**
* function to divide 
*/
SafeMaths.prototype.div = function(a,b){
	try{

		return self.perform(a,'/',b);
	}
	catch(err){
		throw new Error(err.message);
	}
}

/**
* function to power 
*/
SafeMaths.prototype.pow = function(a,b){
	try{

		return self.perform(a,'^',b);
	}
	catch(err){
		throw new Error(err.message);
	}
}


module.exports = new SafeMaths();
