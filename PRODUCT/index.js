// Get references to HTML elements using their IDs
let Load = document.getElementById("Load");
let main = document.getElementById("main");
let i = 0; // Variable to keep track of the starting index for fetching data
let k = 1; // Variable to determine how many items to fetch at a time

// Function to fetch data from local storage and display it on the webpage
function fetchdatafromlocal(i, k) {
    // Retrieve the array stored in local storage with the key "key"
    let localArray = JSON.parse(localStorage.getItem("key"));

    // Check if the current index is at the end of the array, hide the "Load" button
    if (i == localArray.length - 1) Load.style.display = "none";

    // Copy the localArray and get a subset of data starting from index 'i' with length 'k'
    let data = localArray.slice(i, i + k);

    // Function to handle the click event when the "AddToCart" button is clicked
    const handlClick = (id) => {
        // Retrieve user login information from local storage or an empty array if not available
        const userdata = JSON.parse(localStorage.getItem("islogin")) || [];

        if (userdata.length) {
            // If the user is logged in, retrieve user details from local storage
            let users = JSON.parse(localStorage.getItem("user")) || [];
            
            // Filter the user based on the logged-in user's ID
            let filteruser = users.filter(e => e._id == userdata[0].id);

            // Add the product ID to the user's cart
            filteruser[0].cart.push(id);

            // Save the updated user information back to local storage
            users.forEach(e => {
                // You might want to update user details here
            });

            // Redirect the user to the cart page
            window.location.href = "http://127.0.0.1:5500/cart.html";
        } else {
            // If the user is not logged in, redirect them to the login page
            window.location.href = "http://127.0.0.1:5500/login.html";
        }
    };

    // Loop through the data and create HTML elements for each product
    data.map((e) => {
        // Create a new div element for each product
        let div = document.createElement("div");
        div.setAttribute('class', "innerdiv");

        // Create an image element and set its source and styles
        let img = document.createElement("img");
        img.src = "https://www.shutterstock.com/image-illustration/abstract-wave-technology-background-blue-260nw-2152448863.jpg";
        img.style.height = "200px";
        img.style.width = "200px";

        // Create paragraph elements for product name, description, and price
        let p1 = document.createElement("p");
        p1.innerText = e.pname;
        let p2 = document.createElement("p");
        p2.innerText = e.pdesc;
        let p3 = document.createElement("p");
        p3.innerText = e.pprice;

        // Create a button for adding the product to the cart and attach a click event listener
        let button = document.createElement("button");
        button.innerText = "AddToCart";
        button.addEventListener("click", () => {
            handlClick(e._id);
        });

        // Append all elements to the product div
        div.appendChild(img);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.appendChild(button);

        // Append the product div to the main container on the webpage
        main.appendChild(div);
    });
}

// Event listener for the "DOMContentLoaded" event to fetch and display data when the page loads
document.addEventListener("DOMContentLoaded", () => {
    fetchdatafromlocal(i, k);
});

// Event listener for the "Load" button click event to fetch and display more data
Load.addEventListener("click", () => {
    // Increment the index to fetch the next set of data
    i = i + k;
    fetchdatafromlocal(i, k);
});
