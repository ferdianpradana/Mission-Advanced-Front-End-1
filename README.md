# Chill — Movie Streaming Platform (Mission 2)

Aplikasi frontend React untuk platform streaming film "Chill", dibuat sebagai Mission 2 (interactive web) menggunakan Vite + React + Tailwind CSS.

## Menjalankan Proyek

```bash
npm install
npm run dev
```

## Halaman

- **Login** (`/login`) — form masuk.
- **Register** (`/register`) — form daftar akun.
- **Dashboard** (`/dashboard`) — homepage berisi hero banner dan daftar film per kategori.

## Fitur Interaktif: Daftar Saya (My List)

Fitur ini menggunakan `useState` dan array of object untuk mengelola daftar tontonan pribadi pengguna, dengan operasi CRUD lengkap yang seluruhnya tampil di homepage (Dashboard):

| Operasi | Cara pakai | Lokasi |
| --- | --- | --- |
| **Create** | Klik tombol `+` pada poster/thumbnail film di baris "Melanjutkan Tonton Film", "Top Rating", "Trending", atau "Rilis Baru" | Semua baris film di Dashboard |
| **Read** | Film yang sudah ditambahkan otomatis muncul di baris "Daftar Saya" (menampilkan pesan kosong jika belum ada isi) | Baris paling atas Dashboard |
| **Update** | Klik tombol "Tandai" pada kartu di "Daftar Saya" untuk menandai status sudah/belum ditonton | Baris "Daftar Saya" |
| **Delete** | Klik ikon tempat sampah pada kartu di "Daftar Saya" untuk menghapusnya dari daftar | Baris "Daftar Saya" |

### Struktur State

State `myList` (array of object) dikelola di [`src/App.jsx`](src/App.jsx) menggunakan `useState`, lalu di-passing sebagai props ke child component:

```
App.jsx (state: myList, handleToggleList, handleToggleWatched, handleRemoveFromList)
  └─ Dashboard.jsx (props: myList, myListIds, onToggleList, onToggleWatched, onRemoveFromList)
       └─ MovieRow.jsx (props diteruskan ke card)
            ├─ PosterCard.jsx / ThumbnailCard.jsx (tombol tambah ke Daftar Saya)
            └─ MyListCard.jsx (tombol tandai ditonton & hapus)
```

Setiap item pada `myList` berbentuk:

```js
{ id, title, image, gradient, badge, watched }
```

## Tech Stack

- React 19 + Vite
- React Router DOM (routing antar halaman)
- Tailwind CSS (styling)
