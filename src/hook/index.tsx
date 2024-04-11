import { useEffect, useState } from "react";
import { fetchDataPlants } from "../api/api-plants";

export function useFetchBuscarPlantas() {
  interface props {
    label: string;
    imgPath: string;
  }

  const [data, setData] = useState<props[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await fetchDataPlants();
      if (typeof res === "string") {
        setData([]);
      } else {
        setData(
          res.map((item) => ({
            label: item.common_name,
            imgPath: item.default_image?.regular_url ?? "",
          }))
        );
      }
    };
    fetch();
  }, []);

  return {
    images: data.filter((element) => element.imgPath != ""),
    tamanho: data.length,
  };
}
