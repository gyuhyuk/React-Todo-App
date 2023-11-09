import { useForm } from "react-hook-form";

interface FormProps {
  email: string;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  password1: string;
  extraError?: string;
}

const TodoList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormProps>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onVaild = (data: FormProps) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        {
          message: "password are not the same",
        },
        {
          shouldFocus: true,
        }
      );
    }
    // setError("extraError", { message: "Server offline." });
  };
  console.log(errors);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onVaild)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver\.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstname", {
            required: "firstname is required",
            validate: {
              noNico: (value) =>
                !value.includes("nico") ? "no nico allowed" : true,
              noNick: (value) =>
                !value.includes("nick") ? "no nick allowed" : true,
            },
          })}
          placeholder="First Name"
        />
        <span>{errors?.firstname?.message}</span>

        <input
          {...register("lastname", { required: "lastname is required" })}
          placeholder="Last Name"
        />
        <span>{errors?.lastname?.message}</span>

        <input
          {...register("username", {
            required: "username is required",
            minLength: 10,
          })}
          placeholder="Username"
        />
        <span>{errors?.username?.message}</span>

        <input
          {...register("password", {
            required: "password is required",
            minLength: 10,
          })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>

        <input
          {...register("password1", {
            required: "Password1 is required",
            minLength: {
              value: 5,
              message: "your password is too short",
            },
          })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>

        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
};

export default TodoList;
