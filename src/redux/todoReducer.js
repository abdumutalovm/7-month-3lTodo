const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      const updatedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return {
        ...state,
        todos: updatedTodos,
      };
    case "TOGGLE_TODO":
      const toggledTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(toggledTodos));
      return {
        ...state,
        todos: toggledTodos,
      };
    default:
      return state;
  }
};

export default todoReducer;
