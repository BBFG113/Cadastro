document.getElementById('Cadastro').style.display = 'none';

function trocaParaCadastro(){
    document.getElementById('Cadastro').style.display = 'block';
    document.getElementById('Login').style.display = 'none';
}
function trocaParaLogin(){
    document.getElementById('Login').style.display = 'block';
    document.getElementById('Cadastro').style.display = 'none';
}

var a;
var b;
var c;
var d;


var e;
var f;
var g;
var h;



function pegarLogin(){
    
    a = document.getElementById('nome').value
    b = document.getElementById('sobrenome').value
    c = document.getElementById('telefone').value
    d = document.getElementById('senha').value
    e = document.getElementById('nomeLogin').value
    f = document.getElementById('sobrenomeLogin').value
    g = document.getElementById('telefoneLogin').value
    h = document.getElementById('senhaLogin').value
}

function verificar(){
    if(a == e){
        if(b==f){
            if(c==g){
                if(d==h){
                    window.location.href = 'homePassagens.html'
                } else{
                    window.alert("A sua senha não está no sistema")
                }
            } else{
                window.alert("O seu telefone não está no sistema")
            } 
        } else{
            window.alert("O seu sobrenome não está no sistema")
        }
    } else{
        window.alert("O seu nome não está no sistema")
    }
}















// var usuario;
// document.getElementById('botaoCadastrar').onclick = function cadastro(){

//     usuario ={
//     nome: [document.getElementById('nome').value],
//     sobrenome: [document.getElementById('sobrenome').value],
//     telefone: [document.getElementById('telefone').value],
//     senha: [document.getElementById('senha').value]
//     }
//     console.log(usuario.nome)
// }

// var input;
// document.getElementById('botaoEntrar').onclick = function entrar(){

//     input ={
//     nome: [document.getElementById('nomeLogin').value],
//     sobrenome: [document.getElementById('sobrenomeLogin').value],
//     telefone: [document.getElementById('telefoneLogin').value],
//     senha: [document.getElementById('senhaLogin').value]
//     }
//     console.log(input.nome)

// }





    //  else if(document.getElementById('nomeLogin').value == !usuario.nome || document.getElementById('nomeLogin').value == ''
    //             // document.getElementById('sobrenomeLogin').value == !usuario.sobrenome || document.getElementById('sobrenomeLogin').value == '' &&
    //             // document.getElementById('telefoneLogin').value == !usuario.telefone || document.getElementById('telefoneLogin').value == '' &&
    //             // document.getElementById('senhaLogin').value == !usuario.senha || document.getElementById('senhaLogin').value == ''
    //     ){
    //     window.alert('Dados não compativeis')
    //     }

