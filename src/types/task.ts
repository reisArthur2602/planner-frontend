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
  description: string;
  done: boolean;
  isGuest: boolean;
  created: Date;
};

export type TaskProps = {
  macadress?: string;
  type: CategoryTypes;
  title: string;
  when: string;
  description: string;
};
