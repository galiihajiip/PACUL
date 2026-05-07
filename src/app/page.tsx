'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import { 
  Leaf, 
  BarChart3, 
  Target, 
  Map as MapIcon, 
  Users, 
  ArrowRight,
  ClipboardList,
  Trophy,
  BarChart
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-pacul-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          {/* Hero Left */}
          <div className="flex-1 text-left">
            <FadeIn direction="none">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-pacul-light/40 border border-pacul-light/60 text-pacul-primary text-[11px] font-bold uppercase tracking-wider mb-8">
                <span className="w-2 h-2 bg-pacul-accent rounded-full animate-pulse" />
                GERAKAN IKLIM KOLEKTIF
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold text-pacul-text mb-8 leading-[1.1] tracking-tight">
                Ubah Aksi Jadi <span className="text-pacul-primary">Dampak Nyata</span>
              </h1>
              <p className="text-lg text-gray-500 max-w-xl leading-relaxed mb-12">
                Berdayakan komunitasmu dengan platform berbasis data untuk memantau, berkolaborasi, dan mempercepat transisi energi hijau di Indonesia.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" className="h-14 px-10">
                  Mulai Sekarang
                </Button>
                <Button variant="light" size="lg" className="h-14 px-10">
                  Lihat Demo
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Hero Right - Image Card */}
          <div className="flex-1 relative">
            <FadeIn direction="right" delay={0.2}>
              <div className="relative z-10 p-3 bg-gradient-to-br from-green-800 via-green-500 to-lime-600 rounded-2xl shadow-2xl">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-pacul-accent relative group">
                  {/* Placeholder for wind turbine image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pacul-light/20 to-transparent z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop" 
                    alt="Energi Terbarukan"
                    className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Stats Card */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 flex gap-3">
                    <StatBadge 
                      icon={Leaf} 
                      value="1,200" 
                      label="aksi nyata" 
                      color="text-pacul-accent" 
                    />
                    <StatBadge 
                      icon={Users} 
                      value="38" 
                      label="komunitas" 
                      color="text-blue-400" 
                    />
                    <StatBadge 
                      icon={BarChart} 
                      value="2.4 ton" 
                      label="CO₂ saved" 
                      color="text-emerald-400" 
                    />
                  </div>
                </div>
                {/* Visual Accent */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-pacul-accent/10 blur-3xl -z-10" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Target Stats Banner */}
      <section className="bg-pacul-primary to py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-5" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
          <BannerStat value="31.9%" label="Target Emisi 2030" />
          <BannerStat value="5,100+" label="Komunitas Aktif" />
          <BannerStat value="60%" label="Engagement Naik" />
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pacul-text mb-4">Solusi Terpadu Untuk Bumi</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Kami menyediakan alat yang dibutuhkan komunitas untuk mengorganisir, memantau, dan melaporkan dampak lingkungan secara presisi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={BarChart3} 
              title="Carbon Tracker" 
              desc="Pantau jejak karbon komunitas secara real-time dengan dashboard analitik presisi tinggi."
              delay={0.1}
            />
            <FeatureCard 
              icon={Target} 
              title="EcoAction" 
              desc="Ikuti tantangan harian dan mingguan untuk membiasakan gaya hidup rendah karbon."
              delay={0.2}
            />
            <FeatureCard 
              icon={MapIcon} 
              title="Impact Map" 
              desc="Visualisasi dampak lokal melalui peta interaktif penyebaran aksi lingkungan di seluruh wilayah."
              delay={0.3}
            />
            <FeatureCard 
              icon={Users} 
              title="Collaboration Wall" 
              desc="Hubungkan idemu dengan ribuan penggiat lingkungan lainnya untuk aksi skala besar."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 px-6 bg-pacul-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-pacul-text mb-4">Mulai Langkahmu Hari Ini</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-pacul-light/30 -z-0" />
            
            <StepItem 
              number="1"
              icon={ClipboardList}
              title="Daftar & Pantau"
              desc="Buat profil komunitas dan mulai catat emisi awalmu."
            />
            <StepItem 
              number="2"
              icon={Trophy}
              title="Ikuti Tantangan"
              desc="Pilih program yang sesuai dengan visi komunitasmu."
            />
            <StepItem 
              number="3"
              icon={BarChart3}
              title="Lihat Dampak"
              desc="Dapatkan laporan kontribusi nyata secara transparan."
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function StatBadge({ icon: Icon, value, label, color }: any) {
  return (
    <div className="flex-1 bg-white p-4 rounded-xl flex items-center gap-3 shadow-lg">
      <div className={`w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center ${color}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-lg font-bold text-pacul-text leading-none">{value}</div>
        <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{label}</div>
      </div>
    </div>
  );
}

function BannerStat({ value, label }: { value: string, label: string }) {
  return (
    <div>
      <div className="text-5xl font-bold text-white mb-2 tracking-tight">{value}</div>
      <div className="text-pacul-light/80 font-medium text-sm">{label}</div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc, delay }: any) {
  return (
    <FadeIn delay={delay} className="h-full">
      <div className="h-full p-8 rounded-2xl bg-white border border-gray-100 hover:border-pacul-primary/20 transition-all duration-300 group">
        <div className="w-12 h-12 bg-pacul-light/20 rounded-lg flex items-center justify-center mb-6 text-pacul-primary group-hover:scale-110 transition-transform">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-pacul-text mb-4">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          {desc}
        </p>
      </div>
    </FadeIn>
  );
}

function StepItem({ number, icon: Icon, title, desc }: any) {
  return (
    <div className="text-center relative z-10 flex flex-col items-center">
      <div className="w-24 h-24 rounded-full bg-white border-2 border-pacul-primary flex items-center justify-center mb-8 relative group cursor-default">
        <div className="w-20 h-20 rounded-full bg-pacul-bg flex items-center justify-center text-pacul-primary transition-colors group-hover:bg-pacul-primary group-hover:text-white">
          <Icon className="w-10 h-10" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-pacul-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-bold text-pacul-text mb-4">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
        {desc}
      </p>
    </div>
  );
}
