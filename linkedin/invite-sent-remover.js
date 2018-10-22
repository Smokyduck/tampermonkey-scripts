// ==UserScript==
// @name         Invite Sent Remover
// @version      0.1
// @updateURL    
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

document.body.addEventListener("mousedown",
                               q=>{document.querySelectorAll(".search-result.search-result__occluded-item.ember-view").forEach(removeNode)},
                               false);
