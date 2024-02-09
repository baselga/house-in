import { EdibleService } from "@/modules/edibles/application/service/EdibleService";
import { EdibleRepository } from "@/modules/edibles/domain/EdibleRepository";
import { useMutation } from "react-query";
import useRepositoryContext from "../helpers/repositoryContext";

const useCreateEdibleMutation = () => {
  const repository = useRepositoryContext<EdibleRepository>("edible")
  const service = EdibleService(repository)
  const mutation = useMutation(service.createEdible);
  return { ...mutation };
};

export default useCreateEdibleMutation;
