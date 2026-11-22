# 📸 Creekmore Case Study - Asset Upload Guide

## ✅ Sudah Selesai
- ✅ Creekmore ditambahkan ke list projects (posisi pertama, sebelah Credit Simulation)
- ✅ Routing `/work/creekmore` sudah dibuat
- ✅ Halaman case study lengkap dengan struktur dan styling
- ✅ Responsive design (desktop & mobile)
- ✅ Next project navigation (ke Digiroom)

## 📁 Asset yang Perlu Di-Upload

### 1. **Thumbnail untuk Project List**
**Lokasi**: `/public/assets/projects/creekmore.png`
- Ukuran: Landscape (misal 1600x900px atau 16:9 ratio)
- Format: PNG atau JPG
- Ini akan muncul di halaman `/work` sebagai thumbnail card

### 2. **Hero Image**
**Lokasi**: `/public/assets/projects/creekmore/hero.png`
- Hero section mockup (desktop + mobile device showcase)
- Ukuran: ~1600px width
- Format: PNG dengan background

### 3. **Before & After**
**Lokasi**: 
- `/public/assets/projects/creekmore/before.png` - Old homepage design
- `/public/assets/projects/creekmore/after.png` - New homepage design
- Format: PNG
- Full page screenshots atau comparison mockups

### 4. **Component System** (3 images)
**Lokasi**: 
- `/public/assets/projects/creekmore/components-1.png`
- `/public/assets/projects/creekmore/components-2.png`
- `/public/assets/projects/creekmore/components-3.png`
- Contoh: buttons, cards, navigation, typography system, color palette
- Format: PNG

### 5. **Responsive Design** (2 images)
**Lokasi**: 
- `/public/assets/projects/creekmore/mobile-1.png`
- `/public/assets/projects/creekmore/mobile-2.png`
- Mobile mockups showing responsive layout
- Format: PNG

## 🎯 Cara Upload Asset

1. **Download/Export dari Figma**:
   - Pilih frame yang ingin di-export
   - Klik kanan > Export atau gunakan Export panel
   - Pilih format PNG (2x untuk retina display)

2. **Upload ke Project**:
   ```bash
   # Pindahkan file ke folder public
   # Contoh:
   /public/assets/projects/creekmore.png          # Thumbnail
   /public/assets/projects/creekmore/hero.png     # Hero image
   /public/assets/projects/creekmore/before.png   # Before
   /public/assets/projects/creekmore/after.png    # After
   # ... dst
   ```

3. **Test di Browser**:
   ```bash
   npm run dev
   ```
   - Buka http://localhost:5173
   - Navigasi ke `/work` - cek thumbnail Creekmore
   - Klik card Creekmore - lihat halaman case study lengkap

## 📝 Catatan Penting

- **Placeholder sudah ada**: Jika image belum di-upload, akan muncul box placeholder bertulisan "Asset will be added soon"
- **Format naming**: Pastikan nama file exact sama dengan yang di code (case-sensitive!)
- **Optimasi**: Gunakan compression tool seperti TinyPNG untuk memperkecil file size
- **Ukuran recommended**:
  - Thumbnail: ~800-1600px width
  - Hero & full page: ~1600px width
  - Components: ~1200px width
  - Mobile mockups: ~400-800px width

## 🚀 Setelah Upload

Halaman akan otomatis load image-image tersebut tanpa perlu ubah code!

---

**Need help?** Ping me jika ada masalah saat upload atau butuh adjust layout! 🎨
