import { useContext } from 'react';
import { LateContext } from '../context/late/LateContext';


export const useLate = () => {
  return useContext(LateContext);
};
