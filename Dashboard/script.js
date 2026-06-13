const socket = io();

socket.on("sensorData", function(data) {

    console.log("ESP32:", data);

    const values = data.split(",");

    document.getElementById("temp").innerHTML =
        values[0] + "°C";

    document.getElementById("water").innerHTML =
        values[1] + "%";

    document.getElementById("vibration").innerHTML =
        values[2] == 0 ? "LOW" : "HIGH";

    let loadg = (Math.abs(values[3]) / 30000);

document.getElementById("load").innerHTML =
    loadKg.toFixed(0) + " g";

    document.getElementById("risk").innerHTML =
        values[5] + "%";

    document.getElementById("statusText").innerHTML =
        values[6];

    if (values[6].trim() === "SAFE") {
        document.getElementById("riskBanner").innerHTML =
            "NO RISK DETECTED";
    } else {
        document.getElementById("riskBanner").innerHTML =
            "⚠ RISK DETECTED";
    }

});

function updateClock() {
    let now = new Date();
    document.getElementById("clock").innerHTML =
        now.toLocaleString();
}

setInterval(updateClock, 1000);
updateClock();


/* setInterval(() => {

    // Random Sensor Values

    let temp = Math.floor(Math.random() * 8) + 28;
    let water = Math.floor(Math.random() * 30) + 30;
    let load = Math.floor(Math.random() * 200) + 100;
    let risk = Math.floor(Math.random() * 100);

let vibrationText =
document.getElementById("vibration");

    // Update Dashboard Values

    document.getElementById("temp").innerHTML = temp + "°C";
    document.getElementById("water").innerHTML = water + "%";
    document.getElementById("load").innerHTML = load + "kg";
    document.getElementById("risk").innerHTML = risk + "%";



    // Get Elements

    let status = document.getElementById("statusText");
    let alertBox = document.getElementById("alertMessage");
    let riskBanner = document.getElementById("riskBanner");
let riskBannerBox =
document.getElementById("riskBannerBox");

    let rec1 = document.getElementById("rec1");
    let rec2 = document.getElementById("rec2");
    let rec3 = document.getElementById("rec3");
    let rec4 = document.getElementById("rec4");



    // SAFE

    if (risk < 30) {

        status.innerHTML = "SAFE";
        status.style.color = "#00ff88";

        alertBox.innerHTML = "✅ No Active Alerts";
        alertBox.style.color = "#00ff88";

        riskBanner.innerHTML = "✅ NO RISK DETECTED";
        riskBanner.style.color = "black";

        rec1.innerHTML = "✅ Structure Stable";
        rec2.innerHTML = "✅ Water Level Safe";
        rec3.innerHTML = "✅ Load Within Limits";
        rec4.innerHTML = "✅ No Immediate Risk";

        riskBanner.innerHTML = "✅ NO RISK DETECTED";

riskBannerBox.style.background =
"#00ff88";

riskBanner.style.color = "black";


vibrationText.innerHTML = "LOW";
vibrationText.style.color = "#00ff88";

    }

    // WARNING

    else if (risk < 70) {

        status.innerHTML = "WARNING";
        status.style.color = "yellow";

        alertBox.innerHTML = "⚠ Warning: Monitor Bridge Conditions";
        alertBox.style.color = "yellow";

        riskBanner.innerHTML = "⚠ WARNING CONDITION";
        riskBanner.style.color = "black";

        rec1.innerHTML = "⚠ Monitor Structure Closely";
        rec2.innerHTML = "⚠ Water Level Increasing";
        rec3.innerHTML = "⚠ Reduce Heavy Vehicle Load";
        rec4.innerHTML = "⚠ Inspection Recommended";

        riskBanner.innerHTML =
"⚠ WARNING CONDITION";

riskBannerBox.style.background =
"yellow";

riskBanner.style.color = "black";


vibrationText.innerHTML = "MEDIUM";
vibrationText.style.color = "yellow";

    }

    // DANGER

    else {

        status.innerHTML = "DANGER";
        status.style.color = "red";

        alertBox.innerHTML = "🚨 DANGER: Immediate Inspection Required";
        alertBox.style.color = "red";

        riskBanner.innerHTML = "🚨 HIGH RISK DETECTED";
        riskBanner.style.color = "white";

        rec1.innerHTML = "🚨 Structural Risk Detected";
        rec2.innerHTML = "🚨 Water Level Critical";
        rec3.innerHTML = "🚨 Restrict Bridge Traffic";
        rec4.innerHTML = "🚨 Immediate Action Required";

        riskBanner.innerHTML =
"🚨 HIGH RISK DETECTED";

riskBannerBox.style.background =
"red";

riskBanner.style.color = "white";


vibrationText.innerHTML = "HIGH";
vibrationText.style.color = "red";

    }

}, 3000); */