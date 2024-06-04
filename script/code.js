document.querySelector('#calculateButton').addEventListener('click', function() {
    const amount = parseFloat(document.querySelector('#amount').value);
    const percentageString = '15%';

    if (!isNaN(amount)) {
        const interest = calculateInterest(amount, percentageString);
        document.querySelector('#result').textContent = `Interest: ${interest}`;
    } else {
        document.querySelector('#result').textContent = 'Please enter a valid amount.';
    }
});

function calculateInterest(amount, percentageString) {
    const percentage = parseFloat(percentageString.replace('%', ''));
    if (isNaN(percentage)) {
        return 'Invalid percentage';
    }
    return (amount * (percentage / 100)).toFixed(2);
}
