import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import signUpBackground from "~/assets/images/sign-up.png";
import { Button, FormControl, InputForm, LabelForm } from "~/components";
import { useLogin } from "~/modules/auth/hooks";
import { LoginSchemaType, loginSchema } from "~/modules/auth/validations";

const SignIn = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const { mutate } = useLogin();

  const onSubmit: SubmitHandler<LoginSchemaType> = (data) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/dashboard");
      },
    });
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-none justify-center items-center w-2/5 px-24 bg-[#F6F8FE]">
        <div className="flex flex-col w-full gap-y-4">
          <FormControl>
            <LabelForm>Nombre de Usuario</LabelForm>
            <InputForm placeholder="" {...register("username")} />
          </FormControl>
          <FormControl>
            <LabelForm>Contrasena</LabelForm>
            <InputForm {...register("password")} type="password" />
          </FormControl>
          <Button onClick={handleSubmit(onSubmit)}>Iniciar Sesion</Button>
        </div>
      </div>
      <div className="flex flex-auto justify-center items-center">
        <img alt="background" src={signUpBackground} />
      </div>
      <DevTool control={control} />
    </div>
  );
};

export default SignIn;
