# Chill — Movie Streaming Platform (Mission 2: API Integration)

Aplikasi frontend React untuk platform streaming film "Chill", dibuat sebagai Mission 2 (integrasi API) menggunakan Vite + React + Tailwind CSS. Data film dan Daftar Saya dilayani oleh fake API di [mockapi.io](https://mockapi.io), diakses lewat Axios.

## Menjalankan Proyek

```bash
npm install
cp .env.example .env   # lalu isi VITE_API_BASE_URL dengan URL project mockapi.io kamu
npm run dev
```

Buka `http://localhost:5173`.

## Halaman

- **Login** (`/login`) — form masuk.
- **Register** (`/register`) — form daftar akun.
- **Dashboard** (`/dashboard`) — homepage berisi hero banner dan daftar film per kategori, semuanya diambil dari API.

## Step 1 — Fake API / Mock Data

Fake API dibuat di **mockapi.io**, dengan dua resource:
- `movies` — katalog film (hasil `GET`), tiap item punya field `category` (`continueWatching` / `topRating` / `trending` / `newReleases`) yang menentukan baris mana di homepage.
- `mylist` — watchlist pribadi user, resource ini yang didukung full CRUD (`GET`, `ADD`, `UPDATE`, `DELETE`).

mockapi.io otomatis menyediakan REST endpoint standar dari resource itu: `GET/POST /movies`, `GET/POST/PUT/DELETE /mylist/:id`, dst.

## Step 2 — Integrasi API (Axios)

```
src/services/api/
  axiosClient.js   # instance axios + base URL dari .env + interceptor (logging & error)
  movies.js        # getMovies()
  mylist.js        # getMyList(), addToMyList(), updateMyListItem(), removeFromMyList()

src/hooks/
  useMovies.js     # custom hook: fetch katalog film, kelompokkan per kategori
  useMyList.js     # custom hook: fetch watchlist + fungsi CRUD (toggleList, toggleWatched, removeItem)
```

Base URL API disimpan di `.env` sebagai `VITE_API_BASE_URL` (lihat `.env.example`), bukan di-hardcode di kode — supaya gampang ganti kalau API-nya dipindah.

## Fitur Interaktif: Daftar Saya (My List)

CRUD penuh, seluruhnya lewat API, dan hasilnya tampil di homepage (Dashboard):

| Operasi | Cara pakai | Fungsi service |
| --- | --- | --- |
| **Create** | Klik tombol `+` pada poster/thumbnail film di baris mana pun | `addToMyList()` → `POST /mylist` |
| **Read** | Film yang sudah ditambahkan otomatis muncul di baris "Daftar Saya" | `getMyList()` → `GET /mylist` |
| **Update** | Klik tombol "Tandai" pada kartu di "Daftar Saya" untuk status sudah/belum ditonton | `updateMyListItem()` → `PATCH /mylist/:id` |
| **Delete** | Klik ikon tempat sampah pada kartu di "Daftar Saya" | `removeFromMyList()` → `DELETE /mylist/:id` |

Catatan desain: tiap entri di `mylist` punya `id` miliknya sendiri (digenerate mockapi.io) dan field `movieId` yang merujuk ke film aslinya di `movies` — dipisah karena mockapi.io tidak mengizinkan kita menentukan `id` sendiri saat `POST`.

## Tech Stack

- React 19 + Vite
- React Router DOM (routing antar halaman)
- Tailwind CSS (styling)
- Axios (HTTP client)
- mockapi.io (fake API)
