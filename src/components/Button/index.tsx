import * as S from './styles';

type ButtonProps = React.ComponentProps<'button'>;

const ButtonAction = ({ ...rest }: ButtonProps) => {
  return <button>Button</button>;
};

const GhostButton = ({ children, ...rest }: ButtonProps) => {
  return <S.GhostButton {...rest}>{children}</S.GhostButton>;
};

export { ButtonAction, GhostButton };
