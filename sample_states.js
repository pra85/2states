var states = {
        "state1" : {
          'terminating': true,
          'start':true,
          'comingFrom': '^(state1|state2)$',
          'canGoTo': '^(state1|state2|state3)$',
          'label' : 'state1'
        },

        "state2" : {
          'terminating': true,
          'start':true,
          'comingFrom': '^(state1|state2)$',
          'canGoTo': '^(state1|state2)$',
          'label': 'state2'
        },

        "state3" : {
          'terminating': false,
          'start':false,
          'comingFrom': '^(state1)$',
          'canGoTo': '^(state3)$',
          'label': 'state3'
        }
  
      };

module.exports = states;