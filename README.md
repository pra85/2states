# 2states
State machine, state transition and management 

This module can be used to verify state movements.

Invoke it like this.

var StateMachine = require('2states');

/* Sample stateMap  
	var stateMap = {
	        "state1" : {
	          'terminating': true,
	          'start':true,
	          'comingFrom': '^(state1|state2)$',
	          'canGoTo': '^(state1|state2|state3)$',
	          'label' : 'state1'
	        },

	  
	      };

*/

var stateMachine = new StateMachine(stateMap);


Currently it has two functions.

1. isTransitionPossible(inputState, outputState)

This function expects the input state and the output state and will verify if the input state can transition to output state or not based on the state map provided to the constructor function

2.visualize()

This function is used to visualize state map which was given to the constructor.
This function returns a html which can be used to view the state map on browser.