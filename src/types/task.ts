export type TypeTask =
  | 'study'
  | 'gym'
  | 'work'
  | 'food'
  | 'personal'
  | 'travel';
  
export type Task = {
  id: string;
  title: string;
  description: string;
  type: TypeTask;
  done: boolean;
  when: Date;
  user_id: string;
};
