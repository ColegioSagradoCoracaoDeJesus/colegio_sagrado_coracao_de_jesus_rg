# Site Institucional Colégio Sagrado Coração de Jesus — 70 Anos

> **Projeto Institucional Comemorativo dos 70 Anos do Colégio Sagrado Coração de Jesus (1956 - 2026)**  
> Desenvolvido com **Next.js 14+ (App Router)**, **TypeScript**, **Tailwind CSS**, **Sanity CMS**, **Resend API** e hospedado gratuitamente na **Vercel**.

---

## 🚀 Como Rodar o Projeto Localmente

### Pré-requisitos
- Node.js version 18.17 ou superior
- Gerenciador de pacotes `npm`

### Passo a Passo

1. **Clonar o Repositório:**
   ```bash
   git clone git@github.com:ColegioSagradoCoracaoDeJesus/PaginaOficial.git
   cd PaginaOficial
   ```

2. **Instalar Dependências:**
   ```bash
   npm install
   ```

3. **Configurar Variáveis de Ambiente (opcional para desenvolvimento):**
   Crie o arquivo `.env.local` baseado no `.env.local.example`:
   ```bash
   cp .env.local.example .env.local
   ```

4. **Iniciar o Servidor de Desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.  
   O painel de gerenciamento de conteúdo **Sanity Studio** estará acessível em [http://localhost:3000/studio](http://localhost:3000/studio).

---

## 📝 Manual da Secretaria: Como Publicar Notícias e Fotos em até 10 Minutos

Este manual foi elaborado para que qualquer membro da secretaria ou comunicação do Colégio publique conteúdos no site de forma simples e autônoma, sem depender de suporte técnico.

### 1. Acessando o Painel de Conteúdo
1. Abra o navegador e acesse o endereço `/studio` no domínio do site (ex: `https://sagradocoracao.g12.br/studio`).
2. Faça login com seu e-mail e senha cadastrados no Sanity.

### 2. Publicando uma Nova Notícia (Passo a Passo)
1. No menu lateral do Studio, clique em **"Notícia / Aconteceu no Sagrado"**.
2. Clique no botão **"Criar" / "+"** no canto superior.
3. Preencha os campos:
   - **Título da Notícia:** Título claro e objetivo.
   - **Slug:** Clique em **"Generate"** para criar a URL automática.
   - **Data de Publicação:** Selecione a data de hoje.
   - **Categoria:** Escolha entre *Institucional*, *Pedagógico*, *70 Anos*, *Eventos*, etc.
   - **Resumo:** Breve texto de 2 linhas que aparece nos cartões da Home.
   - **Imagem de Capa:** Clique em **"Upload"** e escolha a foto.  
     *(Dica: Você pode usar o recurso de **Crop/Hotspot** nativo do Sanity para ajustar o foco da foto sem precisar editar antes!)*
   - **Texto Alternativo (Alt):** Descreva brevemente o que está na foto (obrigatório para acessibilidade).
   - **Conteúdo Completo:** Digite ou cole o texto completo da matéria.
   - **Checklist LGPD:** Marque a caixa confirmando que a autorização de imagem dos alunos foi verificada.
4. Clique no botão verde **"Publish"** (Publicar) no canto inferior direito.  
   ⚡ **Pronto! A notícia estará no ar no site imediatamente.**

### 3. Criando uma Galeria de Fotos do Mês
1. No menu lateral do Studio, selecione **"Galeria do Mês"** e clique em **"Criar"**.
2. Informe o **Título** (ex: *Festejos dos 70 Anos - Turmas da Manhã*), o **Mês** e **Ano**.
3. No campo **Fotos**, clique em **"Add item"** e envie quantas fotos desejar.
4. Adicione uma legenda e o texto alternativo (`Alt`) em cada foto.
5. Verifique o checklist de autorização de imagem e clique em **"Publish"**.

---

## 👥 Como Conceder Acesso a um Novo Usuário no Sanity Studio

1. Acesse o painel de gerenciamento em [manage.sanity.io](https://manage.sanity.io).
2. Selecione o projeto do **Colégio Sagrado Coração de Jesus**.
3. Vá na aba **Members** (Membros) e clique em **Invite Members**.
4. Insira o e-mail do colaborador da secretaria.
5. Defina o papel de acesso:
   - **Editor:** Permite criar, editar e publicar notícias, galerias e avisos da Home (ideal para a secretaria).
   - **Administrator:** Acesso total, incluindo gerenciamento de usuários e configurações globais.

---

## ⚡ Monitoramento Gratuito de Disponibilidade (UptimeRobot)

Para garantir que o site permaneça online 24/7 sem custos:

1. Crie uma conta gratuita no [UptimeRobot](https://uptimerobot.com).
2. Clique em **"Add New Monitor"**.
3. Selecione o tipo **HTTP(s)**.
4. Insira o nome *Colégio Sagrado Coração* e a URL `https://sagradocoracao.g12.br`.
5. Configure o intervalo de checagem para **5 minutos**.
6. Insira o e-mail da secretaria para receber alertas automáticos em caso de indisponibilidade.

---

## 🚀 Deploy e Rollback na Vercel

### Deploy Automático
- Qualquer alteração enviada para a branch `main` no GitHub via `git push origin main` acionará um deploy automático na Vercel em menos de 2 minutos.

### Como Fazer Rollback de um Deploy Problemático
1. Acesse o painel da Vercel em [vercel.com](https://vercel.com).
2. Clique no projeto **colegio-sagrado-coracao**.
3. Vá para a aba **Deployments**.
4. Encontre a versão anterior que estava funcionando perfeitamente.
5. Clique nos três pontinhos `...` ao lado do deployment e escolha **Instant Rollback**.
6. Confirme a ação — o site retornará à versão anterior em segundos.

---

## 📋 Placeholders que a Direção Deve Preencher Antes do Lançamento Oficial

Estes itens já possuem estrutura funcionando no site com dados de exemplo, mas devem ser atualizados com as definições finais da Direção:

1. Logotipo institucional em vetor (.ai / .svg)
2. Cores HEX finais (caso o Colégio adote novos tons institucionais nos materiais impressos)
3. Fotografia em alta resolução da fachada e ambientes reais
4. Confirmação do e-mail de destino de cada formulário (`secretaria@sagradocoracao.g12.br` e `eventos@sagradocoracao.g12.br`)
5. Domínio definitivo (ex: `sagradocoracao.g12.br`) conectado no painel da Vercel (Settings → Domains).

---

## ✅ Checklist de Critérios de Aceite

- [x] Todos os requisitos funcionais "Deve" implementados
- [x] 13 seções no ar com conteúdo em português rico e fidedigno
- [x] Testado e responsivo de 320px a 1920px (sem quebra de layout)
- [x] Performance e acessibilidade WCAG 2.1 AA verificadas
- [x] Publicação em < 10 min no Sanity Studio documentada
- [x] Form de visita e orçamento com validação e honeypot anti-spam
- [x] Política de Privacidade e Aviso de Cookies (LGPD) integrados
- [x] SEO técnico (`sitemap.ts`, `robots.ts`, Schema.org/School, OpenGraph)
