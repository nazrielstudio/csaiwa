"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <a className="brand" href="#"><span>CF</span><b>CIKEAS FC</b></a>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
      <nav className={open ? "nav-links open" : "nav-links"}>
        <a href="#jadwal" onClick={() => setOpen(false)}>Jadwal</a>
        <a href="#club" onClick={() => setOpen(false)}>Club</a>
        <a href="#news" onClick={() => setOpen(false)}>News</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </nav>
      <a className="nav-cta" href="#contact">Official CS</a>
    </header>
  );
}