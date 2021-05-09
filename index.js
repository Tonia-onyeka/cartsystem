const btn=document.getElementById("btn_link1")

btn.addEventListener("click",()=>{
    windows.location.replace("success.html")
})

/**ADD ITEM */
const toaster = document.getElementById("toaster");
const cartbtn = document.getElementById("cartbtn");
cartbtn.addEventListener("click", () => {
    toaster.className = "show";
    setTimeout(() => { 
        toaster.className = toaster.className.replace("show", "");
    }, 3000);
})