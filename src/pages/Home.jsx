import { Field, Formik } from "formik";
import { Form, useNavigate } from "react-router";
import AddButton from "../components/shared/AddButton";
import DeleteButton from "../components/shared/DeleteButton";
import EditButton from "../components/shared/EditButton";
import { useContext, useEffect, useState } from "react";
import { GlobalStore } from "../stores/MainStore";

export default function Home() {
  // Hooks
  const navigate = useNavigate();
  const { token } = useContext(GlobalStore);
  // Protected Route
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  // State
  const [todos, setTodos] = useState([
    { name: "Eat" },
    { name: "Study" },
    { name: "Play" },
    { name: "Sleep" },
  ]);

  // Functions

  return (
    <div className="h-full flex flex-col gap-8 items-center mt-10">
      <h1 className="text-center text-4xl font-bold">
        Welcome{" "}
        <span className="hover:text-indigo-500 duration-300">Akram</span>
      </h1>

      <form className="flex gap-4 px-4 w-full">
        <input
          type="text"
          placeholder="write your task here.."
          className="grow py-1 px-3 outline-0 border border-gray-300 hover:border-2 hover:border-indigo-500 rounded-lg "
        />
        <AddButton />
      </form>

      <div className="tasks w-full flex flex-col gap-4">
        {todos.map(({ name }, i) => (
          <div
            key={i}
            className="group/parent task flex justify-between items-center shadow rounded-lg p-4"
          >
            <h2 className="relative overflow-hidden font-bold text-lg tracking-wide uppercase">
              {name}
              <span className="absolute bottom-0 right-full group-hover/parent:right-0 duration-300 block w-full h-0.5 bg-indigo-500"></span>
            </h2>
            <div className="icons flex items-center gap-2">
              <EditButton />
              <DeleteButton />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
