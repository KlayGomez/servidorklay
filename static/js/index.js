//https://www.eclipse.org/paho/clients/js/
var btn=document.getElementById("sensor");

function LED1_On() {
	alert(btn);
	console.log("led on");
	document.getElementById("sensor").innerHTML="led on";
	client.subscribe("klay-2000@outlook.com/tema1");
   	message = new Paho.MQTT.Message("ENCENDER");
    	message.destinationName = "klay-2000@outlook.com/tema1";
    	client.send(message);
	
  
}
function LED1_Off(){	
	alert("led off");
	console.log("led off");
	document.getElementById("sensor").innerHTML="led off";
	client.subscribe("klay-2000@outlook.com/tema1");
   	 message = new Paho.MQTT.Message("APAGAR");
    	message.destinationName = "klay-2000@outlook.com/tema1";
    	client.send(message);
	
}






// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "klay-2000@outlook.com",
    password: "0850170481",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	  
    client.subscribe("klay-2000@outlook.com/tema1");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "klay-2000@outlook.com/tema1";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	  document.getElementById("sensor").innerHTML=message.payloadString;
  }
  
