```javascript
const button = document.getElementById("exploreBtn");

button.addEventListener("click", () => {

  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });

});
```
