<p align="center"><a href="#"><img src="../back_end/src/assets/logo_app.webp" width="400"></a></p>

<p align="center">
<a href="https://www.npmjs.com/package/react"><img src="https://img.shields.io/npm/v/react" alt="Latest Stable Version"></a>
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/npm/l/react" alt="License"></a>
</p>

## Sobre o Projeto

Este é o frontend da aplicação para envio de emails em massa, desenvolvido em **React ^18.3.1**. Ele permite o cadastro de usuários e o envio de emails personalizados para cada um deles.

## Recursos Principais

- Estrutura organizada utilizando componentes reutilizáveis.
- Utilização do **Axios** para requisições HTTP.
- Implementação do **UUID** para gerar identificadores únicos.
- Gerenciamento eficiente de estados com hooks e contexto do React.

## Dependências

| Dependência                                                                            | Versão  |
| -------------------------------------------------------------------------------------- | ------- |
| [React](https://react.dev/)                                                            | ^18.3.1 |
| [Axios](https://axios-http.com/)                                                       | ^1.7.7  |
| [UUID](https://www.npmjs.com/package/uuid)                                             | ^10.0.0 |
| [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) | ^13.4.0 |
| [Jest DOM](https://github.com/testing-library/jest-dom)                                | ^5.17.0 |
| [React Scripts](https://www.npmjs.com/package/react-scripts)                           | 5.0.1   |
| [Web Vitals](https://web.dev/vitals/)                                                  | ^2.1.4  |

## Estrutura do Projeto

```
anexos
components
pages
utils
index.js
App.js
package.json
package-lock.json
.gitignore
```

## Imagem do Sistema

<p align="center">
  <img src="../front_end//src/anexos/sistema_img.png" width="600">
</p>

## Entrada dos Dados

Para que os emails sejam enviados, é necessário que o cadastro das pessoas esteja completo. O formato dos dados de entrada é o seguinte:

```json
{
	"name": "",
	"email": "",
	"anexo": ""
}
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
