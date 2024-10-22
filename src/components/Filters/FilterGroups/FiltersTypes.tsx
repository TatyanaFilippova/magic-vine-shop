import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { formatFilters } from "../Filters";
import ButtonFrame from "../ButtonFrame";

const FiltersTypes = () =>{
    const { isLoading, error, data } = useQuery({
        queryKey: ["filter-types"],
        queryFn: async () => {
          const result = await axios.get(
            "http://localhost:1337/api/filter-types"
          );
    
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