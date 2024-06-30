import { apiAxios } from '../utils/api-axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { TaskSchema } from '../schemas/taskSchema';
import { TaskFormProps, TaskResponse } from '../types/task';
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  useForm,
} from 'react-hook-form';

import { TaskContext } from '../context/TaskContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

interface IUseCreateTask {
  handleSubmit: UseFormHandleSubmit<TaskFormProps>;
  register: UseFormRegister<TaskFormProps>;
  onSubmit: (data: TaskFormProps) => void;
  errors: FieldErrors<TaskFormProps>;
}

export const useCreateTask = (): IUseCreateTask => {
  const { category } = useContext(TaskContext);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<TaskFormProps>({
    resolver: zodResolver(TaskSchema),
  });

  const onSubmit = async (data: TaskFormProps) => {
    const { date, time, description, title } = data;

    const formatData = {
      type: category,
      title,
      description,
      when: `${date}T${time}:00.000`,
    };
    try {
      await apiAxios.post('/', formatData);
      navigate('/');
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return { handleSubmit, onSubmit, register, errors };
};
