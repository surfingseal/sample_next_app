'use client';
import { createContext } from 'react';
// null 대신 기본값을 숫자(0)로 설정할 수 있습니다.
export const CountContext = createContext<number>(0);