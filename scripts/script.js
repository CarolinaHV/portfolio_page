Array.from(document.querySelectorAll
    (".navigation")).forEach((item) =>{
        item.onclick = () =>{
            item.parentElement.parentElement.classList.toggle("change");
        }
    })