/*jshint multistr: true ,node: true*/
"use strict";

var
    assert = require('assert'),
    stateEngine = require('../'),
    sampleStates = require('../sample_states'),
    stateMachine = null;


describe('State machine test', function() {    
    
    before (function (done) {
        stateMachine = new stateEngine(sampleStates);
        done();
    });

    it('should give true for isTransitionPossible', function (done) {
        var testResult = stateMachine.isTransitionPossible('state1', 'state2'); 
        assert.equal(true, testResult);
        done();
    });

    it('should give false for isTransitionPossible', function (done) {
        
        stateMachine.visualize();
        var testResult = stateMachine.isTransitionPossible('state1', 'state10'); 
        assert.equal(false, testResult);
        done();
    });
   
});
