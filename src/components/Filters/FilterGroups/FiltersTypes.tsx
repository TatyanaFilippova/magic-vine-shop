import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { formatFilters } from "../Filters";
import ButtonFrame from "../ButtonFrame";
import cmsAxios from "@/configs/axios";

const FiltersTypes = () =>{
    const { data } = useQuery({
        queryKey: ["filter-types"],
        queryFn: async () => {
          const result = await cmsAxios.get("/api/filter-types")
    
          return result.data;
        },
      });
      if (!data) return null;
    
      const parameters = formatFilters(data);
    return (<>
        {parameters.map((item) => {
            return (
              <ButtonFrame value={item.value} title={item.title} key={item.value} />
            );
          })}
   </> )
}

export default FiltersTypes