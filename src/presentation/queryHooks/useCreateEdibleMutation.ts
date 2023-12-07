import { EdibleService } from "@/modules/edibles/application/service/EdibleService";
import { ApiEdibleRepository } from "@/modules/edibles/infraestructure/ApiEdibleRepository";
import { useMutation } from "react-query";

const useCreateEdibleMutation = () => {
  const service = EdibleService(ApiEdibleRepository)
  const mutation = useMutation(service.createEdible);
  return { ...mutation };
};

export default useCreateEdibleMutation;
