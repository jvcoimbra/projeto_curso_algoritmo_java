/*
   passou := falso
   escreval("Digite o nome do aluno: ")
   leia(nome)
   escreval("Digite a primeira nota do aluno: ")
   leia(nota01)
   escreval("Digite a segunda nota do aluno: ")
   leia(nota02)
   media := (nota01 + nota02) / 2

   se media >= 5 entao
      passou := verdadeiro
   fimse

   se !passou entao
   // ! significa "diferente de"
      escreval("Aluno ", nome, " Reprovado com média: ", media)
   senao
        escreval("Aluno ", nome," Aprovado com média: ", media)
   fimse

   se passou && media >= 5 entao
   // os dois tem que ser verdadeiro
      escreval("Aluno ", nome, " Aprovado com média: ", media)
   senao
        escreval("Aluno ", nome," Reprovado com média: ", media)
   fimse

   se passou || media >= 5 entao
   // apenas um tem que ser verdadeiro
      escreval("Aluno ", nome, " Aprovado com média: ", media)
   senao
        escreval("Aluno ", nome," Reprovado com média: ", media)
   fimse

   se (passou) && (media >= 5 || media <= 7) entao
   // "passou" é obrigatório mas as medias pode ser uma ou outra
      escreval("Aluno ", nome, " Aprovado com média: ", media)
   senao
        escreval("Aluno ", nome," Reprovado com média: ", media)
   fimse
*/

var nome, nota01, nota02, passou;

passou = false

nome = prompt("Digite o nome do aluno:")
nota01 = prompt("Digite a preimeira nota do aluno:")
nota02 = prompt("Digite a segunda nota do aluno: ")

media = (parseInt(nota01) + parseInt(nota02)) / 2;

if (media >= 5)
    passou = true;

if (passou)
    alert("Aluno " + nome + " Aprovado com média: " + media);
else
    alert("Aluno " + nome + " Reprovado com média: " + media);

if (!passou)
// ! significa "diferente de"
    alert("Aluno " + nome + " Reprovado com média: " + media);
else
    alert("Aluno " + nome + " Aprovado com média: " + media);

if (passou && media >= 5)
// os dois tem que ser verdadeiro
    alert("Aluno " + nome + " Aprovado com média: " + media);
else
    alert("Aluno " + nome + " Reprovado com média: " + media);

if (passou || media >= 5)
    // apenas um  tem que ser verdadeiro
    alert("Aluno " + nome + " Aprovado com média: " + media);
else
    alert("Aluno " + nome + " Reprovado com média: " + media);

if (passou && (media >= 5 || media <= 7))
// "passou" é obrigatório mas as medias pode ser uma ou outra
    alert("Aluno " + nome + " Aprovado com média: " + media);
else
    alert("Aluno " + nome + " Reprovado com média: " + media);