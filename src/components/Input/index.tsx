import { forwardRef } from 'react';
import * as S from './styles';
interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helptext?: string;
}
interface ITextArea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  helptext?: string;
}

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ label, helptext, ...rest }: IInput, ref) => {
    return (
      <S.InputContainer>
        <span>{label}</span>
        <input {...rest} ref={ref} />
        {helptext && <S.HelpText>{helptext}</S.HelpText>}
      </S.InputContainer>
    );
  }
);

const Textarea = forwardRef<HTMLTextAreaElement, ITextArea>(
  ({ label, helptext, ...rest }: ITextArea, ref) => {
    return (
      <S.TextAreaContainer>
        <span>{label}</span>
        <textarea {...rest} ref={ref} />
        {helptext && <S.HelpText>{helptext}</S.HelpText>}
      </S.TextAreaContainer>
    );
  }
);

export { Input, Textarea };
