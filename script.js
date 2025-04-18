function generateQR() {
    const qrContainer = document.getElementById("qrcode");
    const input = document.getElementById("qrInput").value;
    const container = document.querySelector(".container");

    const containerWidth = container.clientWidth;
    const qrSize = containerWidth * 0.6;


    qrContainer.innerHTML = "";

    if (input.trim() === "") {
        alert("Wpisz tekst lub link, aby wygenerować kod QR!");
        return;
    }

    new QRCode(qrContainer, {
        text: input,
        width: qrSize,
        height: qrSize
    });
    
    qrContainer.style.marginLeft = (containerWidth - qrSize) / 2 + "px";
    qrContainer.style.marginRight = (containerWidth - qrSize) / 2 + "px";
}

function downloadQR() {
    const qrContainer = document.getElementById("qrcode");
    const canvas = qrContainer.querySelector("canvas");
    const fileNameInput = document.getElementById("fileNameInput").value.trim();

    if (!canvas) {
        alert("Najpierw wygeneruj kod QR!");
        return;
    }

    if (fileNameInput === "") {
        alert("Wpisz nazwę pliku!");
        return;
    }

    let fileName = fileNameInput.split(".")[0];
    let extension = fileName.split(".").pop(); 

    if (extension === fileName) {
        extension = 'png';
    }

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = fileName;
    link.click();
}