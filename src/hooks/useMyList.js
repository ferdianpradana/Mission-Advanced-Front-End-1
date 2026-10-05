import { useEffect, useState } from "react";
import { getMyList, addToMyList, updateMyListItem, removeFromMyList } from "../services/api/mylist";

export function useMyList() {
    const [myList, setMyList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getMyList()
            .then(setMyList)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    const toggleList = async (movie) => {
        const existing = myList.find((item) => item.movieId === movie.id);
        try {
            if (existing) {
                await removeFromMyList(existing.id);
                setMyList((prev) => prev.filter((item) => item.id !== existing.id));
            } else {
                const created = await addToMyList(movie);
                setMyList((prev) => [...prev, created]);
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const toggleWatched = async (id) => {
        const item = myList.find((entry) => entry.id === id);
        if (!item) return;
        try {
            const updated = await updateMyListItem(id, { watched: !item.watched });
            setMyList((prev) => prev.map((entry) => (entry.id === id ? updated : entry)));
        } catch (err) {
            setError(err.message);
        }
    };

    const removeItem = async (id) => {
        try {
            await removeFromMyList(id);
            setMyList((prev) => prev.filter((entry) => entry.id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    return { myList, loading, error, toggleList, toggleWatched, removeItem };
}
