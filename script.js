function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "Assets/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "Assets/close_white_36dp.svg";
    }
}

function enviarWhatsApp() {
    var name = document.getElementById('name').value;
    var contact = document.getElementById('number').value;
    var select = document.getElementById('select').value;
    var description = document.getElementById('text').value;

    var numeroWhatsApp = '5521999999999';
    
    var mensagemWhatsApp = `Gostaria de fazer uma tatuagem. Olá, meu nome é ${name}. Meu contato: ${contact}. Quero tatuar na(o): ${select}. Descrição: ${description}`;

    var mensagemCodificada = encodeURIComponent(mensagemWhatsApp);

    var linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensagemCodificada}`;

    window.location.href = linkWhatsApp;
}