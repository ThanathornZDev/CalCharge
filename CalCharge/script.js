// ข้อมูลความจุแบตเตอรี่ของแต่ละรุ่น
const carModels = {
    'BYD Dophin Standard': 44.90,
    'BYD Dophin Extended': 60.48,
    'BYD Atto 3 Dynamic': 49.92,
    'BYD Atto 3 Extended': 60.48,
    'BYD Seal Dynamic': 61.44,
    'BYD Seal Premium': 82.56,
    'BYD Seal Performance': 82.56
};

// ฟังก์ชันสำหรับอัปเดตความจุแบตเตอรี่ตามรุ่นที่เลือก
function updateBatteryCapacity() {
    const model = document.getElementById('car-model').value;
    const capacityInput = document.getElementById('battery-capacity');

    if (model && carModels[model]) {
        capacityInput.value = carModels[model];
        capacityInput.readOnly = true; 
    } else {
        capacityInput.value = '';
        capacityInput.readOnly = false; 
    }
}

function calculateChargeTime() {
    const batteryCapacity = parseFloat(document.getElementById('battery-capacity').value);
    const chargingPower = parseFloat(document.getElementById('charging-power').value);
    const currentPercent = parseFloat(document.getElementById('current-percent').value);
    const targetPercent = parseFloat(document.getElementById('target-percent').value);

    if (isNaN(batteryCapacity) || isNaN(chargingPower) || isNaN(currentPercent) || isNaN(targetPercent) ||
        batteryCapacity <= 0 || chargingPower <= 0 || currentPercent < 0 || currentPercent > 100 ||
        targetPercent < 0 || targetPercent > 100 || targetPercent <= currentPercent) {
        alert('กรุณากรอกค่าที่ถูกต้อง');
        return;
    }

    const currentCapacity = (currentPercent / 100) * batteryCapacity;
    const targetCapacity = (targetPercent / 100) * batteryCapacity;
    const requiredCapacity = targetCapacity - currentCapacity;

    const chargeTimeInHours = requiredCapacity / chargingPower;

    const hours = Math.floor(chargeTimeInHours);
    const minutes = Math.round((chargeTimeInHours - hours) * 60);

    const resultElement = document.getElementById('time-result');
    resultElement.textContent = `เวลาในการชาร์จจาก ${currentPercent}% ถึง ${targetPercent}% คือ ${hours} ชั่วโมง ${minutes} นาที`;
}

