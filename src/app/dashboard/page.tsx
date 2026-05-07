'use client';

import DashboardLayout from '@/app/dashboard/layout';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { 
  BarChart3, 
  TreeDeciduous, 
  Map as MapIcon, 
  Users, 
  Zap,
  Wind,
  TrendingUp,
  Info,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/utils/cn';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-10">
        {/* Welcome Section */}
        <FadeIn direction="none">
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <h1 className="text-4xl font-bold text-pacul-text">Halo, Aditya! 👋</h1>
              <p className="text-gray-500 font-medium">
                Kamu sudah mengurangi <span className="text-pacul-primary font-bold">12kg CO₂</span> minggu ini 🍃 Teruskan!
              </p>
            </div>
            <div className="flex gap-3">
               <Button variant="light" className="h-12 px-6">Laporan Detail</Button>
               <Button className="h-12 px-6 shadow-xl shadow-pacul-primary/20">Aksi Cepat</Button>
            </div>
          </header>
        </FadeIn>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard 
            title="Total Carbon Saved" 
            value="450kg" 
            change="+12%" 
            icon={Wind} 
            color="text-emerald-500" 
            bg="bg-emerald-50" 
          />
          <KPICard 
            title="EcoPoints Earned" 
            value="12,402" 
            unit="Σ" 
            icon={Zap} 
            color="text-amber-500" 
            bg="bg-amber-50" 
          />
          <KPICard 
            title="Active Challenges" 
            value="3/5" 
            indicator="●●●" 
            icon={TreeDeciduous} 
            color="text-pacul-primary" 
            bg="bg-pacul-light/20" 
          />
          <KPICard 
            title="Community Rank" 
            value="#12" 
            unit="Surabaya" 
            icon={TrendingUp} 
            color="text-blue-500" 
            bg="bg-blue-50" 
          />
        </div>

        {/* Charts & Progress Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Weekly Emission Chart Placeholder */}
           <Card className="lg:col-span-2 border-none shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between pb-8">
                 <h3 className="text-xl font-bold">Emisi Minggu Ini</h3>
                 <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-pacul-primary" />
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Kg CO₂</span>
                 </div>
              </CardHeader>
              <CardContent>
                 <div className="h-64 w-full relative flex items-end justify-between px-4">
                    {/* Simulated Area Chart */}
                    <div className="absolute inset-x-0 bottom-0 h-full flex items-end">
                       <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                          <path d="M0,100 L0,70 L15,50 L30,65 L45,40 L60,55 L75,30 L90,45 L100,20 L100,100 Z" fill="url(#grad)" />
                          <defs>
                             <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style={{stopColor: '#2D5F3F', stopOpacity: 0.2}} />
                                <stop offset="100%" style={{stopColor: '#2D5F3F', stopOpacity: 0}} />
                             </linearGradient>
                          </defs>
                          <path d="M0,70 L15,50 L30,65 L45,40 L60,55 L75,30 L90,45 L100,20" fill="none" stroke="#2D5F3F" strokeWidth="2" />
                       </svg>
                    </div>
                    {['SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB', 'MIN'].map(day => (
                       <span key={day} className="text-[10px] font-bold text-gray-400 z-10">{day}</span>
                    ))}
                 </div>
              </CardContent>
           </Card>

           {/* Active Challenges List */}
           <Card className="border-none shadow-lg">
              <CardHeader className="pb-6">
                 <h3 className="text-xl font-bold">Tantangan Aktif</h3>
              </CardHeader>
              <CardContent className="space-y-8">
                 <MiniChallenge 
                    label="Hemat Listrik 80%" 
                    progress={80} 
                    color="bg-amber-500" 
                 />
                 <MiniChallenge 
                    label="Gunakan Transportasi Umum" 
                    progress={45} 
                    color="bg-blue-500" 
                 />
                 
                 {/* Tips Section */}
                 <div className="p-5 rounded-2xl bg-pacul-light/10 border border-pacul-light/20 space-y-3">
                    <div className="flex items-center gap-2 text-pacul-primary">
                       <Info className="w-4 h-4" />
                       <span className="text-[10px] font-bold uppercase tracking-widest">Tips Hari Ini</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                       Cabut pengisi daya ponsel saat tidak digunakan untuk mengurangi <span className="font-bold text-pacul-primary">1% emisi harian</span>.
                    </p>
                 </div>
              </CardContent>
           </Card>
        </div>

        {/* Community Activities */}
        <div className="space-y-6">
           <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Aktivitas Komunitas</h2>
              <Button variant="ghost" size="sm" className="text-gray-400">Lihat Semua <ChevronRight className="w-4 h-4 ml-1" /></Button>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ActivityItem 
                 name="Siti Aminah" 
                 action="menanam 5 bibit pohon di Taman Bungkul" 
                 time="10 menit yang lalu" 
                 xp="50" 
              />
              <ActivityItem 
                 name="Rian Hidayat" 
                 action="menyelesaikan tantangan Bebas Plastik 7 Hari" 
                 time="1 jam yang lalu" 
                 xp="120" 
              />
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function KPICard({ title, value, unit, change, indicator, icon: Icon, color, bg }: any) {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow group">
       <CardContent className="p-6 space-y-4">
          <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", bg, color)}>
             <Icon className="w-6 h-6" />
          </div>
          <div>
             <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">{title}</p>
             <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-pacul-text">{value}</span>
                {unit && <span className="text-xs font-bold text-gray-400">{unit}</span>}
                {indicator && <span className="text-pacul-primary text-xs tracking-tighter">{indicator}</span>}
                {change && <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-emerald-100 text-emerald-600 ml-auto">{change}</span>}
             </div>
          </div>
       </CardContent>
    </Card>
  );
}

function MiniChallenge({ label, progress, color }: any) {
   return (
      <div className="space-y-3">
         <div className="flex justify-between text-xs font-bold">
            <span className="text-gray-600">{label}</span>
            <span className="text-pacul-text">{progress}%</span>
         </div>
         <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className={cn("h-full rounded-full transition-all duration-1000", color)} style={{ width: `${progress}%` }} />
         </div>
      </div>
   );
}

function ActivityItem({ name, action, time, xp }: any) {
   return (
      <div className="p-4 bg-white border border-gray-50 rounded-2xl flex items-center justify-between group hover:border-pacul-primary/20 transition-all">
         <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-pacul-light/10 flex items-center justify-center text-pacul-primary">
               <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
               <p className="text-sm">
                  <span className="font-bold text-pacul-text">{name}</span> {action}
               </p>
               <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mt-0.5">{time}</p>
            </div>
         </div>
         <span className="text-xs font-bold text-pacul-primary">+{xp} XP</span>
      </div>
   );
}
