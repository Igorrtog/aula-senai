let pergunta_inicio
let pergunta_cadastro

do {
    pergunta_inicio = Int(prompt(`1- Iniciar cadastro\n2- Entrar no sistema\n3- Sair do sistema`))

        if (pergunta_inicio == 1) { /* Cadastrando o usuário */
            alert('Iniciando Cadastro...')
            nome_usuario = prompt('Digite seu nome de usuário: ')
            senha_usuario = prompt('Crie uma senha: ')
            email_usuario = prompt('Digite seu e-mail: ')
            alert('Cadastro realizado com sucesso!')

        } else if (pergunta_inicio == 2) { /* Login do usuário */
            alert('Entrando no sistema...')
            nome_login = prompt('Digite seu nome de usuário: ')
            senha_login = prompt('Digite sua senha: ')

            if (nome_login == nome_usuario && senha_login == senha_usuario) { /* Verificando credenciais */
                alert('Login realizado com sucesso!')

            } else {
                alert('Nome de usuário ou senha incorretos!')

            }

            
        }
} while (pergunta_inicio != 3)