// ==UserScript==
// @name         invite-sent-remover
// @version      0.1.3
// @updateURL    https://raw.githubusercontent.com/Smokyduck/tampermonkey-scripts/master/linkedin/invite-sent-remover.js
// @downloadURL  https://raw.githubusercontent.com/Smokyduck/tampermonkey-scripts/master/linkedin/invite-sent-remover.js
// @author       Smokyduck
// @match        https://www.linkedin.com/search/results/*
// ==/UserScript==

function removeNode(node){
    if (node.querySelector(".artdeco-button.artdeco-button--muted.artdeco-button--2.artdeco-button--secondary.artdeco-button--disabled.ember-view")) {
        node.remove();
    }
};

document.body.addEventListener("keydown",
                               q=>{if(event.key == '`' || event.key == 'ё')
                                       {document.querySelectorAll(".reusable-search__result-container").forEach(removeNode);}
                               },
                               false);
