import { EdibleCreate } from "@/modules/edibles/domain/Edible";
import { EdibleCreateValidatorSchema } from "@/modules/edibles/domain/EdibleValidators";
import ButtonIcon from "@/presentation/components/atoms/ButtonIcon";
import NumberFormInput from "@/presentation/components/atoms/form/NumberFormInput";
import SelectFormInput from "@/presentation/components/atoms/form/SelectFormInput";
import TextFormInput from "@/presentation/components/atoms/form/TextFormInput";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/presentation/components/ui/card";
import { Form } from "@/presentation/components/ui/form";
import useCreateEdibleMutation from "@/presentation/queryHooks/useCreateEdibleMutation";
import useGetAllEdibleCategories from "@/presentation/queryHooks/useGetAllEdibleCategories";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useEdiblePageContext from "../../context";

const CardAddEdible = () => {
  const { edibleList } = useEdiblePageContext();
  const { data: categoies, isLoading: categoriesIsLoading } =
    useGetAllEdibleCategories();
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
          categoryIds: [],
        });
        edibleList.refetch();
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
            <SelectFormInput
              label="Categorias"
              source="categoryIds"
              options={
                categoies?.data.map((each) => ({
                  label: each.name,
                  value: each.id,
                })) || []
              }
              multiple
              disabled={categoriesIsLoading}
            />
            <NumberFormInput
              className="max-w-[150px]"
              label="Stock"
              source="stock"
            />
            <NumberFormInput
              className="max-w-[150px]"
              label="Mínimo"
              source="minStock"
            />
            <NumberFormInput
              className="max-w-[150px]"
              label="Óptimo"
              source="optimalStock"
            />
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
