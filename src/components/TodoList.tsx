import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const toDoState = atom<Todo[]>({
  key: "toDo",
  default: [],
});

interface Form {
  toDo: string;
}

interface Todo {
  text: string;
  id: number;
  category: "TODO" | "DOING" | "DONE";
}

const TodoList = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<Form>();

  const handleValid = ({ toDo }: Form) => {
    setToDos((oldToDos) => [
      { text: toDo, category: "TODO", id: Date.now() },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  console.log(toDos);

  return (
    <div>
      <h1>To dos</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please Write a todo",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
