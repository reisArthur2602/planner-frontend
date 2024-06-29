import { z } from 'zod';

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
const timeRegex = /^(?:[01]\d|2[0-3]):(?:[0-5]\d)$/;

export const TaskSchema = z.object({
  title: z.string().min(1, "O título da tarefa é obrigatório"),
  description: z.string().min(1, "A descrição da tarefa é obrigatória"),
  date: z.string().min(1, "A data da tarefa é obrigatória").refine((d) => dateRegex.test(d), "Por favor, defina uma data válida no formato YYYY-MM-DD"),
  time: z.string().min(1, "A hora da tarefa é obrigatória").refine((t) => timeRegex.test(t) ,"Por favor, defina uma hora válida no formato HH:mm"),
});
