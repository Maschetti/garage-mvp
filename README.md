# GARAGE-MVP

## Objetivo

Este MVP surgiu com o objetivo de otimizar o gerenciamento de veículos na garagem do hotel.
O foco principal é simplificar os processos, proporcionando maior eficiência e melhorando o desempenho dos manobristas.

## Tecnologias

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **[React Native](https://reactnative.dev/)**  
  Escolhido por permitir o desenvolvimento de aplicativos mobile para Android e iOS com um único código-base, já que o projeto foi desenvolvido para ser usado nos
  celulares dos colaboradores.

- **[Expo](https://expo.dev/)**  
  Facilitou o desenvolvimento ao fornecer um ambiente pronto para uso, eliminando a necessidade de configurações complexas e acelerando testes e deploys.

- **[NativeWind](https://www.nativewind.dev/)**  
  Utilizado para estilização com classes utilitárias no estilo Tailwind CSS, tornando o código mais limpo e modular.

- **[TypeScript](https://www.typescriptlang.org/)**  
  Adotado para garantir maior segurança no código, permitindo tipagem estática e reduzindo erros durante o desenvolvimento.

Cada tecnologia foi selecionada para garantir um desenvolvimento ágil e eficiente, levando em conta que se trata de um projeto de pequena escala.

## Protótipo

Disponivel em **[Link](https://expo.dev/accounts/maschetti/projects/garage-mvp/builds/fdb95975-d275-42fd-b3b3-fc1b0a3ac489)**

## Execução do código

###  Pré-requisitos  

Antes de começar, certifique-se de ter instalado em sua máquina:  

- **[Node.js](https://nodejs.org/)** (Recomendado: versão LTS)  
- **[Expo CLI](https://expo.dev/)** (Instalado globalmente)  
- **[Git](https://git-scm.com/)** (Para clonar o repositório)  
- **[Android Studio](https://developer.android.com/studio)** (Para rodar no emulador Android, se necessário)  
- **[Xcode](https://developer.apple.com/xcode/)** (Se for rodar no iOS, MacOS necessário)  

---

### 1. Clonar o Repositório  

Caso ainda não tenha o código, clone o repositório e acesse a pasta do projeto:  

```
git clone https://github.com/Maschetti/garage-mvp.git
```

```
cd ./garage-mvp
```

### 2. Instalar Dependências
```
npm install
```
ou
```
yarn install
```

### 3. Execute o Projeto

```
npx expo start
```
ou
```
yarn expo start
```

### 4. Emular ou rodar no celular

#### Rodar no Celular

1. Instale o aplicativo do Expo Go no seu celular.
2. Escaneie o QR Code exibido no terminal.

#### Rodar no Emulador

```
npx expo start --android
```
ou
```
npx expo start --ios
```

## Estrutura de Pastas

Como o projeto é pequeno, não foi adotado nenhuma arquitetura específica. As pastas foram organizadas comnforme a necessidade.

```
📂 garage-mvp // Raiz do projeto
├── 📂 src 
│   ├── 📂 app // Expo utiliza file-based navigation
│   ├── 📂 components // Componentes do projeto
│   │   ├── _📂 ui // Componentes que foram abstraídos para várias partes do código
│   │   └── // Componentes
│   ├── 📂 constants // Constantes criadas para simular um BD e testar a interface
│   └── 📂 styles // Configuração base do nativewind
└── // Outras pastas estuturais
```

## Padronização de Commits

Os commits devem seguir o seguinte formato:

```
tipo: descrição breve
```

### Tipos 
- **feat**: adição de funcionalidade, componente ou função.
- **fix**: correção de erro.
- **refactor**: refatoração de algum componente ou parte do código.
- **chore**: atualização de dependências, mudanças de pasta e outras tarefas menores.
- **style**: modificações exclusivamente na parte visual.

## Problemas

### Redirecionamento

- Criação de uma página para gerenciamento de um único veículo, sem nenhum redirecionamento não iniciado pelo usuário.
- Remoção dos redirecionamentos de erro ou de conclusão.
- Quando o carro já está cadastrado, o usuário é redirecionado para a página do veículo.

### Queries desnecessárias

- O protótipo evita ao máximo voltar para a página inicial sem necessidade, pois isso reduz o número de queries ao banco de dados e acelera o processo.

### Estados do carro

- Criação de um novo modelo de estados do carro, considerando que o veículo pode estar em quatro possíveis estados: fora do sistema, na recepção, estacionado ou com o cliente. Esse novo entendimento simplifica o gerenciamento de um mesmo veículo e abrange mais cenários, como: o cliente solicitar o carro e desistir de sair, ou o cliente chegar, fazer check-in e já sair com o carro para a rua.

### Gerenciamento de vagas

- Foi considerado um banco de dados relacional no qual a relação entre Veículo e Vaga é de um para um. Isso impossibilita a superlotação da garagem e permite uma distribuição e visualização mais precisa do espaço disponível.
- Foi criada uma seção onde o manobrista pode visualizar o pátio e, ao identificar uma vaga livre ou ocupada, simplesmente clicar em um botão na tela para atualizar os estados do carro e da vaga.
