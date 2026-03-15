let scripts = [
  "js/print.js",
  "js/keyboardShortcuts.js",
  "js/newResponseNotification.js",
  "js/pageEnhancements.js",
  "js/splitNotifications.js",
  "js/addTopicButtons.js",
  "js/addGoogleSearch.js"
];

scripts.forEach((s) => {
  let e = document.createElement("script");
  e.src = chrome.runtime.getURL(s);
  (document.head || document.documentElement).appendChild(e);
  e.onload = function () {
    e.parentNode.removeChild(e);
  };
  
});
function loadScript() {
    let vescripts = [
        "js/visualEditor/html.js",
        "js/visualEditor/ckeditor/ckeditor.js",
        "js/visualEditor/simplewysiwyg.js",
        "js/visualEditor/visualEditor.js"
    ];

    function loadNext(index) {
        if (index >= vescripts.length) return;
        
        let e = document.createElement("script");
        e.src = chrome.runtime.getURL(vescripts[index]);
        (document.head || document.documentElement).appendChild(e);
        e.onload = function () {
            e.parentNode.removeChild(e);
            loadNext(index + 1);
        };
    }
    
    loadNext(0);
}


// TODO: remove mode=quote once quote mode is supported
if (window.location.href.includes("posting.php") && !(window.location.href.includes("mode=quote")) || window.location.href.includes("ucp.php?i=pm&mode=compose")) {
    // console.log("Ivelt extension loaded on posting.php");
    loadScript();
} else {
    // console.log("not on posting or PM page, extension not loaded");
}
