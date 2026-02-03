# 📝 To Do List | BN

Aplicação de lista de tarefas desenvolvida com React, focada em organização de estado global, boas práticas de componentização, hooks customizados e persistência de dados no navegador utilizando LocalStorage.

O projeto foi criado como parte do meu portfólio para vagas de estágio em Frontend/Software Engineer, demonstrando fundamentos sólidos de engenharia de software, arquitetura e experiência do usuário.

---

## 🌐 Demo Online

A aplicação está disponível online via Vercel:

👉 https://to-do-list-react-six.vercel.app/

---

## 🚀 Funcionalidades

- Adicionar novas tarefas
- Marcar tarefas como concluídas
- Remover tarefas individuais
- Remover todas as tarefas
- Remover apenas tarefas concluídas
- Contador de tarefas adicionadas
- Contador de tarefas concluídas
- Persistência com LocalStorage
- Foco automático no input após adicionar tarefa
- Atalho via teclado (Enter)

---

## 🛠️ Tecnologias Utilizadas

- React
- JavaScript (ES6+)
- Context API
- Hooks Customizados
- Vite
- LocalStorage API
- CSS puro
- Vercel (Deploy)

---

## 🧠 Arquitetura e Organização

O projeto utiliza uma separação clara de responsabilidades:

src/
├── components/
│ ├── ListTasks.jsx
│ ├── ListItem.jsx
│ ├── ListButtons.jsx
│ └── ListTasksInfo.jsx
│
├── contexts/
│ ├── TaskContext.jsx
│ └── TaskProvider.jsx
│
├── hooks/
│ ├── useTasks.jsx
│ ├── useTasksActions.jsx
│ ├── useTasksInput.jsx
│ └── useTasksStats.jsx

---

## 📌 Decisões Técnicas

- Uso de **Context API** para estado global
- Hooks customizados para isolar regras de negócio
- Componentes pequenos e reutilizáveis
- Manipulação imutável do estado
- Persistência automática com LocalStorage
- Cálculos derivados otimizados com `useMemo`
- Separação clara entre UI e lógica
- Foco em experiência do usuário e acessibilidade básica

---
