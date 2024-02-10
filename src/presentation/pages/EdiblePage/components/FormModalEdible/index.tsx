import { zodResolver } from "@hookform/resolvers/zod";

import { Edible } from "@/modules/edibles/domain/Edible";
import { EdibleValidatorSchema } from "@/modules/edibles/domain/EdibleValidators";
import NumberFormInput from "@/presentation/components/atoms/form/NumberFormInput";
import TextFormInput from "@/presentation/components/atoms/form/TextFormInput";
import FormModal from "@/presentation/components/templates/FormModal";
import { Button } from "@/presentation/components/ui/button";
import useFormModalEdible from "./useFormModalEdible";
import SelectFormInput from "@/presentation/components/atoms/form/SelectFormInput";
import useGetAllEdibleCategories from "@/presentation/queryHooks/useGetAllEdibleCategories";
import { useMemo } from "react";

const FormModalEdible = () => {
  const { isOpen, edible, close, isFetched, onSubmit } = useFormModalEdible();
  const { data: categoies, isLoading: categoriesIsLoading } =
    useGetAllEdibleCategories();

  const categoriOptions = useMemo(() => {
    if (!categoies?.data) {
      return [];
    }
    return categoies?.data?.map((each) => ({
      label: each.name,
      value: each.id,
    }));
  }, [categoies?.data]);

  if (!isOpen || (isOpen && !isFetched)) {
    return null;
  }

  return (
    <FormModal<Edible>
      isOpen={isOpen}
      close={close}
      title={`Editar: ${edible?.name}`}
      actions={<Button type="submit">Guardar</Button>}
      onSubmit={onSubmit}
      formProps={{
        resolver: zodResolver(EdibleValidatorSchema),
        values: edible,
      }}
    >
      <div className="flex flex-col gap-4">
        <TextFormInput label="Nombre" source="name" />
        <SelectFormInput
          label="Categorias"
          source="categoryIds"
          options={categoriOptions}
          disabled={categoriesIsLoading}
          multiple
          isClearable
        />
        <NumberFormInput label="Stock" source="stock" />
        <NumberFormInput label="Mínimo" source="minStock" />
        <NumberFormInput label="Óptimo" source="optimalStock" />
      </div>
    </FormModal>
  );
};

export default FormModalEdible;
