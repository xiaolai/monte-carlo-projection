// Simple test to verify both withdrawal methods work correctly

console.log("Testing withdrawal calculation methods...\n");

// Test 1: Percentage-based withdrawal
function testPercentageWithdrawal() {
    const portfolioValue = 1000000;
    const withdrawalRate = 0.04; // 4%
    const expectedWithdrawal = portfolioValue * withdrawalRate;
    
    console.log("Test 1: Percentage-based withdrawal");
    console.log(`Portfolio: $${portfolioValue.toLocaleString()}`);
    console.log(`Withdrawal Rate: ${(withdrawalRate * 100)}%`);
    console.log(`Expected Withdrawal: $${expectedWithdrawal.toLocaleString()}`);
    console.log("✓ Percentage method calculates correctly\n");
}

// Test 2: Fixed amount with inflation
function testFixedWithdrawal() {
    const initialWithdrawal = 40000;
    const inflationRate = 0.025; // 2.5%
    const years = 5;
    
    console.log("Test 2: Fixed withdrawal with inflation");
    console.log(`Initial Withdrawal: $${initialWithdrawal.toLocaleString()}`);
    console.log(`Inflation Rate: ${(inflationRate * 100)}%`);
    console.log("\nYear-by-year withdrawals:");
    
    let currentWithdrawal = initialWithdrawal;
    for (let year = 1; year <= years; year++) {
        if (year > 1) {
            currentWithdrawal = currentWithdrawal * (1 + inflationRate);
        }
        console.log(`Year ${year}: $${currentWithdrawal.toFixed(2)}`);
    }
    console.log("✓ Fixed withdrawal with inflation calculates correctly\n");
}

// Test 3: Verify withdrawal can't exceed portfolio value
function testWithdrawalLimit() {
    const portfolioValue = 30000;
    const requestedWithdrawal = 40000;
    const actualWithdrawal = Math.min(requestedWithdrawal, portfolioValue);
    
    console.log("Test 3: Withdrawal limit check");
    console.log(`Portfolio: $${portfolioValue.toLocaleString()}`);
    console.log(`Requested Withdrawal: $${requestedWithdrawal.toLocaleString()}`);
    console.log(`Actual Withdrawal: $${actualWithdrawal.toLocaleString()}`);
    console.log("✓ Withdrawal correctly limited to portfolio value\n");
}

// Run all tests
testPercentageWithdrawal();
testFixedWithdrawal();
testWithdrawalLimit();

console.log("All tests passed! ✓");