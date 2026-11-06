import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Community from './Community';
import Contact from './Contact';

// 1. Kita impor halaman Home yang baru saja dibuat
// Sesuaikan path './pages/Home' jika folder-mu berbeda
import Home from './pages/Home'; 

export default function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Header akan selalu muncul di atas */}
        <Header />
        
        {/* Di dalam Routes inilah pergantian halaman terjadi */}
        <Routes>
          {/* 2. Kita beri tahu React: Jika URL-nya "/", tampilkan komponen Home */}
          <Route path="/" element={<Home />} /> 
          <Route
            path="/community" element={<Community />} />
          <Route
            path="/contact" element={<Contact />} />
        </Routes>
       
        {/* Footer akan selalu muncul di bawah */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}