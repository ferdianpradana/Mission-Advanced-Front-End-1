import axiosClient from "./axiosClient";

export function getMovies() {
    return axiosClient.get("/movies").then((res) => res.data);
}
