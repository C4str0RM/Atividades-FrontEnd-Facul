let nome = "Raycka"
let idade = 20
console.log(nome, idade)

let mensagem = `Meu  nome é ${nome} e minha idade é ${idade}`

if (idade >= 18) {
  console.log("Vc é maior de idade!")
} else {
  console.log("Vc é menor de idade!")
}

switch(nome) {
  case "Raycka":
    console.log("Seu nome é Raycka")
    break
    
  case "João":
    console.log("Seu nome é João")
    break
    
  default:
    console.log("Seu nome não tá na lista!!")
}
