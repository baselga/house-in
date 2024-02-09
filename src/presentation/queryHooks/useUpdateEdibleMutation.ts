import { EdibleService } from "@/modules/edibles/application/service/EdibleService";
import { EdibleRepository } from "@/modules/edibles/domain/EdibleRepository";
import { useMutation } from "react-query";
import useRepositoryContext from "../helpers/repositoryContext";

const useUpdateEdibleMutation = () => {
  const repository = useRepositoryContext<EdibleRepository>("edible");
  const service = EdibleService(repository);
  const mutation = useMutation(service.updateEdible);
  return { ...mutation };
};

export default useUpdateEdibleMutation;
