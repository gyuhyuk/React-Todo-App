import { useForm } from "react-hook-form";

const TodoList = () => {
  const { register, handleSubmit, formState } = useForm();
  const onVaild = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onVaild)}
      >
        <input {...register("Email", { required: true })} placeholder="Email" />
        <input
          {...register("firstname", { required: true })}
          placeholder="First Name"
        />
        <input
          {...register("lastname", { required: true })}
          placeholder="Last Name"
        />
        <input
          {...register("username", { required: true, minLength: 10 })}
          placeholder="Username"
        />
        <input
          {...register("password", { required: true, minLength: 10 })}
          placeholder="Password"
        />
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "your password is too short",
            },
          })}
          placeholder="Password1"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoList;
