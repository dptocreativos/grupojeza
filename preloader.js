const start = performance.now();

window.addEventListener("load", function(){

  const elapsed = performance.now() - start;
  const target = 3200;

  const delay = Math.max(target - elapsed, 0);

  setTimeout(function(){
    const preloader = document.getElementById("preloader");

    if (!preloader) return;

    preloader.classList.add("fadeout");

    setTimeout(function(){
      preloader.style.display = "none";
    }, 600);

  }, delay);

});
