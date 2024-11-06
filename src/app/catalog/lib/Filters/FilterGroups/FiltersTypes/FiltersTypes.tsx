import { useQuery } from "@tanstack/react-query";
import { formatFilters } from "../../Filters";
import ButtonFrame from "../../ButtonFrame/ButtonFrame";
import cmsAxios from "@/configs/axios";
import Skeleton from "react-loading-skeleton";

const FiltersTypes = () => {
  const { data } = useQuery({
    queryKey: ["filter-types"],
    queryFn: async () => {
      const result = await cmsAxios.get("/api/filter-types");

      return result.data;
    },
  });
  if (!data)
    return (
      <>
        <Skeleton height={40} width={"50%"} style={{ marginBottom: "10px" }} />
        <Skeleton height={40} width={"80%"} style={{ marginBottom: "10px" }} />
        <Skeleton height={40} width={"70%"} style={{ marginBottom: "10px" }} />
        <Skeleton height={40} width={"50%"} />
      </>
    );

  const parameters = formatFilters(data);
  return (
    <>
      {parameters.map((item) => {
        return (
          <ButtonFrame value={item.value} title={item.title} key={item.value} />
        );
      })}
    </>
  );
};

export default FiltersTypes;
