
var 
	FS = require('fs'),
	EJS = require('ejs');


/*State Machine constructor */ 
function StateMachine(stateMap) {
	var self = this;
	/*State Map initialized */

	self.stateMap = stateMap;
}

StateMachine.prototype.isTransitionPossible = function (inputState, outputState) {
		var
		 self  										= this,
		 possibleOutputStates  		= self.stateMap[inputState].canGoTo,
		 possibleOutputStatesRegEx = new RegExp(possibleOutputStates),
		 possible  								= possibleOutputStatesRegEx.test(outputState);
		 /* End of variable declaration */

		 
		 return possible;
};

StateMachine.prototype.visualize = function () {

		var self   = this,
		 		labels = [],
		 		data 	 = {},
		 		url 	 = null,
		 		html 	 = null;
		/* End of variable declaration */

		for(var key in self.stateMap) {
			if(self.stateMap.hasOwnProperty(key)) {
				labels.push(self.stateMap[key].label);	        
			}
		}
		
	 data = {
			states: Object.keys(self.stateMap).map(function (x){ return x.toString();}),
			labels: labels,
			stateMap: self.stateMap
		};	
	
		url = FS.readFileSync(__dirname + '/diagram.ejs', 'utf8');
		html = EJS.render(url, data);	
	  
	  return html;
		
				
};


module.exports = StateMachine;


