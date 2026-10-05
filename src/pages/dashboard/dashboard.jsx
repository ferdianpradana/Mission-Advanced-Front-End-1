import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { Hero } from "../../components/dashboard/Hero";
import { MovieRow } from "../../components/dashboard/MovieRow";
import { useMovies } from "../../hooks/useMovies";
import { useMyList } from "../../hooks/useMyList";

export function Dashboard() {
    const { continueWatching, topRating, trending, newReleases, loading: moviesLoading, error: moviesError } = useMovies();
    const { myList, loading: myListLoading, error: myListError, toggleList, toggleWatched, removeItem } = useMyList();

    const myListIds = new Set(myList.map((item) => item.movieId));
    const isLoading = moviesLoading || myListLoading;
    const errorMessage = moviesError || myListError;

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
                    Gagal memuat data: {errorMessage}. Pastikan server fake API (json-server) sedang berjalan.
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
                        items={continueWatching}
                        variant="thumbnail"
                        myListIds={myListIds}
                        onToggleList={toggleList}
                    />
                    <MovieRow
                        title="Top Rating Film dan Series Hari ini"
                        items={topRating}
                        variant="poster"
                        myListIds={myListIds}
                        onToggleList={toggleList}
                    />
                    <MovieRow
                        title="Film Trending"
                        items={trending}
                        variant="poster"
                        myListIds={myListIds}
                        onToggleList={toggleList}
                    />
                    <MovieRow
                        title="Rilis Baru"
                        items={newReleases}
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
