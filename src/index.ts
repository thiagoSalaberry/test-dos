(function(){
    console.clear();
    const buttonEl:HTMLButtonElement = document.querySelector(".boton")!;
    buttonEl.addEventListener("click", ()=>{
        history.pushState({},"","/env")
    });
})();