chrome.runtime.onMessage.addListener((request, sender, resp) => {

    // response is the message object
    // sender is the the from which extension it is sent
    // resp is the optional callback function which is passed while creating sendMessage
    console.log('request', request);
    console.log('sender', sender);
    console.log('response', resp);
});

// sending data from background to content

chrome.tabs.query({active:true, currentWindow: true}, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, {name: "Thomas"})
})

