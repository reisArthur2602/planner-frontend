import { forwardRef } from 'react';
import * as S from './styles';
interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
interface ITextArea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ label, ...rest }: IInput, ref) => {
    return (
      <S.InputContainer>
        <span>{label}</span>
        <input {...rest} ref={ref} />
      </S.InputContainer>
    );
  }
);

const Textarea = forwardRef<HTMLTextAreaElement, ITextArea>(
  ({ label, ...rest }: ITextArea, ref) => {
    return (
      <S.TextAreaContainer>
        <span>{label}</span>
        <textarea {...rest} ref={ref} />
      </S.TextAreaContainer>
    );
  }
);

export { Input, Textarea };
