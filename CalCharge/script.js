function calculateChargeTime() {
    // Get input values
    const batteryCapacity = parseFloat(document.getElementById('battery-capacity').value);
    const chargingPower = parseFloat(document.getElementById('charging-power').value);
    const currentPercent = parseFloat(document.getElementById('current-percent').value);
    const targetPercent = parseFloat(document.getElementById('target-percent').value);
    
    // Validate inputs
    if (isNaN(batteryCapacity) || isNaN(chargingPower) || isNaN(currentPercent) || isNaN(targetPercent) ||
        batteryCapacity <= 0 || chargingPower <= 0 || currentPercent < 0 || currentPercent > 100 ||
        targetPercent < 0 || targetPercent > 100 || targetPercent <= currentPercent) {
        alert('กรุณากรอกค่าที่ถูกต้อง');
        return;
    }

    // Calculate required battery capacity to charge
    const currentCapacity = (currentPercent / 100) * batteryCapacity;
    const targetCapacity = (targetPercent / 100) * batteryCapacity;
    const requiredCapacity = targetCapacity - currentCapacity;

    // Calculate charging time in hours
    const chargeTime = requiredCapacity / chargingPower; // hours

    // Display the results
    const resultElement = document.getElementById('time-result');
    resultElement.textContent = `เวลาในการชาร์จจาก ${currentPercent}% ถึง ${targetPercent}% คือ ${chargeTime.toFixed(2)} ชั่วโมง`;
}
