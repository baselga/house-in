import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { EdibleCreate } from "@/modules/edibles/domain/Edible";
import { EdibleCreateValidatorSchema } from "@/modules/edibles/domain/EdibleValidators";
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
import useEdiblePageContext from "../../context";

const CardAddEdible = () => {
  const { edibleList } = useEdiblePageContext();
  const { mutate: createEdible } = useCreateEdibleMutation();
  const form = useForm<EdibleCreate>({
    resolver: zodResolver(EdibleCreateValidatorSchema),
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
        edibleList.refetch()
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
