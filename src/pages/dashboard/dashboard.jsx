import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { Hero } from "../../components/dashboard/Hero";
import { MovieRow } from "../../components/dashboard/MovieRow";
import { fetchMovies } from "../../store/redux/moviesSlice";
import { fetchMyList, addMovieToList, updateMyListMovie, removeMovieFromList } from "../../store/redux/mylistSlice";

export function Dashboard() {
    const dispatch = useDispatch();

    const { items: movies, status: moviesStatus, error: moviesError } = useSelector((state) => state.movies);
    const { items: myList, status: myListStatus, error: myListError } = useSelector((state) => state.mylist);

    useEffect(() => {
        dispatch(fetchMovies());
        dispatch(fetchMyList());
    }, [dispatch]);

    const byCategory = (category) => movies.filter((movie) => movie.category === category);
    const myListIds = new Set(myList.map((item) => item.movieId));

    const isLoading = moviesStatus === "loading" || myListStatus === "loading";
    const errorMessage = moviesError || myListError;

    const toggleList = (movie) => {
        const existing = myList.find((item) => item.movieId === movie.id);
        if (existing) {
            dispatch(removeMovieFromList(existing.id));
        } else {
            dispatch(addMovieToList(movie));
        }
    };

    const toggleWatched = (id) => {
        const item = myList.find((entry) => entry.id === id);
        if (!item) return;
        dispatch(updateMyListMovie({ id, data: { watched: !item.watched } }));
    };

    const removeItem = (id) => {
        dispatch(removeMovieFromList(id));
    };

    return (
        <div className="min-h-screen bg-[#0b0b0f]">
            <Navbar />

            <Hero
                title="Duty After School"
                description="Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang."
                ageRating="18+"
            />

            {isLoading && <p className="px-4 py-6 text-sm text-white/50 sm:px-6 md:px-10">Memuat data film...</p>}
            {errorMessage && (
                <p className="px-4 py-6 text-sm text-red-400 sm:px-6 md:px-10">
                    Gagal memuat data: {errorMessage}. Pastikan VITE_API_BASE_URL sudah benar dan API-nya bisa diakses.
                </p>
            )}

            {!isLoading && !errorMessage && (
                <>
                    <MovieRow
                        title="Daftar Saya"
                        items={myList}
                        variant="mylist"
                        onToggleWatched={toggleWatched}
                        onRemove={removeItem}
                        emptyMessage="Belum ada film di daftar kamu. Tekan tombol + pada film di bawah untuk menambahkannya."
                    />
                    <MovieRow
                        title="Melanjutkan Tonton Film"
                        items={byCategory("continueWatching")}
                        variant="thumbnail"
                        myListIds={myListIds}
                        onToggleList={toggleList}
                    />
                    <MovieRow
                        title="Top Rating Film dan Series Hari ini"
                        items={byCategory("topRating")}
                        variant="poster"
                        myListIds={myListIds}
                        onToggleList={toggleList}
                    />
                    <MovieRow
                        title="Film Trending"
                        items={byCategory("trending")}
                        variant="poster"
                        myListIds={myListIds}
                        onToggleList={toggleList}
                    />
                    <MovieRow
                        title="Rilis Baru"
                        items={byCategory("newReleases")}
                        variant="poster"
                        myListIds={myListIds}
                        onToggleList={toggleList}
                    />
                </>
            )}

            <Footer />
        </div>
    );
}
