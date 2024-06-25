import FilterIcon from '../../assets/icons/filter-icon.svg';
import * as S from './styles';

interface IFilter extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
  title: string;
}

export const Filter = ({ active, title, ...rest }: IFilter) => {
  return (
    <S.FilterCard active={active} {...rest}>
      <img src={FilterIcon} alt="Icone de filtro" width={24} height={21} />
      <span>{title}</span>
    </S.FilterCard>
  );
};
