'use client';

import DashboardLayout from '@/app/dashboard/layout';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import { 
  MapPin, 
  Search, 
  Filter, 
  Wind, 
  Zap, 
  Users, 
  TrendingUp, 
  Award,
  Maximize2,
  Plus,
  Minus,
  BarChart3
} from 'lucide-react';
import { cn } from '@/utils/cn';

export default function ImpactMapPage() {
  return (
    <DashboardLayout>
      <div className="space-y-10">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-pacul-text">Local Impact Map</h1>
          <p className="text-gray-500 max-w-3xl mx-auto">
            Kontribusi komunitas Surabaya & Jawa Timur. Pantau jejak aksi lingkungan secara real-time di seluruh penjuru kota.
          </p>
        </div>

        {/* Map Container - Simulated */}
        <div className="relative aspect-[21/9] w-full bg-[#E5E9EC] rounded-2xl border-4 border-pacul-primary overflow-hidden shadow-2xl shadow-pacul-primary/10 group">
          {/* Map Base Image Placeholder */}
          <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/112.7508, -7.2575,12,0/1280x720?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTAwMHkzN29hMm50Z2Q4OGIifQ.0_v9_3596_59359359359')] bg-cover bg-center grayscale-[30%] opacity-80" />
          
          {/* Overlay Grid/Patterns */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-10" />

          {/* Map Controls */}
          <div className="absolute top-6 left-6 flex flex-wrap gap-3 z-20">
            <Button size="sm" className="h-9 px-4 bg-pacul-primary text-white border-none shadow-lg">Limbah</Button>
            <Button size="sm" variant="light" className="h-9 px-4 bg-white text-gray-500 border-none shadow-lg">Energi</Button>
            <div className="relative group">
              <Button size="sm" variant="light" className="h-9 px-4 bg-white text-gray-500 border-none shadow-lg flex items-center gap-2">
                Bulan Ini <Filter className="w-3 h-3" />
              </Button>
            </div>
          </div>

          <div className="absolute top-6 right-6 flex flex-col gap-2 z-20">
            <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-gray-500 shadow-lg hover:bg-gray-50 transition-colors">
              <Plus className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-gray-500 shadow-lg hover:bg-gray-50 transition-colors">
              <Minus className="w-5 h-5" />
            </button>
          </div>

          {/* Map Markers - Simulated */}
          <MapMarker x="30%" y="40%" color="bg-[#1A3C2A]" size="w-5 h-5" />
          <MapMarker x="55%" y="25%" color="bg-[#1A3C2A]" size="w-4 h-4" />
          <MapMarker x="65%" y="35%" color="bg-[#1A3C2A]" size="w-6 h-6" />
          <MapMarker x="45%" y="55%" color="bg-[#1A3C2A]" size="w-5 h-5" />
          <MapMarker x="75%" y="65%" color="bg-[#1A3C2A]" size="w-5 h-5" />

          {/* Filter Sidebar - Overlay */}
          <div className="absolute bottom-6 left-6 z-20 w-64 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/20">
             <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Fitur Dampak</span>
                <Maximize2 className="w-3 h-3 text-gray-400" />
             </div>
             <div className="space-y-4">
                <div>
                   <p className="text-[10px] font-bold text-pacul-primary mb-2">INTENSITAS DAMPAK</p>
                   <div className="space-y-2">
                      <LegendItem color="bg-[#1A3C2A]" label="Sangat Tinggi (>10 Ton)" />
                      <LegendItem color="bg-pacul-primary" label="Signifikan (5-10 Ton)" />
                      <LegendItem color="bg-pacul-light" label="Moderat (1-5 Ton)" />
                   </div>
                </div>
                <div className="pt-4 border-t border-gray-100 flex gap-2">
                   <Button size="sm" className="flex-1 h-8 text-[9px] font-bold">Bulan Ini</Button>
                   <Button variant="light" size="sm" className="flex-1 h-8 text-[9px] font-bold bg-gray-100 text-gray-400 border-none">All Time</Button>
                </div>
             </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <Card className="border-none shadow-lg">
              <CardContent className="p-8 flex items-center justify-between">
                 <div>
                    <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">Emisi Terhindar Kota</p>
                    <div className="flex items-baseline gap-2">
                       <span className="text-4xl font-bold text-pacul-text">892</span>
                       <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Ton</span>
                    </div>
                 </div>
                 <div className="w-16 h-12 flex items-end gap-1">
                    <div className="w-3 bg-pacul-light/30 h-1/2 rounded-t-sm" />
                    <div className="w-3 bg-pacul-light/50 h-3/4 rounded-t-sm" />
                    <div className="w-3 bg-pacul-primary h-full rounded-t-sm" />
                 </div>
              </CardContent>
           </Card>

           <Card className="border-none shadow-lg">
              <CardContent className="p-8 flex items-center justify-between">
                 <div>
                    <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">Pertumbuhan Komunitas</p>
                    <span className="text-4xl font-bold text-pacul-text">+24%</span>
                 </div>
                 <div className="w-12 h-12 rounded-full border-2 border-pacul-light flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-pacul-primary" />
                 </div>
              </CardContent>
           </Card>

           <Card className="border-none shadow-lg">
              <CardContent className="p-8 flex items-center justify-between">
                 <div>
                    <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">Energi Terbarukan</p>
                    <div className="flex items-baseline gap-2">
                       <span className="text-4xl font-bold text-pacul-text">12.5</span>
                       <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">MW</span>
                    </div>
                 </div>
                 <Zap className="w-10 h-10 text-pacul-accent animate-pulse" />
              </CardContent>
           </Card>
        </div>

        {/* District Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {/* Wonokromo Detail */}
           <Card className="border-none shadow-xl overflow-hidden group">
              <CardContent className="p-10 space-y-8">
                 <div className="flex items-center justify-between">
                    <div className="space-y-1">
                       <h3 className="text-3xl font-bold">Wonokromo</h3>
                       <div className="flex items-center gap-1.5 text-gray-400 text-sm font-medium">
                          <MapPin className="w-4 h-4" /> Surabaya Selatan
                       </div>
                    </div>
                    <span className="px-3 py-1 rounded-md bg-pacul-danger/10 text-pacul-danger text-[9px] font-bold tracking-widest uppercase">HOTSPOT</span>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-50">
                    <DistrictStat icon={BarChart3} label="Total Aksi" value="1,284" color="bg-pacul-light/20 text-pacul-primary" />
                    <DistrictStat icon={Wind} label="CO2 Tersimpan" value="42.8 Ton" color="bg-emerald-50 text-emerald-600" />
                    <DistrictStat icon={Users} label="Anggota Aktif" value="850+" color="bg-blue-50 text-blue-600" />
                 </div>

                 <Button className="w-full h-14 text-lg font-bold">
                    Gabung Komunitas
                 </Button>
              </CardContent>
           </Card>

           {/* District Leaderboard */}
           <Card className="bg-pacul-light/30 border-2 border-pacul-light/50 overflow-hidden">
              <CardContent className="p-10 space-y-8">
                 <h3 className="text-2xl font-bold text-pacul-primary">District Leaderboard</h3>
                 
                 <div className="space-y-4">
                    <DistrictRankItem rank={1} name="Kec. Gubeng" actions="1,452 Aksi Lingkungan" active />
                    <DistrictRankItem rank={2} name="Kec. Wonokromo" actions="1,284 Aksi Lingkungan" />
                    <DistrictRankItem rank={3} name="Kec. Sukolilo" actions="1,012 Aksi Lingkungan" />
                 </div>
              </CardContent>
           </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

function MapMarker({ x, y, color, size }: any) {
  return (
    <div 
      className={cn("absolute rounded-full shadow-2xl animate-pulse cursor-pointer hover:scale-125 transition-transform z-10", color, size)}
      style={{ left: x, top: y }}
    >
      <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-inherit" />
    </div>
  );
}

function LegendItem({ color, label }: { color: string, label: string }) {
   return (
      <div className="flex items-center gap-2">
         <div className={cn("w-2 h-2 rounded-full", color)} />
         <span className="text-[10px] font-medium text-gray-500">{label}</span>
      </div>
   );
}

function DistrictStat({ icon: Icon, label, value, color }: any) {
   return (
      <div className="flex items-center gap-4 group/item">
         <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover/item:scale-110", color)}>
            <Icon className="w-5 h-5" />
         </div>
         <div>
            <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">{label}</p>
            <p className="text-xl font-bold text-pacul-text">{value}</p>
         </div>
      </div>
   );
}

function DistrictRankItem({ rank, name, actions, active }: any) {
   return (
      <div className={cn(
         "flex items-center justify-between p-5 rounded-2xl transition-all",
         active ? "bg-white shadow-lg" : "bg-white/40 hover:bg-white/60"
      )}>
         <div className="flex items-center gap-6">
            <span className="text-xl font-bold text-pacul-primary">{rank}.</span>
            <div>
               <p className="font-bold text-pacul-text">{name}</p>
               <p className="text-[11px] text-gray-400 font-medium">{actions}</p>
            </div>
         </div>
         {rank === 1 && <Award className="w-6 h-6 text-pacul-primary" />}
      </div>
   );
}
