import axiosClient from "./axiosClient";

export async function fetchLikedPeople() {
  const res = await axiosClient.get("/liked");
  return res.data;
}
