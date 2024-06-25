import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/logo.svg';
import BellIcon from '../../assets/icons/bell-icon.svg';
import * as S from './styles';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Template = ({ children }: Props) => {
  return (
    <S.Box>
      <S.Header>
        <S.Container>
          <nav>
            <img src={Logo} alt="Logo do Planner" />
            <div>
              <Link to="/">Início</Link>
              <Link to="/task">Tarefa</Link>
              <Link to="/sync">Sincronizar</Link>
              <button>
                <img
                  src={BellIcon}
                  alt="Icone de sino"
                  width={30}
                  height={30}
                />
              </button>
            </div>
          </nav>
        </S.Container>
      </S.Header>
      <S.Container>{children}</S.Container>

      <S.Footer>
        <p>@Planner - Organizando sua vida</p>
      </S.Footer>
    </S.Box>
  );
};

export default Template;
