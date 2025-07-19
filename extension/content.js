
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
     if (message.action === "contrast") {
       document.body.style.filter = document.body.style.filter === "contrast(200%)" ? "" : "contrast(200%)";
       document.body.style.backgroundColor = document.body.style.backgroundColor === "#000000" ? "" : "#000000";
       document.body.style.color = document.body.style.color === "#FFFFFF" ? "" : "#FFFFFF";
       document.querySelectorAll("button, a").forEach(el => {
         el.style.border = el.style.border === "2px solid #FFC107" ? "" : "2px solid #FFC107";
       });
     }
   });