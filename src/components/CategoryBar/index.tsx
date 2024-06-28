import { useContext } from 'react';
import { categoryIcons } from '../../utils/getCategoryIcon';
import * as S from './styles';
import { TaskContext } from '../../context/TaskContext';

const CategoryBar = () => {
  const { handleCategory, category } = useContext(TaskContext);

  return (
    <S.CategoryContainer>
      {categoryIcons.map((t) => (
        <S.ButtonIcon
          key={t.type}
          type="button"
          active={category === t.type}
          onClick={() => handleCategory(t.type)}
        >
          <S.CategoryIcon>{t.icon}</S.CategoryIcon>
        </S.ButtonIcon>
      ))}
    </S.CategoryContainer>
  );
};

export default CategoryBar;
