import React, { createContext } from 'react';

interface ITaskContext {}
type Props = React.PropsWithChildren;

const TaskContext = createContext({} as ITaskContext);

const TaskProvider = ({ children }: Props) => {
  return <TaskContext.Provider value={{}}>{children}</TaskContext.Provider>;
};

export { TaskContext, TaskProvider };
