document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const pieces = document.getElementById('pieces').value;
    const clothingType = document.querySelector('input[name="clothing-type"]:checked').value;
    const whatsapp = document.getElementById('whatsapp').value;

    // Criação da mensagem formatada
    const message = `Nome: ${name}\nIdade: ${age}\nEndereço: ${address}\nWhatsApp: ${whatsapp}\nNúmero de Peças: ${pieces}\nCategoria: ${clothingType}`;
    
    // Codificar a mensagem para a URL
    const whatsappURL = `https://wa.me/5511970233251?text=${encodeURIComponent(message)}`;

    // Abre em nova aba
    window.open(whatsappURL, '_blank');
});
