document.addEventListener('DOMContentLoaded', () => {
    const botao = document.querySelector('.botao');

    const campos = document.querySelectorAll('.campo');

    botao.addEventListener('click', () => {

        campos.forEach(campo => {

            const input = campo.querySelector('input');

            const mensagem = campo.querySelector('span');

            if (input.value.trim() === '') {
                input.classList.remove('input');
                input.classList.add('campo-vazio');
                mensagem.classList.remove('esconder');

            } else {
                input.classList.remove('input');
                input.classList.remove('campo-vazio');
                input.classList.add('campo-preenchido');
                mensagem.classList.add('esconder');
            }
        });
    });
});