let sidebar = document.getElementById('sidebar');
let menuButton = document.getElementById('menubutton');
let closeSidebar = document.getElementById('close-sidebar');
let age_blocker = document.getElementById('blocker');
let age_confirm = document.getElementById('age_confirm');

let shoppingCart = document.getElementById('shopping-cart');
let openShopping = document.getElementById('open-cart');

let shop_open = false;

menuButton.onclick = () => {
    sidebar.style.width = "100%";
}

closeSidebar.onclick = () => {
    sidebar.style.width = "0";
}

openShopping.onclick = () => {
    if(!shop_open) {
        if(window.innerWidth < 400) {
            shoppingCart.style.width = "100%";
        } else {
            shoppingCart.style.width = "350px";
        }
        shop_open = true;
    } else {
        shoppingCart.style.width = "0";
        shop_open = false;
    }
} 

age_confirm.onclick = () => {
    //fetch("http://localhost:1337/is-sixteen");
    age_blocker.classList.add("clicked")
    setTimeout(function(){age_blocker.style.display = "none";},300);
}