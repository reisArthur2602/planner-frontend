import * as S from './styles';

type ButtonProps = React.ComponentProps<'button'>;

const ButtonAction = ({ children, ...rest }: ButtonProps) => {
  return <S.ButtonAction {...rest}>{children}</S.ButtonAction>;
};

const GhostButton = ({ children, ...rest }: ButtonProps) => {
  return <S.GhostButton {...rest}>{children}</S.GhostButton>;
};

export { ButtonAction, GhostButton };
