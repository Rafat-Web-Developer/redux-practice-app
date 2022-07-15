import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTodos } from "../../Redux/Actions/TodosAction";
import "./Todos.css";

const Todos = () => {
  const { isLoading, todos, error } = useSelector(
    (state) => state.getTodosReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div>
      <h2>Todo App</h2>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error.message}</h3>}
      {todos && (
        <section className="todos">
          {todos.map((todo) => {
            const { id, title } = todo;
            return (
              <article key={id} style={{ backgroundColor: "blue" }}>
                <h5>{title}</h5>
              </article>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default Todos;
