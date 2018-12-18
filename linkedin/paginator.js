// ==UserScript==
// @name         paginator
// @version      0.1
// @updateURL    
// @downloadURL  
// @author       Smokyduck
// @match        https://www.linkedin.com/search/results/*
// ==/UserScript==

function navigator(direction){
    document.querySelector(`button.${direction}`).click()
};

document.body.addEventListener("keydown",
                               q=>{if(event.key == '1')
                                       navigator('prev')
				   else if (event.key == '2')
                                       navigator('next')
                               },
                               false);
