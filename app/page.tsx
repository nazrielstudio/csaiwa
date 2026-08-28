import Navbar from "@/components/Navbar";

const matches = [
  { date: "07 SEP", time: "15:30", home: "Cikeas FC", away: "Bina Jaya FC", venue: "Lapangan Cihea" },
  { date: "14 SEP", time: "15:30", home: "Cikeas FC", away: "Satria Muda", venue: "Lapangan Haurwangi" },
];

const news = [
  { tag: "MATCH", title: "Persiapan tim menuju laga berikutnya", text: "Update latihan dan kesiapan skuad menjelang pertandingan." },
  { tag: "CLUB", title: "Cikeas FC terus berkembang", text: "Membangun tim yang solid di dalam dan luar lapangan." },
  { tag: "MEDIA", title: "Dokumentasi pertandingan terbaru", text: "Ikuti momen pertandingan dan aktivitas club." },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="hero">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">CIKEAS FOOTBALL CLUB · EST. 2014</p>
            <h1>Play together.<br /><span>Stay together.</span></h1>
            <p className="hero-copy">
              Rumah bagi pemain, keluarga, dan semua yang tumbuh bersama Cikeas FC.
              Satu tim, satu semangat.
            </p>
            <div className="actions">
              <a className="btn primary" href="#jadwal">Lihat Jadwal</a>
              <a className="btn ghost" href="#contact">Hubungi Club</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="crest">CF</div>
            <div className="hero-card-bottom">
              <div>
                <small>NEXT MATCH</small>
                <strong>Cikeas FC <i>vs</i> Bina Jaya FC</strong>
                <span>07 September · 15:30 · Cihea</span>
              </div>
              <div className="arrow">→</div>
            </div>
          </div>
        </div>
      </section>

      <section id="jadwal" className="section">
        <div className="section-head">
          <div><p className="eyebrow">MATCH CENTER</p><h2>Jadwal terdekat</h2></div>
          <a href="#contact">Semua jadwal →</a>
        </div>
        <div className="matches">
          {matches.map((m) => (
            <article className="match" key={m.date}>
              <div className="match-date"><b>{m.date.split(" ")[0]}</b><span>SEP</span></div>
              <div className="teams"><strong>{m.home}</strong><em>VS</em><strong>{m.away}</strong></div>
              <div className="match-meta"><b>{m.time}</b><span>{m.venue}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section id="club" className="section split">
        <div>
          <p className="eyebrow">THE CLUB</p>
          <h2>Lebih dari sekadar<br />sembilan puluh menit.</h2>
        </div>
        <div className="story">
          <p>Cikeas FC adalah club sepak bola komunitas yang tumbuh dari lingkungan, persahabatan, dan kecintaan terhadap permainan.</p>
          <p>Kami percaya tim yang kuat dibangun dari disiplin, rasa hormat, dan kemauan untuk terus belajar.</p>
          <a className="text-link" href="#contact">Kenal lebih dekat →</a>
        </div>
      </section>

      <section id="news" className="section news-section">
        <div className="section-head">
          <div><p className="eyebrow">LATEST</p><h2>Berita & update</h2></div>
        </div>
        <div className="news-grid">
          {news.map((n) => (
            <article className="news" key={n.title}>
              <div className="news-image"><span>{n.tag}</span></div>
              <div className="news-body"><h3>{n.title}</h3><p>{n.text}</p><a href="#contact">Baca update →</a></div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div>
          <p className="eyebrow">OFFICIAL CONTACT</p>
          <h2>Punya pertanyaan<br />untuk club?</h2>
          <p>Untuk pendaftaran, pertandingan, kerja sama, media, atau kebutuhan lainnya, hubungi admin Cikeas FC.</p>
        </div>
        <a className="contact-btn" href="https://wa.me/6280000000000" target="_blank" rel="noreferrer">
          <span>WhatsApp CS</span><b>↗</b>
        </a>
      </section>

      <footer>
        <div><strong>CIKEAS FC</strong><span>Community Football Club</span></div>
        <span>© 2026 Cikeas FC. All rights reserved.</span>
      </footer>
    </main>
  );
}