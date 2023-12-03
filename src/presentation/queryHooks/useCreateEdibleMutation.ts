import { edibleService } from "@/domain/entities/Edible/Edible.service";
import { useMutation } from "react-query";

const useCreateEdibleMutation = () => {
  const mutation = useMutation(edibleService.createEdible);
  return { ...mutation };
};

export default useCreateEdibleMutation;
