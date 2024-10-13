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

    document.getElementById('orders').style.display = 'block
