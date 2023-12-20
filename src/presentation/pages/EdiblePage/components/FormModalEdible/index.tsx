import { zodResolver } from "@hookform/resolvers/zod";

import { Edible } from "@/modules/edibles/domain/Edible";
import { EdibleValidatorSchema } from "@/modules/edibles/domain/EdibleValidators";
import NumberFormInput from "@/presentation/components/atoms/form/NumberFormInput";
import TextFormInput from "@/presentation/components/atoms/form/TextFormInput";
import FormModal from "@/presentation/components/templates/FormModal";
import { Button } from "@/presentation/components/ui/button";
import useFormModalEdible from "./useFormModalEdible";

const FormModalEdible = () => {
  const { isOpen, edible, close, isLoading, onSubmit } = useFormModalEdible();

  if (!isOpen || isLoading) {
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
        defaultValues: edible,
      }}
    >
      <div className="flex flex-col gap-4">
        <TextFormInput label="Nombre" source="name" />
        <NumberFormInput label="Stock" source="stock" />
        <NumberFormInput label="Mínimo" source="minStock" />
        <NumberFormInput label="Óptimo" source="optimalStock" />
      </div>
    </FormModal>
  );
};

export default FormModalEdible;
