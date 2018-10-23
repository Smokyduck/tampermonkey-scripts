// ==UserScript==
// @name         Withdrawer
// @version      0.1
// @updateURL    https://github.com/Smokyduck/tampermonkey-scripts/blob/master/linkedin/withdrawer.js
// @author       Smokyduck
// @match        https://www.linkedin.com/mynetwork/invitation-manager/sent/*
// ==/UserScript==

// TODOs:
// Insted of only withdraw script should do next things:
//   0. Be sure about timeout
//   1. open link in new tab. only after open in new window (window.open() != null) script is allowed to do next things
//   2. select person with click, not only checkbox.checked (because withdraw button) node.querySelector('.ember-checkbox.ember-view').click();
//   3. "withdraw selected"

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
