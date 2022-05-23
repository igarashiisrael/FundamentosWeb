var nome = window.document.querySelector("#nome")
var nomeOk = false

function validarNome(){
  let txtNome = document.querySelector("#txtNome")
  if(nome.Value.lenght < 2 ){
    txtNome.innerHTML = "nome invalido"
    txtNome.style.color = 'red'
    nomeOk = false
  }else{
    txtNome.innerHTML = "nome valido"
    txtNome.style.color = 'green'
    nomeOk = true
  }
}

function enviar(){
  if(nomeOk == true){
    alert("Mensagem enviada!")
  }

}