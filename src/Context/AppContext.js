import { createContext, useReducer } from "react";

// createContext is what components imports to get access to the state

const AppReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
        return {
            ...state,
            expenses: [...state.expenses, action.payload],
        };

        case 'DELETE_EXPENSE':
        return {
            ...state,
            expenses: state.expenses.filter((expense)=>expense.id !== action.payload),
        };

        default:
            return state;
    }
        
}

const initialState = {
    budget: 2000,
    expenses: [],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <AppContext.Provider 
            value={{
                budget: state.budget,
                expenses: state.expenses,
                cost: state.cost,
                dispatch,
            }}
        >
            {props.children}
            {/* this is any nested component which will be used in the AppProvider*/}

        </AppContext.Provider>
    );

    // App.Context.Provider takes a value prop
    // This value prop is anything we want our connected components to have
    // also takes the dispatch which lets our components dispatch actions that will trigger (Reducer) to update state
}

// PROVIDER
// Or holds the state and passes it to the component
// It's an arrow function that accepts some props
// In order for it to hold the state we have to import (useReducer)

// REDUCER
// when ever we use the reducer it sums up the state (current state), and gives a function (dispatch) that dispatches actions
// the reducer creates the new state object based on the actions it receives
// Uses a switch statement to determine how to change the state