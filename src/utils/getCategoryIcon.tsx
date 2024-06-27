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
