// function loadScript() {
//     let vescripts = [
//         "js/html.js",
//         "js/ckeditor/ckeditor.js",
//         "js/simplewysiwyg.js",
//         "js/visualEditor.js"
//     ];

//     function loadNext(index) {
//         if (index >= vescripts.length) return;
        
//         let e = document.createElement("script");
//         e.src = chrome.runtime.getURL(vescripts[index]);
//         (document.head || document.documentElement).appendChild(e);
//         e.onload = function () {
//             e.parentNode.removeChild(e);
//             loadNext(index + 1);
//         };
//     }
    
//     loadNext(0);
// }
// if (window.location.href.includes("posting.php") || window.location.href.includes("ucp.php?i=pm&mode=compose")) {
//     console.log("Ivelt extension loaded on posting.php");
//     loadScript();
// } else {
//     console.log("not on posting or PM page, extension not loaded");
// }




