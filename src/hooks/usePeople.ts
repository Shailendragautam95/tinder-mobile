import { useQuery } from "@tanstack/react-query";
import axiosClient from "../lib/axiosClient";

async function fetchPeople() {
  const res = await axiosClient.get("/people");
  return res.data.data; // ← important: .data.data because Laravel pagination
}

export default function usePeople() {
  return useQuery({
    queryKey: ["people"],
    queryFn: fetchPeople,
  });
}
