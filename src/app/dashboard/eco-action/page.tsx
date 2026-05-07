'use client';

import DashboardLayout from '@/app/dashboard/layout';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import { 
  Upload, 
  CheckCircle2, 
  Trophy, 
  Zap, 
  ShoppingBag, 
  ChevronRight,
  TrendingUp,
  Award,
  Users
} from 'lucide-react';
import { cn } from '@/utils/cn';

export default function EcoActionPage() {
  return (
    <DashboardLayout>
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-pacul-text">EcoAction</h1>
          <p className="text-gray-500">Tantangan, Poin, dan Reward Hijau</p>
        </div>

        {/* Buktikan Aksimu Section */}
        <Card className="border-2 border-pacul-light/30">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Upload Side */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Buktikan Aksimu</h3>
                  <p className="text-sm text-gray-400">Upload foto untuk verifikasi otomatis dan klaim XP kamu.</p>
                </div>
                
                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Pilih Tantangan</label>
                  <select className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pacul-primary/20 transition-all">
                    <option>Kurangi Listrik 20%</option>
                    <option>10K Langkah Hijau</option>
                    <option>Zero Waste Hero</option>
                  </select>
                </div>

                <div className="aspect-video rounded-2xl border-2 border-dashed border-pacul-light flex flex-col items-center justify-center gap-4 bg-pacul-light/5 hover:bg-pacul-light/10 transition-colors cursor-pointer group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-pacul-primary shadow-sm group-hover:scale-110 transition-transform">
                    <Upload className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <p className="font-bold">Upload Bukti Foto</p>
                    <p className="text-xs text-gray-400 mt-1">Maksimal 5MB (JPG, PNG)</p>
                  </div>
                </div>
              </div>

              {/* Status Side */}
              <div className="flex flex-col justify-between">
                <div className="flex justify-between items-center mb-8">
                  <StatusStep label="UPLOAD" active />
                  <div className="h-px bg-gray-200 flex-1 mx-4" />
                  <StatusStep label="ANALISIS AI" active />
                  <div className="h-px bg-gray-200 flex-1 mx-4" />
                  <StatusStep label="HASIL" count="3" />
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">AI Status</span>
                    <span className="px-3 py-1 rounded-full bg-pacul-success/10 text-pacul-success text-[10px] font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> TERVERIFIKASI
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 leading-relaxed italic">
                    "Foto meteran listrik terbaca. Penghematan terdeteksi."
                  </p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-gray-400">CONFIDENCE SCORE</span>
                      <span className="text-pacul-primary">98.4%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-pacul-accent w-[98.4%]" />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-pacul-light/20 border border-pacul-light/30 flex items-center justify-between">
                    <span className="text-xs font-bold text-pacul-primary">Reward Tersedia:</span>
                    <span className="text-sm font-bold text-pacul-primary">+150 XP & Badge Green Saver</span>
                  </div>

                  <Button className="w-full h-14 text-lg">
                    Klaim Reward Sekarang
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Challenges & Marketplace */}
          <div className="lg:col-span-2 space-y-12">
            {/* Tantangan Aktif */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Tantangan Aktif</h2>
                <Button variant="ghost" size="sm" className="text-gray-500">Lihat Semua <ChevronRight className="w-4 h-4 ml-1" /></Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ChallengeCard 
                  tag="URGENT"
                  title="Kurangi Listrik 20%"
                  desc="Hemat penggunaan energi di rumah selama 7 hari."
                  progress={65}
                  time="2 Hari Lagi"
                  image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
                />
                <ChallengeCard 
                  tag="POPULAR"
                  title="10K Langkah Hijau"
                  desc="Berjalan kaki 10,000 langkah tanpa emisi gas buang."
                  progress={10}
                  time="5 Hari Lagi"
                  image="https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?q=80&w=2070&auto=format&fit=crop"
                />
                <ChallengeCard 
                  tag="NEW"
                  title="Zero Waste Hero"
                  desc="Gunakan wadah sendiri untuk semua belanja hari ini."
                  progress={0}
                  time="12 Jam Lagi"
                  image="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop"
                />
              </div>
            </div>

            {/* Green Marketplace */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Green Marketplace</h2>
                <div className="px-4 py-2 bg-pacul-success/10 text-pacul-success rounded-full text-xs font-bold flex items-center gap-2">
                  <ShoppingBag className="w-3 h-3" /> Saldo: 1,800 XP
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RewardCard 
                  title="Voucher Toko Organik"
                  desc="Diskon 50rb Belanja Sehat"
                  cost="500 XP"
                  image="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074&auto=format&fit=crop"
                />
                <RewardCard 
                  title="Indoor Plant Kit"
                  desc="Paket Tanam Sansevieria"
                  cost="1200 XP"
                  image="https://images.unsplash.com/photo-1485955900006-10f4d324d445?q=80&w=2072&auto=format&fit=crop"
                />
              </div>
            </div>

            {/* Pencapaian Kamu */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Pencapaian Kamu</h2>
              <div className="p-8 bg-white border border-gray-100 rounded-2xl flex justify-between">
                <BadgeIcon label="SEEDLING" active />
                <BadgeIcon label="WATT SAVER" active />
                <BadgeIcon label="TREE KING" />
                <BadgeIcon label="AQUA GUARD" />
                <BadgeIcon label="SPEAKER" />
                <BadgeIcon label="LEADER" />
                <BadgeIcon label="TREE KING" />
              </div>
            </div>
          </div>

          {/* Right: Leaderboard & Referral */}
          <div className="space-y-8">
            <Card className="bg-pacul-primary text-white border-none overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-white/10">
                <h3 className="text-lg font-bold">Top 5 Surabaya</h3>
                <TrendingUp className="w-5 h-5 text-pacul-light" />
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <p className="text-xs text-pacul-light/60 leading-relaxed">Peringkat berdasarkan aksi nyata di wilayah Surabaya bulan ini.</p>
                
                <div className="space-y-4">
                  <RankItem rank={1} name="Ahmad Ridwan" district="Kec. Wonokromo" xp="4,890" active />
                  <RankItem rank={2} name="Siti Rahma" district="Kec. Gubeng" xp="4,120" />
                  <RankItem rank={3} name="Budi Santoso" district="Kec. Sukolilo" xp="3,950" />
                  <RankItem rank={4} name="Lia Kusuma" district="Kec. Mulyorejo" xp="3,700" />
                  <RankItem rank={5} name="Dimas Pratama" district="Kec. Tegalsari" xp="3,420" />
                </div>

                <Button className="w-full bg-pacul-light text-pacul-primary hover:bg-white h-12 font-bold text-xs uppercase tracking-widest">
                  Lihat Full Leaderboard
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#0D2B1A] border-none text-white relative overflow-hidden group">
              <div className="absolute -bottom-8 -right-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <Users className="w-48 h-48" />
              </div>
              <CardContent className="p-8 space-y-4 relative z-10">
                <h3 className="text-xl font-bold leading-tight">Ajak Temanmu</h3>
                <p className="text-sm text-gray-400">Dapatkan 500 XP untuk setiap teman yang mendaftar dan menyelesaikan tantangan pertamanya.</p>
                <Button variant="light" className="w-full h-12 bg-white text-pacul-primary hover:bg-gray-100 border-none font-bold">
                  Undang Sekarang
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function StatusStep({ label, active, count }: { label: string, active?: boolean, count?: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors",
        active ? "bg-pacul-primary text-white" : "bg-gray-100 text-gray-400 border border-gray-200"
      )}>
        {count || (active ? <CheckCircle2 className="w-4 h-4" /> : "?")}
      </div>
      <span className={cn("text-[10px] font-bold tracking-widest transition-colors", active ? "text-pacul-primary" : "text-gray-300")}>
        {label}
      </span>
    </div>
  );
}

function ChallengeCard({ tag, title, desc, progress, time, image }: any) {
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative h-40 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded text-[9px] font-bold tracking-widest text-pacul-primary uppercase shadow-sm">
          {tag}
        </div>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <h4 className="font-bold mb-1">{title}</h4>
          <p className="text-[11px] text-gray-500 leading-relaxed">{desc}</p>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-[10px] font-bold">
            <span className="text-pacul-primary">Progress: {progress}%</span>
            <span className="text-gray-400">{time}</span>
          </div>
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-pacul-primary" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <Button className="w-full h-10 text-xs font-bold uppercase tracking-widest">
          Ikut Tantangan
        </Button>
      </div>
    </div>
  );
}

function RewardCard({ title, desc, cost, image }: any) {
  return (
    <div className="flex bg-white border border-gray-100 rounded-2xl overflow-hidden p-4 gap-4 group hover:shadow-lg transition-all">
      <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="flex flex-col justify-between flex-1 py-1">
        <div>
          <h4 className="font-bold text-sm">{title}</h4>
          <p className="text-[11px] text-gray-400">{desc}</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs font-bold text-pacul-primary">{cost}</span>
          <Button size="sm" className="h-8 px-4 text-[10px] font-bold uppercase tracking-widest">
            Redeem
          </Button>
        </div>
      </div>
    </div>
  );
}

function BadgeIcon({ label, active }: { label: string, active?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className={cn(
        "w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all",
        active 
          ? "bg-pacul-primary/5 border-pacul-primary text-pacul-primary shadow-lg shadow-pacul-primary/10" 
          : "bg-gray-50 border-gray-100 text-gray-300"
      )}>
        <Award className={cn("w-6 h-6", active ? "animate-pulse" : "")} />
      </div>
      <span className={cn("text-[9px] font-bold tracking-widest text-center", active ? "text-pacul-text" : "text-gray-300")}>
        {label}
      </span>
    </div>
  );
}

function RankItem({ rank, name, district, xp, active }: any) {
  return (
    <div className={cn(
      "flex items-center justify-between p-3 rounded-xl transition-all",
      active ? "bg-white/10 ring-1 ring-white/20" : "hover:bg-white/5"
    )}>
      <div className="flex items-center gap-4">
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs",
          rank === 1 ? "bg-pacul-light text-pacul-primary" : "bg-white/10 text-white"
        )}>
          {rank}
        </div>
        <div>
          <p className="text-sm font-bold">{name}</p>
          <p className="text-[10px] text-pacul-light/60">{district}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-bold">{xp}</p>
        <p className="text-[10px] text-pacul-light/60 font-bold uppercase tracking-widest">XP</p>
      </div>
    </div>
  );
}
