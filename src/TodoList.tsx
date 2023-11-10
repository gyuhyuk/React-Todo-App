import { useForm } from "react-hook-form";

interface Form {
  toDo: string;
}

const TodoList = () => {
  const { register, handleSubmit, setValue } = useForm<Form>();

  const handleValid = (data: Form) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please Write a todo",
          })}
          placeholder="Write a to do"
        />
      </form>
    </div>
  );
};

export default TodoList;
