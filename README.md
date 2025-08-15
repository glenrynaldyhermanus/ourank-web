# Ourank Web

Platform Management Orang yang dibangun dengan Next.js 14 dan TypeScript.

## Fitur

- 🏠 **Dashboard** - Overview lengkap aktivitas management orang
- 👥 **Talent Pool** - Manajemen kandidat dan pencarian talent
- 🏢 **Companies** - Direktori perusahaan dan informasi
- 📋 **Assessments** - Sistem penilaian dan tes kandidat
- 🎯 **Interviews** - Penjadwalan dan manajemen wawancara
- 👤 **Profile** - Manajemen profil pengguna

## Teknologi

- **Next.js 14** - Framework React dengan App Router
- **TypeScript** - Type safety dan developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **ESLint** - Code linting

## Struktur Proyek

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── dashboard/         # Dashboard pages
│   ├── assessments/       # Assessment pages
│   ├── interviews/        # Interview pages
│   ├── companies/         # Company pages
│   ├── talent-pool/       # Talent pool pages
│   └── profile/           # Profile pages
├── components/            # Reusable components
│   └── Header.tsx        # Navigation header
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm atau yarn

### Installation

1. Clone repository

```bash
git clone <repository-url>
cd ourank-web
```

2. Install dependencies

```bash
npm install
```

3. Jalankan development server

```bash
npm run dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser

### Scripts

- `npm run dev` - Development server
- `npm run build` - Build untuk production
- `npm run start` - Start production server
- `npm run lint` - Lint code

## Struktur Halaman

### Dashboard (`/dashboard`)

- Statistik management orang
- Aktivitas terbaru
- Interview hari ini
- Quick actions

### Assessments (`/assessments`)

- Daftar assessment
- Status dan skor
- Filter dan pencarian

### Interviews (`/interviews`)

- Penjadwalan wawancara
- Status interview
- Join call functionality

### Companies (`/companies`)

- Direktori perusahaan
- Informasi detail
- Contact information

### Talent Pool (`/talent-pool`)

- Daftar kandidat
- Skill dan rating
- Contact kandidat

### Profile (`/profile`)

- Informasi pengguna
- Edit profile
- Account settings

## Development

### Menambah Halaman Baru

1. Buat folder di `src/app/[nama-halaman]/`
2. Buat file `page.tsx` dengan komponen React
3. Tambahkan `'use client'` directive jika menggunakan hooks

### Menambah Komponen

1. Buat file di `src/components/`
2. Export komponen sebagai default
3. Import di halaman yang diperlukan

### Styling

- Gunakan Tailwind CSS classes
- Custom colors tersedia di `tailwind.config.ts`
- Responsive design dengan breakpoints Tailwind

## Deployment

### Vercel (Recommended)

1. Push ke GitHub
2. Connect repository di Vercel
3. Deploy otomatis

### Manual Build

```bash
npm run build
npm run start
```

## Contributing

1. Fork repository
2. Buat feature branch
3. Commit changes
4. Push ke branch
5. Buat Pull Request

## License

MIT License
