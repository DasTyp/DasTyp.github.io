let sidebar = document.getElementById('sidebar');
let menuButton = document.getElementById('menubutton');
let closeSidebar = document.getElementById('close-sidebar');

let shoppingCart = document.getElementById('shopping-cart');
let openShopping = document.getElementById('open-cart');

let shop_open = false;

menuButton.onclick = () => {
    let left = 100;
    sidebar.style.left = "100%";
    let slider = setInterval(() => {
        if(left <= 0) {
            clearInterval(slider);
        } else {
            left -= 10;
            sidebar.style.left = left + "%";
        }
    }, 8);
}

closeSidebar.onclick = () => {
    let left = 0;
    sidebar.style.left = "0%";
    let slider = setInterval(() => {
        if(left >= 100) {
            clearInterval(slider);
        } else {
            left += 10;
            sidebar.style.left = left + "%";
        }
    }, 8);
}

openShopping.onclick = () => {
    if(!shop_open) {
        shop_open = true;
        let size = shoppingCart.clientWidth;
        let right = -size;
        let slider = setInterval(() => {
            if(right >= 0) {
                right = 0;
                shoppingCart.style.right = right + "px";
                clearInterval(slider);
            } else if(!shop_open) {
                clearInterval(slider);
            }else {
                if(right + size/10 > 0 && right + size/10 < size/10) {
                    right = 0;
                }
                right += size/10;
                shoppingCart.style.right = right + "px";
            }
        }, 8);
    } else {
        shop_open = false;
        let size = shoppingCart.clientWidth;
        let right = parseInt(shoppingCart.style.right);
        let slider = setInterval(() => {
            if(right <= -size) {
                right = -size;
                shoppingCart.style.right = right + "px";
                clearInterval(slider)
            } else if(shop_open) {
                clearInterval(slider)
            } else {
                if(right - size/10 < -size && right - size/10 > -size + size/10) {
                    right = -size;
                }
                right -= size/10;
                shoppingCart.style.right = right + "px";
            }
        }, 8);
    }
} 

