function waitingForSomeServerToAct(myCallBack) {
    let dataNeeded;
    setTimeout(() => {
        console.log("BackEnd Information have just been received");
        dataNeeded= "JavaScript";
        myCallBack(dataNeeded);
    }, 5000);
    return dataNeeded;
}

function needsBackEndData(info) {
    console.log("I need to use backend data");
}


waitingForSomeServerToAct(needsBackEndData);

alert("This is a JS alert")