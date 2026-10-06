# Chill — Movie Streaming Platform (Mission 2: State Management + API Integration)

Aplikasi frontend React untuk platform streaming film "Chill", dibuat sebagai Mission 2 menggunakan Vite + React + Tailwind CSS. Data film dan Daftar Saya dilayani oleh fake API di [mockapi.io](https://mockapi.io), diakses lewat Axios, dan disimpan di state global Redux Toolkit.

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
- **Dashboard** (`/dashboard`) — homepage berisi hero banner dan daftar film per kategori, semuanya diambil dari API lewat Redux store.

## Step 1 — Fake API / Mock Data

Fake API dibuat di **mockapi.io**, dengan dua resource:
- `movies` — katalog film (hasil `GET`), tiap item punya field `category` (`continueWatching` / `topRating` / `trending` / `newReleases`) yang menentukan baris mana di homepage.
- `mylist` — watchlist pribadi user, resource ini yang didukung full CRUD (`GET`, `ADD`, `UPDATE`, `DELETE`).

## Step 2 — Integrasi API (Axios)

```
src/services/api/
  axiosClient.js   # instance axios + base URL dari .env + interceptor (logging & error)
  movies.js        # getMovies()
  mylist.js        # getMyList(), addToMyList(), updateMyListItem(), removeFromMyList()
```

Base URL API disimpan di `.env` sebagai `VITE_API_BASE_URL` (lihat `.env.example`), bukan di-hardcode di kode.

## Step 3 — State Management (Redux Toolkit)

```
src/store/redux/
  store.js          # configureStore, daftarin semua reducer di sini
  moviesSlice.js     # initial state [] + reducer buat nyimpen hasil GET /movies
  mylistSlice.js      # initial state [] + reducer buat GET/ADD/UPDATE/DELETE /mylist
```

`store.js` disambungkan ke root app lewat `<Provider store={store}>` di [`src/main.jsx`](src/main.jsx), jadi semua komponen di bawahnya bisa akses state global ini.

Tiap operasi API (get/add/update/delete) dibungkus `createAsyncThunk` — begitu promise-nya selesai, reducer di `extraReducers` yang update state global-nya (array `items`).

## Step 4 — Integrasi API ke Tampilan React

Di [`Dashboard.jsx`](src/pages/dashboard/dashboard.jsx) (komponen "ListView"-nya):
- `useSelector` buat ambil data `movies` dan `mylist` dari Redux store.
- `useDispatch` + thunk (`fetchMovies`, `fetchMyList`, `addMovieToList`, `updateMyListMovie`, `removeMovieFromList`) buat trigger operasi API, hasilnya otomatis ke-update ke state global lewat reducer.

## Fitur Interaktif: Daftar Saya (My List)

CRUD penuh, lewat API + Redux, hasilnya tampil di homepage (Dashboard):

| Operasi | Cara pakai | Alur |
| --- | --- | --- |
| **Create** | Klik tombol `+` pada poster/thumbnail film di baris mana pun | `dispatch(addMovieToList())` → `POST /mylist` → reducer push ke state |
| **Read** | Film yang sudah ditambahkan otomatis muncul di baris "Daftar Saya" | `dispatch(fetchMyList())` → `GET /mylist` → `useSelector` baca state |
| **Update** | Klik tombol "Tandai" untuk status sudah/belum ditonton | `dispatch(updateMyListMovie())` → `PATCH /mylist/:id` → reducer replace item di state |
| **Delete** | Klik ikon tempat sampah | `dispatch(removeMovieFromList())` → `DELETE /mylist/:id` → reducer filter state |

Catatan desain: tiap entri di `mylist` punya `id` miliknya sendiri (digenerate mockapi.io) dan field `movieId` yang merujuk ke film aslinya di `movies` — dipisah karena mockapi.io tidak mengizinkan kita menentukan `id` sendiri saat `POST`.

## Tech Stack

- React 19 + Vite
- React Router DOM (routing antar halaman)
- Redux Toolkit + React Redux (state management)
- Tailwind CSS (styling)
- Axios (HTTP client)
- mockapi.io (fake API)
