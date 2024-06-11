import React, { createContext, useReducer} from "react";
import AppReducer from '../Context/AppReducer';

// initial state
const primaryState = {
    transactions: []
}

// Global Context
export const GlobalContext = createContext(primaryState);

// Provider Component
export const GlobalProvider = ( { children } ) => {
    const [state, dispatch] = useReducer(AppReducer, primaryState)
    
// Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        { children }
    </GlobalContext.Provider>)
}