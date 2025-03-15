<p align="center"><a href="#"><img src="../back_end/src/assets/logo_app.webp" width="400"></a></p>

<p align="center">
<a href="https://www.npmjs.com/package/node"><img src="https://img.shields.io/npm/v/node" alt="Latest Stable Version"></a>
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/npm/l/node" alt="License"></a>
</p>

## Sobre o Projeto

Este é o backend da aplicação para envio de emails em massa, desenvolvido em Node.js v20.17.0. A aplicação permite o cadastro de usuários e o envio de emails personalizados para cada um deles.

## Recursos Principais

- Estrutura organizada utilizando o padrão **Controller-Service-Repository (CSR)**.
- Utilização do **Nodemailer** para envio eficiente de emails.
- Implementação de **Winston** para logs estruturados.
- Utilização do **UUID** para gerar identificadores únicos.
- Integração com **PDF.js** para manipulação de PDFs.

## Dependências

| Dependência                                        | Versão  |
| -------------------------------------------------- | ------- |
| [Express](https://expressjs.com/)                  | ^4.21.1 |
| [Cors](https://www.npmjs.com/package/cors)         | ^2.8.5  |
| [Dotenv](https://www.npmjs.com/package/dotenv)     | ^16.4.5 |
| [Nodemailer](https://nodemailer.com/)              | ^6.9.15 |
| [Nodemon](https://www.npmjs.com/package/nodemon)   | ^3.1.7  |
| [UUID](https://www.npmjs.com/package/uuid)         | ^10.0.0 |
| [Winston](https://www.npmjs.com/package/winston)   | ^3.15.0 |
| [PDF.js](https://www.npmjs.com/package/pdfjs-dist) | \*      |

## Estrutura do Projeto

```
db
controller
service
repository
routes
util
.env_exemplo.txt
.gitignore
app.js
package.json
package-lock.json
```

## Configuração de Ambiente

1. Copie o arquivo `.env_exemplo.txt` e renomeie para `.env`.
2. Preencha as seguintes variáveis de ambiente com suas informações:

```
PORT_SERVICE=
NAME=
USER=
PASS=
HOST=
PORT_EMAIL=
SECURE=
```

## Endpoints

### Endpoints de Usuários

- **POST** `/users` - Criar um usuário
- **PUT** `/users` - Atualizar um usuário
- **DELETE** `/users/:id` - Deletar um usuário por ID
- **GET** `/users` - Listar todos os usuários
- **GET** `/users/:email` - Buscar um usuário por email
- **PATCH** `/users` - Atualizar informações específicas

### Endpoint para Envio de Email

- **POST** `/email` - Enviar um email

### Exemplo de Rota para Envio de Email

```javascript
import { Router } from 'express'
import EmailController from '../controller/email_controller.js'

const routes = Router()

routes.post('/', EmailController.funcSendEmail)

export default routes
```

## Como Executar o Projeto

1. Instale as dependências com o comando:
   ```bash
   npm install
   ```
2. Execute o projeto com:
   ```bash
   npm start
   ```

## Autor

Desenvolvido por **IMoisasZ**
