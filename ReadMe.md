# MachOps.Frontend

![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)
![Nuxt](https://img.shields.io/badge/Nuxt-18181B?style=for-the-badge&logo=nuxtdotjs&logoColor=00DC82)
![Vue](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Azure](https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white)
![Status](https://img.shields.io/badge/Status-em%20desenvolvimento-yellow?style=for-the-badge)

---

O **MachOps.Frontend** é a camada de interface da aplicação **MachOps**, construída em **Nuxt 4 (Vue + TypeScript)**, responsável por **interagir com o usuário**, consumir APIs do backend e gerenciar estados locais e globais.  
Permite **visualizar máquinas, criar, atualizar e deletar registros**, com toda a lógica de negócio implementada no backend.

---

### 🏗 Estrutura do Projeto

📂 MachOps.Frontend  
 ┣ 📂 app  
 ┣ 📂 public  
 ┣ 📄 tsconfig.json  
 ┣ 📄 package.json  
 ┣ 📄 package-lock.json  
 ┣ 📄 nuxt.config.ts  
 ┣ 📄 .gitignore  
 ┣ 📄 dockerfile  
 ┗ 📄 ReadMe.md

---

### ⚡ Funcionalidades (V1)

- 🖥️ Páginas interativas
- 🌐 Consumo de APIs
- 📦 Componentes modulares
- 🔄 Atualizações em tempo real via **SignalR**
- 📱 Layout responsivo e otimizado para mobile

---

### 🐳 Docker

O projeto inclui um **Dockerfile**, permitindo configurar, executar e testar facilmente em ambiente local ou de rede.

---

### 🏁 Origem do Projeto

A ideia surgiu a partir de uma solução anterior criada em **Power BI**.  
Apesar de funcional, essa abordagem apresentava limitações para evolução.  
Assim, o conceito foi reaproveitado e transformado em um **projeto de portfólio**, agora explorando tecnologias modernas e mais robustas.

---

### 🚀 Roadmap

- [x] Estrutura inicial do projeto
- [ ] Criação da página raiz (index.vue)
- [ ] Criação dos componentes
- [ ] Adicionar Icones SVG e Imagens PNG
- [ ] Criar o arquivo dockerfile
- [ ] Adicionar a compilação do frontned ao docker-compose
- [ ] Criar o serviço de chamada de API
- [ ] Adicionar o suporte ao SignalR para permitir tempo real

---

### ▶️ Como rodar a aplicação

1. Clone este repository:

   ```
   git clone https://github.com/LucasLantemamLeite/MachOps.Frontend.git
   ```

2. Rodar o dockerfile configurado:

   ```
   docker build -t machops-frontend .
   ```

3. Rodar o container localhost ou em rede privade:

   ```
   docker run -d -p 3000:3000 --name machops-server machops-frontend
   ```

4. Validar se está rodando:

   ```
   http://localhost:3000/ -> Localhost
   http://'ip da máquina':3000/ -> Rede Privada via Ip da máquina
   ```

---

### 📖 Mais Informações

Mais detalhes disponíveis na [**Wiki do projeto**](https://github.com/LucasLantemamLeite/MachOps.Frontend/wiki).
