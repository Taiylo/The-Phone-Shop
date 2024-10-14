const exampleOrders = [
    {
        companyName: "Tech Solutions",
        contactNumber: "1234567890",
        quantity: 10,
        smartphoneType: "Standard",
        setupOption: "Option A"
    },
    {
        companyName: "Innovate Inc.",
        contactNumber: "0987654321",
        quantity: 5,
        smartphoneType: "Superior",
        setupOption: "Option B"
    }
];

const customerOrders = [
    {
        companyName: "Example Corp",
        contactNumber: "555-1234",
        quantity: 20,
        smartphoneType: "Basic",
        setupOption: "Option A"
    }
];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "customer1" && password === "customer1") {
        window.location.href = "customer-panel.html"; // Redirect to customer panel
    } else if (username === "admin1" && password === "admin1") {
        window.location.href = "admin-panel.html"; // Redirect to admin panel
    } else {
        document.getElementById('login-message').innerText = "Invalid username or password!";
    }
}

function makeQuotation() {
    document.getElementById('quotation').style.display = 'block';
    document.getElementById('orders').style.display = 'none';
}

function viewOrders() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = ''; // Clear existing orders

    exampleOrders.forEach(order => {
        const li = document.createElement('li');
        li.innerText = `${order.companyName} - ${order.quantity} ${order.smartphoneType} (${order.setupOption})`;
        orderList.appendChild(li);
    });

    document.getElementById('orders').style.display = 'block';
    document.getElementById('quotation').style.display = 'none';
}

function submitQuotation() {
    const companyName = document.getElementById('company-name').value;
    const contactNumber = document.getElementById('contact-number').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const smartphoneType = document.getElementById('smartphone-type').value;
    const setupOption = document.getElementById('setup-option').value;

    // Validate inputs
    if (!companyName || !contactNumber || !quantity || quantity % 5 !== 0) {
        document.getElementById('quotation-message').innerText = "Please fill out all fields and ensure quantity is a multiple of 5.";
        return;
    }

    // Calculate costs
    const smartphonePrice = parseFloat(document.querySelector(`#smartphone-type option[value="${smartphoneType}"]`).dataset.price);
    const setupPrice = parseFloat(document.querySelector(`#setup-option option[value="${setupOption}"]`).dataset.price);

    if (isNaN(smartphonePrice) || isNaN(setupPrice)) {
        document.getElementById('quotation-message').innerText = "Invalid price data. Please check the options.";
        return;
    }

    const subtotal = (smartphonePrice * quantity) + (setupPrice * quantity);
    const vat = subtotal * 0.2; // 20% VAT
    const totalCost = subtotal + vat;

    document.getElementById('quotation-message').innerText = `Subtotal: £${subtotal.toFixed(2)}, VAT: £${vat.toFixed(2)}, Total: £${totalCost.toFixed(2)}`;

    // Display the details
    document.getElementById('quotation-summary').innerText = `
        Company Name: ${companyName}
        Contact Number: ${contactNumber}
        Quantity: ${quantity}
        Smartphone Type: ${smartphoneType}
        Setup Option: ${setupOption}
        Subtotal: £${subtotal.toFixed(2)}
        VAT: £${vat.toFixed(2)}
    `;
    
    document.getElementById('total-cost').innerText = `Total Cost: £${totalCost.toFixed(2)}`;
    document.getElementById('quotation-details').style.display = 'block';
    document.getElementById('quotation-message').innerText = "Quotation submitted successfully!";
}

function logout() {
    window.location.href = 'index.html'; // Redirect to home page
}

// Populate customer orders in admin panel
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.includes("admin-panel.html")) {
        const customerOrderList = document.getElementById('customer-orders');
        customerOrders.forEach(order => {
            const li = document.createElement('li');
            li.innerText = `${order.companyName} - ${order.quantity} ${order.smartphoneType} (${order.setupOption})`;
            customerOrderList.appendChild(li);
        });
    }
});
