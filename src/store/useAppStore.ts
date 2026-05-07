import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  user: {
    name: string;
    xp: number;
    level: number;
    badges: string[];
  } | null;
  setUser: (user: UserState['user']) => void;
  updateXP: (amount: number) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      updateXP: (amount) =>
        set((state) => ({
          user: state.user
            ? { ...state.user, xp: state.user.xp + amount }
            : null,
        })),
      logout: () => set({ user: null }),
    }),
    {
      name: 'pacul-user-storage',
    }
  )
);

interface AppState {
  isModalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isModalOpen: false,
  setModalOpen: (open) => set({ isModalOpen: open }),
}));
