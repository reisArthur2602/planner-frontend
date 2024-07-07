import {
  AppleIcon,
  BriefcaseBusinessIcon,
  DumbbellIcon,
  ListChecksIcon,
  NotepadTextIcon,
  PlaneIcon,
  UserIcon,
} from 'lucide-react';
import { TypeTask } from '../../types/task';

export const getCategoryIcon = (type: TypeTask) => {
  switch (type) {
    case 'study':
      return <NotepadTextIcon size={28}/>;
    case 'gym':
      return <DumbbellIcon size={28}/>;
    case 'work':
      return <BriefcaseBusinessIcon size={28}/>;
    case 'food':
      return <AppleIcon size={28}/>;
    case 'personal':
      return <UserIcon size={28}/>;
    case 'travel':
      return <PlaneIcon size={28}/>;
    default:
      return <ListChecksIcon size={28}/>;
  }
};
