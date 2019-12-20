// – Calcule a média de diversas notas digitadas pelo usuário

var nota1 = prompt('Insira a sua primeira nota:')
var nota2 = prompt('Insira a sua segunda nota:')
var nota3 = prompt('Insira a sua terceira nota:')
var nota4 = prompt('Insira a sua quarta nota:')

var media;
function Media() {
    return (
        media = (nota1 + nota2 + nota3 + nota4) / 4
    )
}

alert(Media())