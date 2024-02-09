import TextFormInput from "@/presentation/components/atoms/form/TextFormInput";
import { Button } from "@/presentation/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/presentation/components/ui/card";
import { Form } from "@/presentation/components/ui/form";
import useAuthContext from "@/presentation/helpers/authContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";


const validatorSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})
type LoginFormType = z.infer<typeof validatorSchema>;

const LoginPage = () => {
  const authContext = useAuthContext();
  const form = useForm<LoginFormType>({
    resolver: zodResolver(validatorSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = useCallback(
    (data: LoginFormType) => {
      console.log("dani onSubmit", data)
      authContext.login(data);
    },
    [authContext],
  )
  

  return (
    <div className="grid h-screen place-items-center bg-slate-200">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="w-96 bg-slate-100 shadow-lg">
            <CardHeader>
              <h1 className="text-2xl font-bold text-center text-slate-900">House In</h1>
            </CardHeader>
            <CardContent>
              <TextFormInput 
                label="Email"
                source="email"
              />
              <TextFormInput 
                label="Contraseña"
                source="password"
                type="password"
              />
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Entrar</Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};

export default LoginPage;
