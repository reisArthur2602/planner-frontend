import { z } from 'zod';

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
const timeRegex = /^(?:[01]\d|2[0-3]):(?:[0-5]\d)$/;

export const TaskSchema = z.object({
  title: z.string().min(1, "Título da tarefa é obrigatório"),
  description: z.string().min(1, "Descrição da tarefa é obrigatório"),
  date: z.string().refine((d) => dateRegex.test(d), "Defina uma data válida"),
  time: z.string().refine((t) => timeRegex.test(t) ,"Defina uma hora válida"),
});
