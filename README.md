# Menu app

Aplicativo para gerenciar um cardápio online.

## Instalação / Execução

### Backend

Clone esse repositório e no diretório */backend* execute:

```shell
docker-compose up
```

Após o docker iniciar o banco de dados MySQL, execute:

```shell
npm install
npm run start:dev
```

Que vão disponibilizar a API na porta [:3000](http://localhost:3000/).

### Frontend

no diretório */frontend* execute:

```shell
npm install
npm run dev
```

E o app estará online na porta [:5173](http://localhost:5173/)

## Tecnologias e ferramentas utilizadas

Os commits nesse repositório seguem o padrão do [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/) e, para simular o desenvolvimento de uma aplicação de maior escala, cada feature foi criada em uma branch separada passando por um Pull Request e um Code Review para depois realizar o Merge.
As branchs não foram excluídas e os Pull Requests podem ser consultados [aqui](https://github.com/lucasthalless/menu-app/pulls?q=is%3Apr+is%3Aclosed).
Ainda assim, houveram commits simples que foram feitos diretamente na branch principal já que o projeto foi desenvolvido individualmente.

### Backend

O backend foi desenvolvido em *NestJS* com *Typescript*, utilizando o *TypeORM* para criação do banco de dados *MySQL* e sua comunicação com a API.
Para configuração do banco, além do TypeORM, foi utilizado o *Docker*.
A arquitetura da API foi baseada na opinião do próprio *NestJS*. Foi utilizada sua CLI para criação das entidades, DTOs, controllers, modules, services e providers.

A autenticação foi implementada contendo dois usuários:

```
1
username: joao
password: changeme

2
username: maria
password: guess
```

Os usuários não estão em um banco de dados e a autenticação foi implementada de maneira simples sem se preocupar com brechas de segurança. Utilize algum desses dois logins para autenticação no frontend.

### Frontend

O frontend foi desenvolvido em *ReactJS* com *Typescript* e estilizado com *Sass*.
Para criação do projeto de maneira otimizada, foi utilizado o *Vite* (visite essa [documentação](https://pt.vitejs.dev/guide/why.html) que explica porque usar Vite).

A biblioteca [Phosphor React](https://www.npmjs.com/package/phosphor-react) foi utilizada para inserção de ícones na aplicação.

Para integração do Frontend com o Backend foram utilizadas as bibliotecas [Axios](https://axios-http.com/) e [React Query](https://www.npmjs.com/package/react-query), que permitem escrever um código menor, mais fácil de entender e te dão um melhor controle sobre as requisições com opções como refetch, captura de erros, informação se a requisição ainda está carregando, entre outras.

A autenticação implementada no frontend funciona se comunicando com a api e, em caso de sucesso no login, guardando o token para utilziar no header das requisições em um cookie. O app verifica se o token existe em todas as outras páginas além da página de autenticação, caso o token não exista, o usuário e redirecionado para realizar o login.

Deixei abaixo a lógica do componente [CategoryList](https://github.com/lucasthalless/menu-app/blob/main/frontend/src/components/CategoryList/CategoryList.tsx) explicada.
<details> 
<summary> explicação ↴</summary>
<br>

No começo do código existe uma requisição para a API que retorna as categorias e os produtos que estão relacionados a cada uma delas:

```
const { data, isLoading } = useQuery("categories", () => {
  return axios.get("http://localhost:3000/category/").then((response) => {
    const categoriesRelated: Category[] = response.data
      .filter(
        (category: Category) =>
          category.parent === "" || category.parent === null
      )
      .map((category: Category) => {
        return {
          ...category,
          child: response.data.filter(
            (childCategory: Category) => childCategory.parent === category.id
          ),
        };
      });
    return categoriesRelated;
  });
});
```

No retorno dessa requisição, é feito um filtro das categorias pai, e depois um mapeamento delas retornando cada uma delas com uma nova propriedade 'child', onde são inseridas as subcategorias respectivas às suas categorias pai.

No componente, esse novo Array de categorias pai é mapeado:

```
data?.map((category: Category) => {
  return (
    <div key={category.id}>
      <h2>{category.name}</h2>
      {category.child?.length ? (
        category.child.map((childCategory: Category, index: number) => {
          return (
            <div key={index}>
              <h3>{childCategory.name}</h3>
              {childCategory.products.length ? (
                <ProductList products={category.products} />
              ) : (
                <p>Categoria sem produtos no momento.</p>
              )}
            </div>
          );
        })
      ) : category.products.length ? (
        <ProductList products={category.products} />
      ) : (
        <p>Categoria sem produtos no momento.</p>
      )}
    </div>
  );
})
```

A lógica desse mapeamento é basicamente:

é mostrado o nome da categoria pai, se a categoria pai tiver subcategorias, é mostrado os nomes das respectivas subcategorias e seus produtos, se não, é mostrado os produtos da categoria pai.

Dessa maneira, para a aplicação funcionar corretamente, os dados devem ser inseridos seguindo o padrão:

categorias só podem ter produtos se não tiverem subcategorias, subcategorias não podem ter subcategorias e subcategorias podem ter produtos sem problemas.

esse formato foi uma escolha pessoal e podia ser feito de outras maneiras também.

</details>

Ainda pretendo implementar o context do React na lógica de autenticação do front e escrever alguns testes unitários com Jest e Testing Library.