# Fundementals 


## Components of extension
1.Manifest file
2.background script
3.content script
4. Ui Elements


## Manifest file
tells about the extension to browsers 

## Background extension
The extension are based on the events , the event are browser triggers shcuh as colosing the tab , clicking 
the extension are montering these events on the browser.
1. Note: the background scripts are loaded when it required and unload when it is idle
2. we have to mention about the background scripts in manifest json
3. if we want to access any thing from browser we need to ask for permission which is a list in manifest file.


background scripts are used to reacting to an event and adding listeners for specfic events where as content scripts are run in context of web pages they are used to read the detail of web pages and make changes in web pages
and pass information to background scripts.


## Content scripts
before  creating the content scripts we have to mention the content scripts in the manifest.json

in manifest.json it takes a list of dict where it contains 
js, html, csss. and we have to mention matches i.e.. the pages on which this script can run. 
exclude_matche from mathches
run_at ; before or after 

## extension user interface
1. icons with different syze  link 16, 48. 128.
2. browser_actions it tell when use houseover the extension or clicks on the extension



# Advance Topics

## storage
chrome.storage api
before using the storage we have to include the storage in permissions

Two types of storage one in local storage and another is sync storage which store when you login diffent machine chrome browser

## message passing 
we can pass the message between background scrip and content script
there are ways of request
1. one time request(fire and forget)
2. long lived request


