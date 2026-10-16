export type Prioridade = "baixa" | "media" | "alta";
export type Status = "pendente" | "em_andamento";

export interface tarefa {
    readonly id: number;
    titulo: string;
    descricao?: string;
    prioridades: Prioridade;
    status: Status;
    tags: string[];
    criadaEm: Date;
}

export type NovaTarefa = Omit<tarefa, "id" | "status" | "criadaEm">;