# Product Requirement Document (PRD) - Portal KC Jelambar & Headless CMS

## 1. Project Overview
Transformasi portal web Bank BRI KC Jakarta Jelambar dari website statis menjadi web dinamis berbasis Headless CMS dengan dashboard admin terproteksi PIN.

## 2. Tech Stack
- Frontend: React 18, TypeScript (.tsx), Tailwind CSS, Vite
- Database: Cloud Firestore
- Asset Storage: Cloudinary (Unsigned Preset) / Firebase Storage fallback
- Security: Client-side PIN lock (stored in sessionStorage)

## 3. Brand Identity & Design System
- Primary: BRI Navy Blue (`#002F6C` / `bg-blue-900`) & Royal Blue (`#00529B` / `bg-blue-800`)
- Accent: BRI Orange (`#F37021` / `bg-orange-500`)
- Neutrals: Slate-50, Slate-100, Slate-800, White
- Font & Layout: Modern fintech, high-contrast, rounded cards, clean padding.

## 4. Database Schema (Firestore Collections)
1. `banners`:
   - id: string
   - title: string
   - targetHash: string
   - imageUrl: string
   - isActive: boolean
   - order: number
   - updatedAt: timestamp

2. `staff`:
   - id: string
   - name: string
   - role: string
   - cluster: 'SME' | 'Funding' | 'Mikro' | 'Frontliner' | 'Backoffice'
   - phone: string
   - photoUrl: string
   - status: 'active' | 'inactive'
   - order: number

3. `org_structure`:
   - id: string
   - name: string
   - position: string
   - division: string
   - level: 'L1' | 'L2' | 'L3' | 'L4' | 'L5'
   - badge: string
   - phone: string
   - jobdesk: string[]
   - kpi: string[]
   - order: number

4. `activities`:
   - id: string
   - title: string
   - category: 'CSR BRI Peduli' | 'Literasi Finansial' | 'Event & Sosialisasi' | 'Operasional Cabang'
   - date: string (ISO/standard format)
   - author: string
   - excerpt: string
   - content: string
   - imageUrl: string
   - createdAt: timestamp

## 5. Security & Access Gate
- Admin route: `/admin` (tanpa link atau tombol di navbar/footer publik).
- PIN Gate: Validasi PIN dari `VITE_ADMIN_PIN` (`290799`).
- Session: Berhasil buka -> set flag di `sessionStorage` biar pas reload nggak nanya PIN lagi.