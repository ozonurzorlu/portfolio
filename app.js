// Ekranda sırasıyla yazılacak metinler
const textArray = [
    "> Merhaba, ben Onur Zorlu.", 
    "> Python, JavaScript ve Dart Geliştiricisi.", 
    "> Mobil ve Web Teknolojileri."
];

let textIndex = 0; // Hangi cümlenin yazılacağı
let charIndex = 0; // Hangi harfin yazılacağı
const typewriterElement = document.getElementById("typewriter-text");

function type() {
    // Eğer cümlenin tamamı yazılmadıysa harf harf ekle
    if (charIndex < textArray[textIndex].length) {
        typewriterElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 80); // Yazma hızı (80 milisaniye)
    } else {
        // Cümle bittiyse silmeye başlamadan önce bekle
        setTimeout(erase, 2000); 
    }
}

function erase() {
    // Eğer silinecek harf varsa sondan bir harf eksilt
    if (charIndex > 0) {
        typewriterElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 40); // Silme hızı (yazmadan daha hızlı silinir)
    } else {
        // Kelime tamamen silindiyse bir sonraki cümleye geç
        textIndex++;
        if (textIndex >= textArray.length) {
            textIndex = 0; // Son cümleyse başa dön
        }
        setTimeout(type, 500); // Yeni cümleye başlamadan önce bekle
    }
}

// Sayfa yüklendiğinde efekti başlat
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1000); // Sayfa açıldıktan 1 saniye sonra daktilo başlar
});