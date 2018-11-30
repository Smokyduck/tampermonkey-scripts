// ==UserScript==
// @name         invite-accepter
// @version      0.2
// @updateURL    https://raw.githubusercontent.com/Smokyduck/tampermonkey-scripts/master/linkedin/invite-accepter.js
// @downloadURL  https://raw.githubusercontent.com/Smokyduck/tampermonkey-scripts/master/linkedin/invite-accepter.js
// @author       Smokyduck
// @match        https://www.linkedin.com/*
// ==/UserScript==

function acceptInvite(){
	if (document.body.querySelector(".button-primary-large.ml1")) {
		if (document.body.querySelector(".button-primary-large.ml1").innerText.match(/Send/)) {
	        document.body.querySelector(".button-primary-large.ml1").click();
        }
    }
};

document.body.addEventListener("keydown",
                               q=>{if(event.key == 'Tab')
                                       {acceptInvite();}
                               },
                               false);
