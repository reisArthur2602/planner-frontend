export type CategoryTypes =
  | 'study'
  | 'gym'
  | 'work'
  | 'food'
  | 'people'
  | 'travel'
  | 'code';

export type TaskResponse = {
  id: string;
  type: CategoryTypes;
  title: string;
  when: string;
  done: boolean;
  isGuest: boolean;
  created: Date;
};
