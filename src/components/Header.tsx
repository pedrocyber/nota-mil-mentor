import { GraduationCap, BookOpen } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-gradient-primary shadow-elegant sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">EnemRedação 1000</h1>
              <p className="text-primary-light text-sm">Avaliador Inteligente de Redações</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-white/90">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm">Baseado nos critérios oficiais do ENEM</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};