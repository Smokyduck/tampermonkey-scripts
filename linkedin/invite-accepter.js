// ==UserScript==
// @name         invite-accepter
// @version      0.2.1
// @updateURL    https://raw.githubusercontent.com/Smokyduck/tampermonkey-scripts/master/linkedin/invite-accepter.js
// @downloadURL  https://raw.githubusercontent.com/Smokyduck/tampermonkey-scripts/master/linkedin/invite-accepter.js
// @author       Smokyduck
// @match        https://www.linkedin.com/*
// ==/UserScript==

function acceptInvite(){
    var q;
	if (q = document.body.querySelector(".artdeco-button.artdeco-button--3.ml1")) {
		if (q.innerText.match(/Send/)) {
	        q.click();
        }
    }
};

document.body.addEventListener("keydown",
                               q=>{if(event.key == 'Tab')
                                       {acceptInvite();}
                               },
                               false);
