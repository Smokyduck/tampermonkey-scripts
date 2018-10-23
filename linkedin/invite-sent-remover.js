// ==UserScript==
// @name         invite-sent-remover
// @version      0.1
// @updateURL    https://raw.githubusercontent.com/Smokyduck/tampermonkey-scripts/master/linkedin/invite-sent-remover.js
// @downloadURL  https://raw.githubusercontent.com/Smokyduck/tampermonkey-scripts/master/linkedin/invite-sent-remover.js
// @author       Smokyduck
// @match        https://www.linkedin.com/search/results/*
// ==/UserScript==

function removeNode(node){
	if (node.querySelector(".search-result__actions--primary.button-secondary-medium.m5")) {
		if (node.querySelector(".search-result__actions--primary.button-secondary-medium.m5").innerText.match(/Invite Sent/)) {
	        node.remove();
        }
    }
};

document.body.addEventListener("keydown",
                               q=>{if(event.key == '`' || event.key == 'ё')
                                       {document.querySelectorAll(".search-result.search-result__occluded-item.ember-view").forEach(removeNode);}
                               },
                               false);
