// Event listener for the quotation calculation
document.getElementById('calculate-btn').addEventListener('click', function() {
    // Collect input values
    const companyName = document.getElementById('company-name').value;
    const contactNumber = document.getElementById('contact-number').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const smartphoneType = document.getElementById('smartphone-type').value;
    const setupOption = document.getElementById('setup-option').value;

    // Validate quantity
    if (quantity < 5 || quantity > 100 || quantity % 5 !== 0) {
        alert("Quantity must be in multiples of 5 and between 5 and 100.");
        return;
    }

    // Define prices
    const smartphonePrices = {
        basic: 250,
        standard: 450,
        superior: 950
    };
    const setupPrices = {
        A: 30,
        B: 50
    };

    // Calculate costs
    const smartphonePrice = smartphonePrices[smartphoneType] * quantity;
    const setupCost = setupPrices[setupOption];
    const subtotal = smartphonePrice + setupCost;
    const vat = subtotal * 0.20;
    const total = subtotal + vat;

    // Display itemized quotation
    const quoteResult = `
        <h3>Itemized Quotation</h3>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Contact Number:</strong> ${contactNumber}</p>
        <p><strong>Quantity of Smartphones:</strong> ${quantity}</p>
        <p><strong>Smartphone Type:</strong> ${smartphoneType} (£${smartphonePrices[smartphoneType]})</p>
        <p><strong>Setup Option:</strong> Option ${setupOption} (£${setupCost})</p>
        <p><strong>Subtotal:</strong> £${subtotal.toFixed(2)}</p>
        <p><strong>VAT (20%):</strong> £${vat.toFixed(2)}</p>
        <p><strong>Total (including VAT):</strong> £${total.toFixed(2)}</p>
    `;

    document.getElementById('quote-result').innerHTML = quoteResult;
});

// Event listener for showing support number
document.getElementById('show-support-btn').addEventListener('click', function() {
    const supportInfo = document.getElementById('support-info');
    supportInfo.style.display = supportInfo.style.display === 'none' ? 'block' : 'none';
});