document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('chat-form');
    const chatBox = document.getElementById('chat-box');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const userInput = document.getElementById('user-input').value.trim();

        if (userInput === '') {
            return;
        }

        // Menampilkan pesan pengguna di chat box
        displayMessage('user', userInput);

        // Simulasi respons dari chatbot (sistem pakar)
        setTimeout(function () {
            const botResponse = generateResponse(userInput);
            displayMessage('bot', botResponse);
        }, 500); // Simulasi penundaan respons chatbot

        // Mengosongkan input setelah pesan dikirim
        document.getElementById('user-input').value = '';
    });

    function displayMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
        messageElement.textContent = message;

        chatBox.appendChild(messageElement);

        // Auto-scroll ke bawah setelah menambahkan pesan baru
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function generateResponse(userInput) {
        // Implementasikan aturan sistem pakar di sini
        // Contoh sederhana berdasarkan gejala yang dikenali
        if (userInput.toLowerCase().includes('sakit kepala')) {
            return "Anda mungkin mengalami sakit kepala. Sebaiknya istirahat yang cukup dan minum air putih. Jika berlanjut, konsultasikan dengan dokter.";
        } else if (userInput.toLowerCase().includes('batuk')) {
            return "Anda mungkin sedang mengalami flu. Pastikan untuk minum obat yang diresepkan dokter dan istirahat yang cukup.";
        } else if (userInput.toLowerCase().includes('demam')) {
            return "Suhu tubuh tinggi dapat menandakan infeksi. Segera konsultasikan dengan dokter untuk penanganan lebih lanjut.";
        } else if (userInput.toLowerCase().includes('diare')) {
            return "Diare bisa disebabkan oleh infeksi atau makanan yang tidak cocok. Minum banyak cairan dan hindari makanan berlemak atau pedas.";
        } else if (userInput.toLowerCase().includes('nyeri dada')) {
            return "Nyeri dada bisa menjadi tanda serius seperti serangan jantung. Segera temui dokter atau pergi ke unit gawat darurat.";
        } else if (userInput.toLowerCase().includes('sesak napas')) {
            return "Sesak napas bisa menjadi gejala masalah paru-paru atau jantung. Segera temui dokter untuk evaluasi medis.";
        } else {
            return "Maaf, saya tidak dapat memberikan diagnosis dari gejala yang Anda berikan. Pastikan untuk berkonsultasi dengan dokter jika gejala Anda memburuk atau tidak membaik.";
        }
    }
});
