import { AppleIcon, BriefcaseBusinessIcon, DumbbellIcon, NotepadTextIcon, PlaneIcon, UserIcon } from "lucide-react";
import { TypeTask } from "../../types/task";

export interface ITypeData{
  type: TypeTask;
  icon: JSX.Element;
}
export const typeData: ITypeData[] = [
  { type: 'gym', icon: <DumbbellIcon /> },
  { type: 'study', icon: <NotepadTextIcon /> },
  { type: 'work', icon: <BriefcaseBusinessIcon /> },
  { type: 'food', icon: <AppleIcon /> },
  { type: 'personal', icon: <UserIcon /> },
  { type: 'travel', icon: <PlaneIcon /> },
] as const;