import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import Home from "@/pages/Home";
import Artists from "@/pages/Artists";
import ArtistDetail from "@/pages/ArtistDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artists/:slug" element={<ArtistDetail />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <LeadCapturePopup />
        <Toaster
          position="bottom-center"
          theme="dark"
          toastOptions={{
            style: {
              background: "#0A0A0A",
              color: "#F5F5DC",
              border: "1px solid rgba(85,107,47,0.4)",
              borderRadius: 0,
              fontFamily: "DM Sans, sans-serif",
            },
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
