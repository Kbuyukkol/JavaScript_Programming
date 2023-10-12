function waitingForSomeServerToAct() {
    let dataNeeded;
    setTimeout(() => {
        console.log("BackEnd Information have just been received");
        dataNeeded= "JavaScript";
        console.log(dataNeeded);
    }, 5000);
    return dataNeeded;
}

function needsBackEndData(info) {
    console.log("I need to use backend data");
}

let data= waitingForSomeServerToAct();

needsBackEndData(data);