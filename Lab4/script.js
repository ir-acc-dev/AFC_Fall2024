// Menu Page

const menuItems = [
    {
        name: "Cabernet Sauvignon",
        description: "A bold red wine with notes of blackcurrant and a hint of spice",
        price: 9.99,
        image: "Images/Cab.jpeg" 
    },
    {
        name: "Chardonnay",
        description: "A rich and buttery white wine with flavors of oak and vanilla",
        price: 12.99,
        image: "Images/Chardonnay.jpeg"
    },
    {
        name: "Pinot Noir",
        description: "A light-bodied red wine with flavors of cherry and raspberry",
        price: 8.99,
        image: "Images/Pinot.jpeg"
    },
    {
        name: "Riesling",
        description: "A sweet and fruity German wine with notes of apple and peach.",
        price: 16.99,
        image: "Images/Riesling.jpeg"
    },
    {
        name: "Sauvignon Blanc",
        description: "A crisp white wine with flavors of lime and green apple.",
        price: 17.99,
        image: "Images/Sauv.jpeg"
    }

];

// Keep track of current item index
let currentItemIndex = 0;

// Function to update the menu display
function updateMenu() {
    const item = menuItems[currentItemIndex];
    
    // Update the image, alt text, and menu info
    document.getElementById('menu-image').src = item.image;
    document.getElementById('menu-image').alt = item.name;
    document.getElementById('menu-item').innerText = item.name;
    document.getElementById('menu-description').innerText = item.description;
    
    // Format the price using Intl.NumberFormat
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(item.price);
    
    document.getElementById('menu-price').innerText = formattedPrice;
}

// Functions for previous and next buttons
function prevImage() {
    currentItemIndex = (currentItemIndex - 1 + menuItems.length) % menuItems.length;
    updateMenu();
}

function nextImage() {
    currentItemIndex = (currentItemIndex + 1) % menuItems.length;
    updateMenu();
}

// Event listeners for buttons
document.getElementById('prev-btn').addEventListener('click', prevImage);
document.getElementById('next-btn').addEventListener('click', nextImage);

// Initialize the menu on page load
updateMenu();




