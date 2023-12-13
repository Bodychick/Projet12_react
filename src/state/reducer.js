export const initialState = {
  employees: [],
  };

  export const ADD_EMPLOYEE="ADD_EMPLOYEE";
  export const removeEmployee="REMOVE_EMPLOYEE";

  export function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_EMPLOYEE:
          return {
            ...state,
            employees: [...state.employees, action.payload],
          };
      case removeEmployee:
        return {
          ...state,
        };
      default:
        return state;
    }
  }
  
  