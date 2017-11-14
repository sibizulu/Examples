const tableData = {
	"allocation_points": "1600",
	"customer": "Wallmart",
	"route": "china-us",
	"period": "2017-Q1",
	"route_coverage_factor": "5",
	"seasonal_factor": "3",
	"forward_leg": "3",
	"reverse_leg": "3",
	"liner_owned_port_usage_factor": "3",
	"intermodal_factor": {
		"rail": "9",
		"road": "4",
		"sea": "4"
	},
	"nodes": [
  {
    from: 'Anichang',
    to: 'Wuhan',
    node_coverage_factor: '5',
    seasonal_factor: '5',
    forward_leg: '5',
    reverse_leg: '',
    liner_owned_port_usage_factor: '',
    intermodal_factor: {
      road: '4',
      rail: '5',
      sea: '5'
    },
    fws: [
      {
        name: 'FW1M',
        in_network: 'true',
        modes: [

        ]
      },
      {
        name: 'FW2M',
        in_network: 'true',
        modes: [
          'Rail',
          'Road'
        ]
      },
      {
        name: 'FW3M',
        in_network: 'true',
        modes: [

        ]
      }
    ]
  },
  {
    from: 'Wuhan',
    to: 'Shangqu',
    node_coverage_factor: '5',
    seasonal_factor: '7',
    forward_leg: '7',
    reverse_leg: '',
    liner_owned_port_usage_factor: '',
    intermodal_factor: {
      road: '4',
      rail: '7',
      sea: '10'
    },
    fws: [
      {
        name: 'FW1M',
        in_network: 'true',
        modes: [

        ]
      },
      {
        name: 'FW2M',
        in_network: 'true',
        modes: [
          'Rail',
          'Road'
        ]
      },
      {
        name: 'FW3M',
        in_network: 'true',
        modes: [
          'Rail',
          'Road'
        ]
      }
    ]
  },
  {
    from: 'Shangqu',
    to: 'Xingang',
    node_coverage_factor: '5',
    seasonal_factor: '10',
    forward_leg: '10',
    reverse_leg: '',
    liner_owned_port_usage_factor: '',
    intermodal_factor: {
      road: '4',
      rail: '10',
      sea: '10'
    },
    fws: [
      {
        name: 'FW1M',
        in_network: 'true',
        modes: [

        ]
      },
      {
        name: 'FW2M',
        in_network: 'true',
        modes: [
          'Rail',
          'Road'
        ]
      },
      {
        name: 'FW3M',
        in_network: 'true',
        modes: [
          'Rail',
          'Road'
        ]
      }
    ]
  },
  {
    from: 'Xingang',
    to: 'Qingdao',
    node_coverage_factor: '5',
    seasonal_factor: '5',
    forward_leg: '5',
    reverse_leg: '',
    liner_owned_port_usage_factor: '',
    intermodal_factor: {
      road: '2',
      rail: '5',
      sea: '10'
    },
    fws: [
      {
        name: 'FW1M',
        in_network: 'true',
        modes: [

        ]
      },
      {
        name: 'FW2M',
        in_network: 'true',
        modes: [

        ]
      },
      {
        name: 'FW3M',
        in_network: 'true',
        modes: [
          'Rail',
          'Road'
        ]
      }
    ]
  },
  {
    from: 'Qingdao',
    to: 'Ningbo',
    node_coverage_factor: '5',
    seasonal_factor: '15',
    forward_leg: '15',
    reverse_leg: '',
    liner_owned_port_usage_factor: '40',
    intermodal_factor: {
      road: '10',
      rail: '15',
      sea: '15'
    },
    fws: [
      {
        name: 'FW1M',
        in_network: 'true',
        modes: [

        ]
      },
      {
        name: 'FW2M',
        in_network: 'true',
        modes: [
          'Rail'
        ]
      },
      {
        name: 'FW3M',
        in_network: 'true',
        modes: [
          'Rail',
          'Road'
        ]
      }
    ]
  },
  {
    from: 'Ningbo',
    to: 'Shanghai',
    node_coverage_factor: '3',
    seasonal_factor: '1',
    forward_leg: '1',
    reverse_leg: '',
    liner_owned_port_usage_factor: '',
    intermodal_factor: {
      road: '3',
      rail: '1',
      sea: '1'
    },
    fws: [
      {
        name: 'FW1M',
        in_network: 'true',
        modes: [
          'Sea'
        ]
      },
      {
        name: 'FW2M',
        in_network: 'true',
        modes: [

        ]
      },
      {
        name: 'FW3M',
        in_network: 'true',
        modes: [

        ]
      }
    ]
  },
  {
    from: 'Shanghai',
    to: 'Busan',
    node_coverage_factor: '5',
    seasonal_factor: '5',
    forward_leg: '5',
    reverse_leg: '',
    liner_owned_port_usage_factor: '20',
    intermodal_factor: {
      road: '7',
      rail: '5',
      sea: '5'
    },
    fws: [
      {
        name: 'FW1M',
        in_network: 'true',
        modes: [
          'Sea'
        ]
      },
      {
        name: 'FW2M',
        in_network: 'true',
        modes: [

        ]
      },
      {
        name: 'FW3M',
        in_network: 'true',
        modes: [

        ]
      }
    ]
  },
  {
    from: 'Busan',
    to: 'Jakarta',
    node_coverage_factor: '15',
    seasonal_factor: '5',
    forward_leg: '5',
    reverse_leg: '',
    liner_owned_port_usage_factor: ' ',
    intermodal_factor: {
      road: '10',
      rail: '5',
      sea: '5'
    },
    fws: [
      {
        name: 'FW1M',
        in_network: "true",
        modes: [
          'Sea'
        ]
      },
      {
        name: 'FW2M',
        in_network: "true",
        modes: [

        ]
      },
      {
        name: 'FW3M',
        in_network: "true",
        modes: [

        ]
      }
    ]
  },
  {
    from: 'Jakarta',
    to: 'Miami',
    node_coverage_factor: '',
    seasonal_factor: '0',
    forward_leg: '0',
    reverse_leg: '',
    liner_owned_port_usage_factor: '',
    intermodal_factor: {
      road: '0',
      rail: '0',
      sea: '0'
    },
    fws: [
      {
        name: 'FW1M',
        in_network: 'true',
        modes: [

        ]
      },
      {
        name: 'FW2M',
        in_network: 'true',
        modes: [
          'Sea'
        ]
      },
      {
        name: 'FW3M',
        in_network: 'true',
        modes: [

        ]
      }
    ]
  },
  {
    from: 'Miami',
    to: 'Jacksonville',
    node_coverage_factor: '20',
    seasonal_factor: '10',
    forward_leg: '10',
    reverse_leg: '',
    liner_owned_port_usage_factor: '40',
    intermodal_factor: {
      road: '15',
      rail: '10',
      sea: '10'
    },
    fws: [
      {
        name: 'FW1M',
        in_network: 'true',
        modes: [
          'Sea'
        ]
      },
      {
        name: 'FW2M',
        in_network: 'true',
        modes: [

        ]
      },
      {
        name: 'FW3M',
        in_network: 'true',
        modes: [

        ]
      }
    ]
  },
  {
    from: 'Jacksonville',
    to: 'Atlanta',
    node_coverage_factor: '5',
    seasonal_factor: '3',
    forward_leg: '3',
    reverse_leg: '',
    liner_owned_port_usage_factor: '',
    intermodal_factor: {
      road: '5',
      rail: '3',
      sea: '3'
    },
    fws: [
      {
        name: 'FW1M',
        in_network: 'true',
        modes: [

        ]
      },
      {
        name: 'FW2M',
        in_network: 'true',
        modes: [
          'Rail',
          'Road'
        ]
      },
      {
        name: 'FW3M',
        in_network: 'true',
        modes: [
          'Rail',
          'Road'
        ]
      }
    ]
  },
  {
    from: 'Atlanta',
    to: 'Nashville',
    node_coverage_factor: '3',
    seasonal_factor: '2',
    forward_leg: '2',
    reverse_leg: '',
    liner_owned_port_usage_factor: '',
    intermodal_factor: {
      road: '5',
      rail: '2',
      sea: '2'
    },
    fws: [
      {
        name: 'FW1M',
        in_network: 'true',
        modes: [

        ]
      },
      {
        name: 'FW2M',
        in_network: 'true',
        modes: [
          'Road'
        ]
      },
      {
        name: 'FW3M',
        in_network: 'true',
        modes: [
          'Road'
        ]
      }
    ]
  },
  {
    from: 'Nashville',
    to: 'Bentonville',
    node_coverage_factor: '2',
    seasonal_factor: '2',
    forward_leg: '2',
    reverse_leg: '',
    liner_owned_port_usage_factor: '',
    intermodal_factor: {
      road: '10',
      rail: '2',
      sea: '2'
    },
    fws: [
      {
        name: 'FW1M',
        in_network: 'true',
        modes: [

        ]
      },
      {
        name: 'FW2M',
        in_network: 'true',
        modes: [
          'Road'
        ]
      },
      {
        name: 'FW3M',
        in_network: 'true',
        modes: [
          'Road'
        ]
      }
    ]
  }
]
}

const tableEventData = [
{ from: 'Anichang', to: 'Wuhan',newFF:{},freight_forwarder:[{name:'FW2M',mode_of_transport:'Rail',load:'450',load_percentage:'100'}]},
{ from: 'Wuhan', to: 'Shangqu',newFF:{},freight_forwarder:[{name:'FW2M',mode_of_transport:'Rail',load:'600',load_percentage:'50'},{name:'FW3M',mode_of_transport:'Road',load:'600',load_percentage:'50'}]},
{ from: 'Shangqu', to: 'Xingang',newFF:{},freight_forwarder:[{name:'FW2M',mode_of_transport:'Rail',load:'600',load_percentage:'50'},{name:'FW3M',mode_of_transport:'Road',load:'600',load_percentage:'50'}]},
{ from: 'Xingang', to: 'Qingdao',newFF:{},freight_forwarder:[{name:'FW3M',mode_of_transport:'Rail',load:'600',load_percentage:'100'}]},
{ from: 'Qingdao', to: 'Ningbo',newFF:{},freight_forwarder:[{name:'FW2M',mode_of_transport:'Rail',load:'600',load_percentage:'50'},{name:'FW3M',mode_of_transport:'Road',load:'600',load_percentage:'50'}]},
{ from: 'Ningbo', to: 'Shanghai',newFF:{},freight_forwarder:[{name:'FW1M',mode_of_transport:'Sea',load:'600',load_percentage:'100'}]},
{ from: 'Shanghai', to: 'Busan',newFF:{},freight_forwarder:[{name:'FW1M',mode_of_transport:'Sea',load:'600',load_percentage:'100'}]},
{ from: 'Busan', to: 'Jakarta',newFF:{},freight_forwarder:[{name:'FW1M',mode_of_transport:'Sea',load:'600',load_percentage:'100'}]},
{ from: 'Jakarta', to: 'Miami',newFF:{},freight_forwarder:[{name:'FW2M',mode_of_transport:'Sea',load:'600',load_percentage:'100'}]},
{ from: 'Miami', to: 'Jacksonville',newFF:{},freight_forwarder:[{name:'FW1M',mode_of_transport:'Sea',load:'600',load_percentage:'100'}]},
{ from: 'Jacksonville', to: 'Atlanta',newFF:{},freight_forwarder:[{name:'FW2M',mode_of_transport:'Rail',load:'600',load_percentage:'50'},{name:'FW3M',mode_of_transport:'Road',load:'600',load_percentage:'50'}]},
{ from: 'Atlanta', to: 'Nashville',newFF:{},freight_forwarder:[{name:'FW2M',mode_of_transport:'Road',load:'600',load_percentage:'100'}]},
{ from: 'Nashville', to: 'Bentonville',newFF:{},freight_forwarder:[{name:'FW2M',mode_of_transport:'Road',load:'600',load_percentage:'100'}]}
];

var row = 0;

function createRoute (url){
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function () {
	    if (xhr.readyState === 4 && xhr.status === 200) {
	        var json = JSON.parse(xhr.responseText);
	    }
	};
	var data = JSON.stringify(tableData);
	xhr.send(data);
}

function updateRoute (url, callback){
	var json = {
		"customer": "Wallmart",
		"route": "china-us",
		"period": "2017-Q1",
		"node": {}
	}
	json.node = tableEventData[row]
	console.log(JSON.stringify(json));

	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function () {
	    if (xhr.readyState === 4 && xhr.status === 200) {
	        callback(xhr.response);
	    }
	};
	var data = JSON.stringify(json);
	xhr.send(data);
}

function nextExecution(){
	console.log('nextExecution');
	row = row + 1;
	if(row < tableEventData.length) {
		updateRoute('https://routes-hyperledger.eu-gb.mybluemix.net/updateroute', nextExecution)
	}
}

$(document).ready(function(){
  console.log(tableData);
  createRoute('https://routes-hyperledger.eu-gb.mybluemix.net/configroute')
});

$(document).on('click', '#sub-trigger', function(){
	updateRoute('https://routes-hyperledger.eu-gb.mybluemix.net/updateroute', nextExecution)
});
