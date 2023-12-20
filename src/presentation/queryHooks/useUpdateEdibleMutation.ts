import { EdibleService } from "@/modules/edibles/application/service/EdibleService";
import { ApiEdibleRepository } from "@/modules/edibles/infraestructure/ApiEdibleRepository";
import { useMutation } from "react-query";

const useUpdateEdibleMutation = () => {
  const service = EdibleService(ApiEdibleRepository)
  const mutation = useMutation(service.updateEdible);
  return { ...mutation };
};

export default useUpdateEdibleMutation;
