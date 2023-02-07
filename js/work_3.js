const websocket = new WebSocket('wss://echo-ws-service.herokuapp.com');

const input = document.querySelector(".chat__input");
const output = document.querySelector(".chat__main")
const send = document.querySelector(".chat__send");
const btnLocation = document.querySelector(".chat__geo");

const writeToScreen = (value) => {
    const clientMessage = document.createElement("p");
    clientMessage.classList.add("message__client");
    clientMessage.innerHTML = value;
    output.appendChild(clientMessage);
    websocket.send(value)
}

const writePosition = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const locationMessage = document.createElement("a");
    
    locationMessage.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    locationMessage.innerHTML = "Геолокация";
    locationMessage.classList.add("message__link");
    output.appendChild(locationMessage);
    websocket.send(position);
}

const applyMessage = (data) => {
    if(data !== "[object GeolocationPosition]") {
        const serverMessage = document.createElement("p");
        serverMessage.classList.add("message__server");
        serverMessage.innerHTML = data;
        output.appendChild(serverMessage);
    }
}

send.addEventListener('click', () => {
    writeToScreen(input.value);
    input.value = "";
    output.scrollBy(0, 50);
});

btnLocation.addEventListener('click', () => {
    if(!navigator.geolocation) {
        console.log('error');
    } else {
        navigator.geolocation.getCurrentPosition(writePosition);
    }
});

document.addEventListener('DOMContentLoaded',() => {
    websocket.onmessage = function(evt) {
        applyMessage(evt.data);
    }
})