function clique() {
    let mes = prompt('Digite o mês que nasceu:');
    let saida = document.getElementById('saida');
    let signo;

    switch (mes.toUpperCase()) {
        case 'JANEIRO':
            signo = 'Aquário';
            break
        case 'FEVEREIRO':
            signo = 'Peixes';
            break

        case 'MARÇO':
            signo = 'Áries';
            break

        case 'ABRIL':
            signo = 'Touro';
            break

        case 'MAIO':
            signo = 'Gêmeos';
            break

        case 'JUNHO':
            signo = 'Câncer';
            break

        case 'JULHO':
            signo = 'Leão';
            break

        case 'AGOSTO':
            signo = 'Virgem';
            break

        case 'SETEMBRO':
            signo = 'Libra';
            break

        case 'OUTUBRO':
            signo = 'Escorpíão';
            break

        case 'NOVEMBRO':
            signo = 'Sagitário';
            break

        case 'DEZEMBRO':
            signo = 'Capricórnio';
            break

        default:
            signo = 'Indefinido';
            break

    }

    return saida.innerHTML = `<p> Aqueles que nasceram em <strong>${mes.toLocaleUpperCase()}</strong>, são do sígno de <strong>${signo}</strong>.</p>`
}
