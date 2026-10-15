// let encontrar = ("encontrar");
// console.log (encontrar);


let users = ["Pedro","Ana","joana","Diego","Davi Messias","Cristiano"];

let searchUser = prompt ("Digite o nome do usuario que deseja buscar");

// Lembrando que, meu usuário adm não pode mandar em branco a busca.Chamos isso de tratativa de erros.

if(searchUser === ""){
    console.log("Não pode enviar em branco");

    }
    else{
        // Retornar  o usuário que for encontrado 
        let user = users.find(user => 
            user.toLowerCase().includes(searchUser.toLowerCase().trim())
        )
        // Devemos tratar também caso a busca não retorne nenhum resultado 


        if(user === undefined){
            // usuário não encontrado
            users.push(searchUser)
            console.log(users)
        }
        else{
            console.log("Usuario encontrado: ".concat(user));
            //buscar indice de usuário
            let index = user.indexOf(user);
            console.log(index)
            //excluir o elemento
            // alterar o elemento
            users[index]= "novo valor";
            console.log(users)

            //users.splice(3,1)
            //console.log(users)

            //users.forEach(element =>{
                //read
           // });
        }

    }