!function(){function t(t,e){var i=document.createElement("script");i.onload=function(t){this.parentNode&&this.parentNode.removeChild(this),e&&e()},i.onerror=o,i.src=t,n(i)}function n(t){var o=document.getElementsByTagName("body")[0];o?o.appendChild(t):setTimeout(n.bind(void 0,t),100)}function o(){console.error("chaport: can't get latest version")}window.chaportInitResult="",t("https://app.chaport.com/info/asset-name/js/insert-main?jsonpCallback=true",function(){window.chaportInitResult?(t("https://app.chaport.com"+window.chaportInitResult),delete window.chaportInitResult):o()})}(window);