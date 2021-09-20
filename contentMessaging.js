window.onload(testMessage());

function testMessage() {

    // sendMessage takes two parameters 
    // 1. message object
    // 2. callback function
    // this callback function send to the event listener where it can 
    // be executed
    chrome.runtime.sendMessage(
        {payload: "hello from a content"}, 
        () => console.log(2+2)
    );
}

chrome.runtime.onMessage.addListener((request, sender) => {

    // response is the message object
    // sender is the the from which extension it is sent
    console.log('request', request);
    console.log('sender', sender);
});