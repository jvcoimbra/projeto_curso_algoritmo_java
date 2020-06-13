/*escreval("Digite o nome do aluno: ")
leia(nome)
escreval("Digite a primeira nota do aluno: ")
leia(nota01)
escreval("Digite a segunda nota do aluno: ")
leia(nota02)
media := (nota01 + nota02) / 2

se media >= 5 entao
   escreval("Aluno ", nome, " Aprovado!", media)
senao
     escreval("Aluno ", nome," Reprovado!", media)
fimse
*/

var nome, nota01, nota02;
nome = prompt("Digite o nome do aluno:");
nota01 = prompt("Digite a preimeira nota do aluno:");
nota02 = prompt("Digite a segunda nota do aluno: ");

media = (parseInt(nota01) + parseInt(nota02)) / 2;

if (media >= 5)
    alert("Aluno " + nome + " Aprovado! " + media);
else
    alert("Aluno " + nome + " Reprovado! " + media);
