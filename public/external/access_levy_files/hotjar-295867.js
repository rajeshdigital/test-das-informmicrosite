window.hjSiteSettings = window.hjSiteSettings || {"testers_widgets":[],"polls":[],"recording_capture_keystrokes":true,"site_id":295867,"deferred_page_contents":[],"record_targeting_rules":[],"surveys":[],"heatmaps":[],"feedback_widgets":[],"forms":[],"record":true,"r":1.0};

window.hjBootstrap = window.hjBootstrap || function (scriptUrl) {
    var s = document.createElement('script');
    s.src = scriptUrl;
    document.getElementsByTagName('head')[0].appendChild(s);
    window.hjBootstrap = function() {};
};

hjBootstrap('https://script.hotjar.com/modules-3f929be33bd5955c682d06614328f081.js');