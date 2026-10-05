import axiosClient from "./axiosClient";

export function getMyList() {
    return axiosClient.get("/mylist").then((res) => res.data);
}

export function addToMyList(movie) {
    const { id, ...movieData } = movie;
    return axiosClient.post("/mylist", { ...movieData, movieId: id, watched: false }).then((res) => res.data);
}

export function updateMyListItem(id, data) {
    return axiosClient.patch(`/mylist/${id}`, data).then((res) => res.data);
}

export function removeFromMyList(id) {
    return axiosClient.delete(`/mylist/${id}`).then((res) => res.data);
}
