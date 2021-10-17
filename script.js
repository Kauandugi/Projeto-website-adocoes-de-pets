var vetor = [];
var vetor2 = [];
var vetor3 = [];
var vetor4 = [];

class Banco{
    constructor()
{
    this.nome;
    this.pet;
    this.data;
    this.nome_contato;
    this.mensagem;
    this.email;

}armazenar(nome, email, mensagem, banco){
    this.nome_contato = nome;
    this.mensagem = mensagem;
    this.email = email;
}salvar(banco,nome){
    if(vetor.length == 0)
		{
			vetor.push(banco);
            localStorage.setItem("Contato", JSON.stringify(vetor));
            alert(`Obrigado ${nome} por sua mensagem!`)
		}
		else
		{
			vetor = JSON.parse(localStorage.getItem("Contato"));
			vetor.push(banco);
            localStorage.setItem("Contato", JSON.stringify(vetor));
            alert(`Obrigado ${nome} por sua mensagem!`)
		}	

}
}
class Cadastro{
    constructor(){
        this.nome;
        this.email;
        this.senha;
        this.nome_pet;
        this.img;
        this.local;
    }armazenar2(nome, email, senha){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }armazenar3(email, senha){
        this.email = email;
        this.senha = senha;
    }
    salvarl(x,nome){      
        if(vetor2.length == 0)
		{
            vetor2.push(x);
            localStorage.setItem("Cadastro", JSON.stringify(vetor2));
            alert(`Obrigado ${nome} por se cadastrar em nosso sistema!.`)
            
		}
		else
		{
			vetor2 = JSON.parse(localStorage.getItem("Cadastro"));
			vetor2.push(x);
            localStorage.setItem("Cadastro", JSON.stringify(vetor2));
            alert("Obrigado ${nome} por se cadastrar em nosso sistema!.`")
        }	

    }logar(email, senha){
        vetor4 = JSON.parse(localStorage.getItem("Cadastro"));
        for(let i=0; i < vetor4.length; i+=1){
            if(vetor4[i].email == email){
                if(vetor4[i].senha == senha){
                    alert("Logado com sucesso");
                }
               
            }else{
                alert("Suas informações não conferem!")

            }
        }

    }armazenar4(nome_pet, img, local){
        alert(local)
        alert(img)
        alert(nome_pet)
        this.nome_pet = nome_pet;
        this.img = img;
        this.local = local;
    }salvarlll(x){
        if(vetor4 == 0)
		{
            vetor4.push(x);
            localStorage.setItem("Cadastro_PET", JSON.stringify(vetor4));
            alert("Obrigado por nos ajudar!")
            
		}
		else
		{
			vetor4 = JSON.parse(localStorage.getItem("Cadastro_PET"));
			vetor4.push(x);
            localStorage.setItem("Cadastro_PET", JSON.stringify(vetor4));
            alert("Obrigado por nos ajudar!")
        }	
        
    }
}

function modalvai()
{
    var a = document.querySelector('.modalzao');
    a.style.top = '0%'
    var b = document.querySelector('.modal');
    b.style.top = '0%'
}
function registro()
{
    var a = document.querySelector('.modal .area3')
    a.style.display = 'block'
    var b = document.querySelector('.modal .area4')
    b.style.display = 'none'
}
function login(){
    var a = document.querySelector('.modal .area3')
    a.style.display = 'none'
    var b = document.querySelector('.modal .area4')
    b.style.display = 'block'

}function fechamodal(){
    var a = document.querySelector('.modalzao');
    a.style.top = '-100%'
    var b = document.querySelector('.modal');
    b.style.top = '-100%'
}function vai(nome, email, senha){
    var aux = document.getElementById('nomee').value
    var x = new Cadastro();
    x.armazenar2(nome, email, senha);
    var z = new Cadastro();
    z.armazenar2()
    z.salvarl(x,aux)
}
function vai2(email, senha){
    var x = new Cadastro();
    // x.armazenar3(email, senha);
    // var z = new Cadastro();
    // z.armazenar3()
    // z.salvarll(x)
    x.logar(email, senha);
    
}
function fechamodal2() { 
    var b = document.querySelector('.modal2').style.top = '-100%';    
}function pagec() {
    var a = document.querySelector('.modal2').style.top = '0%';    
}function salvar3(nome_pet, img, local){
    var x = new Cadastro();
    x.armazenar4(nome_pet, img, local);
    var z = new Cadastro();
    z.armazenar4(nome_pet, img, local)
    z.salvarlll(x)
}function adote(){
    var a = document.querySelector('.tudao').style.display = 'none';
    var b = document.querySelector('.tudao2').style.display = 'block';
}function home(){
    var a = document.querySelector('.tudao').style.display = 'block';
    var b = document.querySelector('.tudao2').style.display = 'none';
}




function salvar(nome, email, mensagem){
    var aux = document.getElementById('nome').value
    var banco = new Banco();
	banco.armazenar(nome, email, mensagem);
	var banquinho = new Banco();
    banquinho.armazenar(banco);
    banquinho.salvar(banco,nome)
}