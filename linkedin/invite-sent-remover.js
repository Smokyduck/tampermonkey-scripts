// ==UserScript==
// @name         invite-sent-remover
// @version      0.1.2
// @updateURL    https://raw.githubusercontent.com/Smokyduck/tampermonkey-scripts/master/linkedin/invite-sent-remover.js
// @downloadURL  https://raw.githubusercontent.com/Smokyduck/tampermonkey-scripts/master/linkedin/invite-sent-remover.js
// @author       Smokyduck
// @match        https://www.linkedin.com/search/results/*
// ==/UserScript==

function removeNode(node){
	if (node.querySelector(".search-result__action-button.search-result__actions--primary.artdeco-button.artdeco-button--default.artdeco-button--2.artdeco-button--secondary")) {
		if (node.querySelector("button").disabled) {
	        	node.remove();
        }
    }
};

document.body.addEventListener("keydown",
                               q=>{if(event.key == '`' || event.key == 'ё')
                                       {document.querySelectorAll(".search-result.search-result__occluded-item.ember-view").forEach(removeNode);}
                               },
                               false);
