// ==UserScript==
// @name         paginator
// @version      0.1.1
// @updateURL    https://raw.githubusercontent.com/Smokyduck/tampermonkey-scripts/master/linkedin/paginator.js
// @downloadURL  https://raw.githubusercontent.com/Smokyduck/tampermonkey-scripts/master/linkedin/paginator.js
// @author       Smokyduck
// @match        https://www.linkedin.com/search/results/*
// ==/UserScript==

function navigator(direction){
    document.querySelector(`button.${direction}`).click()
};

document.body.addEventListener("keydown",
                               q=>{if(event.key == '1')
                                       navigator('artdeco-pagination__button--previous')
				   else if (event.key == '2')
                                       navigator('artdeco-pagination__button--next')
                               },
                               false);
