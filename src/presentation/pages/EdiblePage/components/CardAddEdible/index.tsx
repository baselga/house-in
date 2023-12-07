import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { EdibleCreate } from "@/modules/edibles/domain/Edible";
import ButtonIcon from "@/presentation/components/atoms/ButtonIcon";
import NumberFormInput from "@/presentation/components/atoms/form/NumberFormInput";
import TextFormInput from "@/presentation/components/atoms/form/TextFormInput";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/presentation/components/ui/card";
import { Form } from "@/presentation/components/ui/form";
import useCreateEdibleMutation from "@/presentation/queryHooks/useCreateEdibleMutation";

const formSchema = z
  .object({
    name: z.string().min(2, {
      message: "El nombre debe tener al menos 2 carácteres",
    }),
    stock: z.coerce.number(),
    minStock: z.coerce.number().min(1),
    optimalStock: z.coerce.number().min(1),
  })
  .refine((data) => data.optimalStock >= data.minStock, {
    message: "El stock óptimo debe ser mayor al mínimo.",
    path: ["optimalStock"],
  });

type CardAddEdibleProp = {
  onSuccess?: () => void;
};

const CardAddEdible = ({ onSuccess }: CardAddEdibleProp) => {
  const { mutate: createEdible } = useCreateEdibleMutation();
  const form = useForm<EdibleCreate>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      stock: undefined,
      minStock: undefined,
      optimalStock: undefined,
    },
  });

  function onSubmit(values: EdibleCreate) {
    createEdible(values, {
      onSuccess: () => {
        form.reset({
          name: "",
          stock: 0,
          minStock: 0,
          optimalStock: 0,
        });
        if (onSuccess) {
          onSuccess();
        }
      },
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Añadir producto</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="flex gap-2 w-full items-start"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <TextFormInput label="Nombre" source="name" />
            <NumberFormInput label="Stock" source="stock" />
            <NumberFormInput label="Mínimo" source="minStock" />
            <NumberFormInput label="Óptimo" source="optimalStock" />
            <ButtonIcon
              icon="Plus"
              variant="default"
              type="submit"
              className="flex-shrink-0 mt-8"
            />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CardAddEdible;
