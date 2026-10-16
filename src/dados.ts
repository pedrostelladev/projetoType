import type { tarefa } from "./tipo";

export const tarefas: tarefa[] = [
    {id: 1, titulo: "Estudar TypeScript", prioridades: "alta", status: "pendente", tags: ["programação", "typescript"], criadaEm: new Date()},
    {id: 2, titulo: "Estudar Java", prioridades: "alta", status: "em_andamento", tags: ["estudo"], criadaEm: new Date()},
    {id: 3, titulo: "Exercício físico", prioridades: "media", status: "pendente", tags: ["saúde"], criadaEm: new Date()},
    {id: 4, titulo: "Ler um livro", prioridades: "media", status: "pendente", tags: ["leitura"], criadaEm: new Date()},
    {id: 5, titulo: "Aprender a tocar violão", prioridades: "baixa", status: "em_andamento", tags: ["música", "violão"], criadaEm: new Date()},  
]