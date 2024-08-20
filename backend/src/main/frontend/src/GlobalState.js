// GlobalState.js
import React, { createContext, useReducer, useContext } from 'react';

// 초기 상태
const initialState = {
    id: null, // userId를 id로 변경
};

// 리듀서 함수
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_ID': // 'SET_USER_ID'를 'SET_ID'로 변경
            return { ...state, id: action.payload }; // userId를 id로 변경
        default:
            return state;
    }
};

// Context 생성
const GlobalStateContext = createContext();

// Provider 컴포넌트
export const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalStateContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

// Custom hook to use the global state
export const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (context === undefined) {
        throw new Error('useGlobalState must be used within a GlobalStateProvider');
    }
    return context;
};
