import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { formatFilters, Parameters } from "../Filters";
import ButtonFrame from "../ButtonFrame";
import cmsAxios from "@/configs/axios";

const FiltersParameters = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["filter-parameters"],
    queryFn: async () => {
      const result = await cmsAxios.get("/api/filter-parameters");

      return result.data;
    },
  });
  if (!data) return null;

  const parameters = formatFilters(data);
  return (
    <>
      {" "}
      <Parameters>Параметры</Parameters>
      {parameters?.map((item) => {
        return (
          <ButtonFrame value={item.value} title={item.title} key={item.value} />
        );
      })}
    </>
  );
};

export default FiltersParameters;
