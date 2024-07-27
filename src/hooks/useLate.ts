import { useContext } from 'react';
import { LateContext } from '../context/Late/LateContext';

export const useLate = () => {
  return useContext(LateContext);
};
