# Próximos Passos para o Lançamento Oficial

> Para você, Francine. Este documento cruza o estado real do código com a Seção 9 (Critérios de Aceite), a Seção 7 (Decisões Técnicas) e a Seção 3.2 (Fora de Escopo) do `01_Documento_de_Requisitos`. Está em ordem de prioridade — o bloco 1 é o que realmente impede o lançamento; os demais são para ficar redondo e aparecer bem no Google.

---

## 🔴 Bloco 1 — Bloqueadores reais (sem isso, o site "funciona" mas falha silenciosamente)

### 1.1 Domínio de e-mail verificado no Resend ✅ decidido: sem domínio, usando Gmail da secretaria
Hoje o remetente padrão dos formulários é `onboarding@resend.dev` — esse endereço **só entrega e-mail para o e-mail com o qual a conta Resend foi criada**, não para qualquer destinatário. Sem domínio próprio (item 1.2), não há como verificar um remetente institucional no Resend, então a solução escolhida foi:

**Decidido:** a conta do Resend será criada usando `secretariacolegiosagrado@gmail.com` — o **mesmo** e-mail já configurado como padrão em `EMAIL_DESTINO_VISITAS`/`EMAIL_DESTINO_LOCACAO` (`src/lib/sanity/queries.ts`, `DEFAULT_SITE_SETTINGS`). Como o remetente sandbox `onboarding@resend.dev` consegue entregar para o **dono da conta**, e o dono da conta vai ser exatamente esse Gmail, o e-mail chega sem precisar de domínio nem custo.

**Atenção, isso é uma trava e tanto** (não é opcional, é a regra do Resend):
1. Ao criar a conta Resend, **use exatamente `secretariacolegiosagrado@gmail.com`** — outro e-mail (pessoal, institucional diferente etc.) quebra a entrega.
2. `RESEND_FROM_EMAIL` **não** deve ser configurado (ou deve continuar vazio) na Vercel — o código já cai no fallback `onboarding@resend.dev` quando a variável não existe.
3. Se no futuro quiserem um destinatário **diferente** desse Gmail (ex: outro setor além da secretaria), o sandbox não vai entregar — nesse caso, aí sim precisaria reabrir a discussão de domínio próprio ou trocar de provedor de e-mail.
4. Efeito colateral aceitável: o e-mail chega com remetente genérico da Resend (não "secretaria@colégio..."), e alguns provedores podem tratar com mais desconfiança/spam do que um domínio verificado — na prática, indo para o Gmail da própria secretaria, tende a funcionar bem.
5. **Teste de verdade obrigatório antes do lançamento:** depois de criar a conta Resend com esse e-mail, envie os dois formulários e confirme que chegou na caixa de entrada (não spam) — é o critério de aceite "Formulários testados: chegam no e-mail correto" da Seção 9.

### 1.2 Domínio — decisão tomada: sem domínio próprio
✅ **Decidido:** o Colégio não vai registrar domínio pago. O código foi atualizado (`layout.tsx`, `robots.ts`, `sitemap.ts`) para usar a URL gratuita da própria Vercel: `https://colegiosagradocoracaodejesusrg.vercel.app`. Essa é agora a URL definitiva do site, canonical, Open Graph e sitemap.

Consequência a ter ciência: o endereço fica mais longo e menos "institucional" que um `.com.br` próprio, e como é subdomínio da Vercel, RN07 (contas em nome do Colégio) se aplica só à conta da Vercel — não existe registro de domínio separado para transferir.

### 1.3 Contas em nome do Colégio, não suas (RN07)
Confirme que a conta da Vercel, do Sanity e do Resend usadas em produção pertencem (ou serão transferidas) para um e-mail institucional do Colégio, com a Direção tendo acesso — não a sua conta pessoal de estagiária. Isso protege vocês dois: o Colégio não fica refém quando o estágio terminar, e você não fica dona de uma assinatura para sempre.

---

## 🟡 Bloco 2 — Deploy oficial

### 2.1 Publicar na Vercel
1. Crie uma conta na [Vercel](https://vercel.com) (grátis) com o e-mail institucional do Colégio.
2. "Add New Project" → importe o repositório do GitHub.
3. Em **Settings → Environment Variables**, cole todas as variáveis listadas na seção 5 do `05_Documentacao_Tecnica.md` (Sanity, Resend, `NEXT_PUBLIC_GA_ID`). **Não** inclua `SANITY_API_TOKEN` a menos que algum script de automação precise dele em produção.
4. Deploy. A cada `git push origin main`, a Vercel publica sozinha em ~2 minutos (já documentado no `README.md`).
5. ~~Em **Settings → Domains**, conecte o domínio definitivo~~ — não se aplica: por decisão da Direção (item 1.2), não há domínio próprio. O site já fica publicado em `https://colegiosagradocoracaodejesusrg.vercel.app` assim que o deploy roda, sem passo extra.

### 2.2 Rollback, se algo quebrar
Já documentado no `README.md` — Vercel → Deployments → "..." → Instant Rollback.

---

## 🟢 Bloco 3 — Aparecer nas buscas do Google

O SEO técnico **já está pronto no código** (título e descrição por página, `sitemap.ts`, `robots.ts`, Open Graph, dados estruturados Schema.org/School) — isso cobre o **RNF05**. O que falta é o lado "fora do código":

⚠️ **Bloqueio temporário ativo:** enquanto o site está em fase de testes, `layout.tsx` (`robots: { index: false, follow: false }`) e `robots.ts` (`disallow: '/'`) estão configurados de propósito para **impedir** a indexação. Antes de fazer os passos abaixo, reverta os dois (voltar para `index: true` / `allow: '/'` — há um comentário em cada arquivo marcando exatamente o que trocar).

### 3.1 Google Search Console
1. Acesse [search.google.com/search-console](https://search.google.com/search-console) com a conta institucional.
2. Adicione a propriedade `https://colegiosagradocoracaodejesusrg.vercel.app` (a Vercel facilita a verificação via meta tag, já que não há DNS próprio para configurar).
3. Envie o sitemap: `https://colegiosagradocoracaodejesusrg.vercel.app/sitemap.xml`.
4. Isso normalmente leva de alguns dias a poucas semanas para o Google indexar as páginas — não é instantâneo, e não há como "forçar" além disso.

### 3.2 Google Analytics 4 (RF32)
O código **já está pronto** para isso (script condicional em `layout.tsx`, respeitando o aviso de cookies/LGPD) — só falta o ID real:
1. Crie uma propriedade em [analytics.google.com](https://analytics.google.com) (gratuito).
2. Copie o "ID de métricas" (formato `G-XXXXXXXXXX`).
3. Configure `NEXT_PUBLIC_GA_ID` com esse valor na Vercel.
4. Pronto — o Analytics liga sozinho, sem precisar mexer em mais nada no código. Ele só começa a contar visitas de quem **aceitar** o aviso de cookies (obrigatório pela LGPD).
5. Isso é o que vai te dar os números pedidos na Seção 1.1 do Documento de Requisitos (indicadores de sucesso) — hoje aqueles campos `[preencher]` de meta não têm como ser definidos sem pelo menos um mês de dados reais.

### 3.3 Google Business Profile (não estava no documento de requisitos, mas ajuda muito)
Cadastrar o Colégio no [Google Business Profile](https://business.google.com) (antigo Google Meu Negócio) é gratuito e costuma ter mais impacto na busca local ("colégio em Rio Grande RS") do que qualquer ajuste de SEO técnico. Vale considerar com a Direção, mesmo fora do escopo formal do projeto.

---

## 🔵 Bloco 4 — Hospedagem gratuita "pra sempre"

A Vercel tem um **plano gratuito permanente** (Hobby), que é exatamente o que o Documento de Requisitos recomienda (Decisão Técnica nº 1, Caminho A) — não é um teste temporário, é o plano padrão para projetos pessoais/institucionais pequenos. Os limites do plano gratuito (banda, execuções de função) são bem folgados para o tráfego esperado de um colégio. Pontos de atenção:
- **Domínio:** decisão da Direção foi **não registrar** (ver item 1.2) — o site fica em `https://colegiosagradocoracaodejesusrg.vercel.app`, gratuito. A Premissa PR05 do documento de requisitos (~R$ 40/ano) não se aplica mais.
- **Sanity:** também tem plano gratuito permanente (com limite de usuários e de banda de imagem, que é confortável para o volume deste site).
- **Resend:** plano gratuito permanente até um certo volume de e-mails/mês — o volume de formulários de um colégio fica bem dentro do limite. **Mas** sem domínio próprio (item 1.1), o envio de e-mail com remetente institucional fica sem solução padrão — ver observações e alternativas no item 1.1.

Ou seja: **hospedagem, CMS, domínio e (com ressalva) envio de e-mail conseguem ficar 100% gratuitos permanentemente** — o preço dessa escolha é que o item 1.1 (e-mail com remetente institucional) precisa de uma solução alternativa em vez do caminho padrão do Resend.

---

## ⚪ Bloco 5 — Antes de assinar o Termo de Aceite (Seção 9 do Documento de Requisitos)

Revisão honesta do checklist da Seção 9 — alguns itens que o `README.md` atual marca como "verificado" **na verdade nunca foram testados** nesta sessão:

| Critério | Status real |
|---|---|
| Requisitos "Deve" implementados | ✅ (ver tabela completa em `05_Documentacao_Tecnica.md`) |
| 13 seções no ar com conteúdo real | ⚠️ quase — ainda existem alguns campos `[EXEMPLO]` pontuais (listados no fim do `05_Documentacao_Tecnica.md`) |
| Testado em iPhone/Android/tablet/desktop sem quebra | ❌ **nunca testado em dispositivo físico** — só builds/tipos verificados |
| PageSpeed mobile ≥ 85 | ❌ **nunca medido** |
| Contraste e navegação por teclado (WCAG) | ❌ **nunca auditado com ferramenta própria (axe/WAVE)** |
| Secretaria publica sozinha, ao vivo | ❌ ainda não aconteceu — é o teste mais importante do projeto |
| Formulários chegam no e-mail certo | ❌ **bloqueado pelo item 1.1 acima** |
| Domínio/hospedagem/CMS em conta do Colégio | ❌ pendente (item 1.3) |
| Manual + treinamento | ⚠️ manual pronto (`06_Manual_Secretaria_e_Direcao.md`), treinamento presencial ainda não agendado |

Recomendo tratar esses itens como a lista real de "falta fazer" antes de considerar o projeto entregue — marcar como concluído sem testar de verdade tira a força do próprio critério de aceite que vocês definiram.
