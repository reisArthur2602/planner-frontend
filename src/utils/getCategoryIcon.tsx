import { CategoryTypes } from '../types/task';
import {
  AppleIcon,
  BriefcaseBusinessIcon,
  CodeXml,
  DumbbellIcon,
  ListChecksIcon,
  NotepadTextIcon,
  PlaneIcon,
  UserIcon,
} from 'lucide-react';

export const getCategoryIcon = (type: CategoryTypes) => {
  switch (type) {
    case 'code':
      return <CodeXml />;
    case 'study':
      return <NotepadTextIcon />;
    case 'gym':
      return <DumbbellIcon />;
    case 'work':
      return <BriefcaseBusinessIcon />;
    case 'food':
      return <AppleIcon />;
    case 'people':
      return <UserIcon />;
    case 'travel':
      return <PlaneIcon />;
    default:
      return <ListChecksIcon />;
  }
};

export interface ICategoryIcons {
  type: CategoryTypes;
  icon: JSX.Element;
}
export const categoryIcons: ICategoryIcons[] = [
  { type: 'code', icon: <CodeXml /> },
  { type: 'study', icon: <NotepadTextIcon /> },
  { type: 'gym', icon: <DumbbellIcon /> },
  { type: 'work', icon: <BriefcaseBusinessIcon /> },
  { type: 'food', icon: <AppleIcon /> },
  { type: 'people', icon: <UserIcon /> },
  { type: 'travel', icon: <PlaneIcon /> },
];
