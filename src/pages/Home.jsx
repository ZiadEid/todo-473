import { useNavigate } from "react-router";
import AddButton from "../components/shared/AddButton";
import DeleteButton from "../components/shared/DeleteButton";
import EditButton from "../components/shared/EditButton";
import { useContext, useEffect, useState } from "react";
import { GlobalStore } from "../stores/MainStore";
import axios from "axios";
import TodoSkeleton from "../components/TodoSkeleton";
import ErrorMessage from "../feedback/Errors/ErrorMessage";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  // Hooks
  const navigate = useNavigate();
  const { base_url, token, userData } = useContext(GlobalStore);
  // Protected Route
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  // State
  const [todo, setTodo] = useState("");
  const [formBtn, setFormBtn] = useState("Add Task");
  const [updatedId, setUpdatedId] = useState(null);

  // Vars
  const endpoint = "todos";
  const filterByUser = `filters[user][documentId][$eq]=${userData?.documentId}`;

  // Functions
  // Get Todos

  const {
    data: todos,
    isLoading: loading,
    error,
    refetch
  } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await axios.get(`${base_url}/${endpoint}?${filterByUser}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data.data;
    },
    staleTime: 1000,
  });

  const todoSkeletonList = () => {
    return (
      <div>
        <TodoSkeleton />
        <TodoSkeleton />
      </div>
    );
  };

  // Create Todo
  async function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      name: todo,
      user: userData.documentId,
    };

    try {
      if (formBtn.toLowerCase() == "add task") {
        await axios.post(
          `${base_url}/${endpoint}`,
          {
            data: newTodo,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        toast.success("Task Created Successfully", {
          duration: 2000,
        });
      } else {
        await axios.put(
          `${base_url}/${endpoint}/${updatedId}`,
          {
            data: newTodo,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        setFormBtn("Add Task");
        toast.success("Task Updated Successfully", {
          duration: 2000,
        });
      }
      refetch()
      setTodo("");
      setUpdatedId(null);
    } catch (error) {
      toast.error(error.response.data.error.message, {
        duration: 5000,
      });
    }
  }

  // Delete Todo
  const deleteTodo = async (documentId) => {
    try {
      const res = await axios.delete(`${base_url}/${endpoint}/${documentId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success("Task Deleted Successfully", {
        duration: 3000,
      });
      refetch()
    } catch (error) {
      toast.error(error.response.data.error.message, {
        duration: 5000,
      });
    }
  };

  // Edit Functions
  function getData(documentId) {
    const todo = todos.find((todo) => todo.documentId == documentId);
    setTodo(todo.name);
    setFormBtn("Update Task");
    setUpdatedId(documentId);
  }

  return (
    <div className="h-full flex flex-col gap-8 items-center mt-10">
      <h1 className="text-center text-4xl font-bold">
        Welcome {""}
        <span className="hover:text-indigo-500 duration-300">
          {userData?.username}
        </span>
      </h1>

      <form onSubmit={handleSubmit} className="flex gap-4 px-4 w-full">
        <input
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          value={todo}
          type="text"
          placeholder="write your task here.."
          className="grow py-1 px-3 outline-0 border border-gray-300 hover:border-2 hover:border-indigo-500 rounded-lg "
        />
        <AddButton>{formBtn}</AddButton>
      </form>

      <div className="tasks w-full flex flex-col gap-4">
        {loading ? (
          todoSkeletonList()
        ) : error ? (
          <ErrorMessage />
        ) : (
          todos.map(({ id, documentId, name }) => (
            <div
              key={documentId}
              className="group/parent task flex justify-between items-center shadow rounded-lg p-4"
            >
              <h2 className="relative overflow-hidden font-bold text-lg tracking-wide uppercase">
                {name}
                <span className="absolute bottom-0 right-full group-hover/parent:right-0 duration-300 block w-full h-0.5 bg-indigo-500"></span>
              </h2>
              <div className="icons flex items-center gap-2">
                <EditButton id={documentId} handleClick={getData} />
                <DeleteButton id={documentId} handleClick={deleteTodo} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
