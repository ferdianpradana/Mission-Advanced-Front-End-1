import { useEffect, useState } from "react";
import { getMovies } from "../services/api/movies";

export function useMovies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;

        getMovies()
            .then((data) => {
                if (!ignore) setMovies(data);
            })
            .catch((err) => {
                if (!ignore) setError(err.message);
            })
            .finally(() => {
                if (!ignore) setLoading(false);
            });

        return () => {
            ignore = true;
        };
    }, []);

    const byCategory = (category) => movies.filter((movie) => movie.category === category);

    return {
        loading,
        error,
        continueWatching: byCategory("continueWatching"),
        topRating: byCategory("topRating"),
        trending: byCategory("trending"),
        newReleases: byCategory("newReleases"),
    };
}
