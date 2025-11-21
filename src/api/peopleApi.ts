import { useQuery } from "@tanstack/react-query";
import axiosClient from "./axiosClient";

export const useRecommendedPeople = () => {
  return useQuery({
    queryKey: ["recommended-people"],
    queryFn: async () => {
      const response = await axiosClient.get("/people/recommendations");
      return response.data;
    },
  });
};
