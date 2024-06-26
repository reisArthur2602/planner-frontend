//ICONES
import WorkIcon from '../assets/icons/work-icon.svg';
import TravelIcon from '../assets/icons/travel-icon.svg';
import StudyIcon from '../assets/icons/study-icon.svg';
import PeopleIcon from '../assets/icons/people-icon.svg';
import GymIcon from '../assets/icons/gym-icon.svg';
import FoodIcon from '../assets/icons/food-icon.svg';
import CodeIcon from '../assets/icons/code-icon.svg';

const TypesData = {
  study: StudyIcon,
  gym: GymIcon,
  work: WorkIcon,
  food: FoodIcon,
  people: PeopleIcon,
  travel: TravelIcon,
  code: CodeIcon,
} as const;

export type TypesActions = keyof typeof TypesData;

type TypesResults = (typeof TypesData)[keyof typeof TypesData];

interface IIcons {
  type: TypesActions;
  icon: TypesResults;
}

export const Icons: IIcons[] = [
  { type: 'code', icon: CodeIcon },
  { type: 'study', icon: StudyIcon },
  { type: 'gym', icon: GymIcon },
  { type: 'work', icon: WorkIcon },
  { type: 'food', icon: FoodIcon },
  { type: 'people', icon: PeopleIcon },
  { type: 'travel', icon: TravelIcon },
];


