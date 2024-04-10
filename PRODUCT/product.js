// Get references to HTML elements
let inputdiv = document.getElementById("inputdiv");
let pname = document.getElementById("pname");
let pprice = document.getElementById("pprice");
let pdesc = document.getElementById("pdesc");
let submit = document.getElementById("submit");
let newdiv = document.createElement("div");

// Function to save product to localStorage and update display
const savTolocal = (obj) => {
    // Retrieve existing product array from localStorage or initialize an empty array
    let localArray = JSON.parse(localStorage.getItem("key")) || [];
    // Push the new product object to the array
    localArray.push(obj);
    // Update localStorage with the modified array
    localStorage.setItem("key", JSON.stringify(localArray));

    // Create a new list item to display the product information
    let li = document.createElement("li");
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    button1.innerText = "edit";
    button2.innerText = "delete";

    // Set the list item's text content with product details
    li.innerText = "Name:" + obj.pname + "   Price:" + obj.pprice + "   Description:" + obj.pdesc;
    // Append "edit" and "delete" buttons to the list item
    li.appendChild(button1);
    li.appendChild(button2);
    // Append the list item to the container div
    newdiv.appendChild(li);

    // Event listener for the "edit" button
    button1.addEventListener("click", () => {
        // Populate input fields with current product information
        pname.value = obj.pname;
        pprice.value = obj.pprice;
        pdesc.value = obj.pdesc;

        // Hide the "submit" button
        submit.style.display = "none";
        // Create an "update" button dynamically
        let update = document.createElement("button");
        update.innerText = "update";
        inputdiv.appendChild(update);

        // Event listener for the "update" button
        update.addEventListener("click", () => {
            // Update the displayed information in the list item
            li.innerText = "Name:" + pname.value + "   Price:" + pprice.value + "   Description:" + pdesc.value;
            // Append "edit" and "delete" buttons to the updated list item
            li.appendChild(button1);
            li.appendChild(button2);

            // Update the corresponding data in localStorage
            let newdata = JSON.parse(localStorage.getItem("key"));
            newdata.forEach((e) => {
                if (e.id == obj.id) {
                    e.pname = pname.value;
                    e.pprice = pprice.value;
                    e.pdesc = pdesc.value;
                }
            });

            localStorage.setItem("key", JSON.stringify(newdata));

            // Clear input fields and display the "submit" button again
            pname.value = "";
            pprice.value = "";
            pdesc.value = "";
            submit.style.display = "inline";
            // Remove the dynamically created "update" button
            update.remove();
        });
    });

    // Event listener for the "delete" button
    button2.addEventListener("click", () => {
        // Remove the list item from the display
        li.remove();
        // Retrieve existing product array from localStorage
        let localArray2 = JSON.parse(localStorage.getItem("key"));
        // Filter out the deleted product from the array
        localArray2 = localArray2.filter(e => {
            return (e !== obj);
        });
        // Update localStorage with the modified array
        localStorage.setItem("key", JSON.stringify(localArray2));
    });

    // Append the container div to the document body
    document.body.appendChild(newdiv);
};

// Function to display product data on page load
const displayData = () => {
    // Retrieve product data from localStorage or initialize an empty array
    let data = JSON.parse(localStorage.getItem("key")) || [];
    // Iterate through each product
    data.forEach((element, i) => {
        // Create a new list item with "edit" and "delete" buttons
        let li = document.createElement("li");
        let button1 = document.createElement("button");
        let button2 = document.createElement("button");
        button1.innerText = "edit";
        button2.innerText = "delete";

        // Set the list item's inner HTML with product details
        li.innerHTML = "Name:" + element.pname + " Price:" + element.pprice + " Description:" + element.pdesc;
        // Append "edit" and "delete" buttons to the list item
        li.appendChild(button1);
        li.appendChild(button2);
        // Append the list item to the container div
        newdiv.appendChild(li);

        // Event listener for the "edit" button (similar to savTolocal function)
        button1.addEventListener("click", () => {
            // ... (same as in savTolocal function)
        });

        // Event listener for the "delete" button (similar to savTolocal function)
        button2.addEventListener("click", () => {
            // ... (same as in savTolocal function)
        });
    });

    // Append the container div to the document body
    document.body.appendChild(newdiv);
};

// Event listener for the "DOMContentLoaded" event
document.addEventListener("DOMContentLoaded", displayData);

// Event listener for the "submit" button
submit.addEventListener("click", () => {
    // Generate a unique identifier for the new product
    const timestamp = new Date().getTime();
    const randomNumber = Math.floor(Math.random() * 100000);

    // Create a new product object with input values and the generated id
    let obj = {
        pname: pname.value,
        pdesc: pdesc.value,
        pprice: pprice.value,
        id: timestamp + randomNumber
    };

    // Trim input values to remove leading and trailing whitespace
    obj.pname = obj.pname.trim();
    obj.pdesc = obj.pdesc.trim();
    obj.pprice = obj.pprice.trim();

    // Clear input fields
    pname.value = "";
    pdesc.value = "";
    pprice.value = "";

    // Check if input fields are not empty
    if (obj.pname == "" || obj.pprice == "" || obj.pdesc == "") {
        alert("Enter something");
    } else {
        // Call savTolocal function to save the new product to localStorage and update display
        savTolocal(obj);
    }
});

