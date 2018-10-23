// ==UserScript==
// @name         Withdrawer
// @version      0.2
// @updateURL    https://raw.githubusercontent.com/Smokyduck/tampermonkey-scripts/master/linkedin/invite-sent-remover.js
// @author       Smokyduck
// @match        https://www.linkedin.com/mynetwork/invitation-manager/sent/*
// ==/UserScript==

function withdraw(node){
    if (node.querySelector(".time-badge.time-ago").innerText.match(/month/)) {
        setTimeout(function () {
            node.querySelector(".invitation-card__action-btn.button-tertiary-medium-muted").click();
        }, 500)
    }
};

document.body.addEventListener("keydown",
                               q=>{if (event.key == '`' || 'ё') {document.body.querySelectorAll('.js-invitation-card__invite-details-container.display-flex').forEach(withdraw)}},
                               false);
