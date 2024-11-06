import { useQuery } from "@tanstack/react-query";
import { formatFilters } from "../../Filters";
import { Parameters } from "../../styles";
import ButtonFrame from "../../ButtonFrame/ButtonFrame";
import cmsAxios from "@/configs/axios";
import Skeleton from "react-loading-skeleton";

const FiltersParameters = () => {
  const { data } = useQuery({
    queryKey: ["filter-parameters"],
    queryFn: async () => {
      const result = await cmsAxios.get("/api/filter-parameters");

      return result.data;
    },
  });
  if (!data)
    return (
      <>
        <Parameters>Параметры</Parameters>
        <Skeleton height={40} width={"80%"} style={{ marginBottom: "10px" }} />
        <Skeleton height={40} width={"50%"} />
      </>
    );

  const parameters = formatFilters(data);
  return (
    <>
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
