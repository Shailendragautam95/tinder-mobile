import { useQuery } from "@tanstack/react-query";
import { fetchLikedPeople } from "../lib/peopleApi";

export default function useLikedPeople() {
  return useQuery({
    queryKey: ["liked-people"],
    queryFn: fetchLikedPeople,
  });
}
