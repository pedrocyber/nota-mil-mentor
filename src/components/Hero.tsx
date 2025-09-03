import { Target, Award, TrendingUp, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('essay-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Conquiste a Nota 1000 no ENEM
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Avalie sua redação com nossa IA treinada nos critérios oficiais do ENEM. 
              Receba feedback detalhado e dicas personalizadas para cada competência.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
            >
              <Target className="w-5 h-5 mr-2" />
              Avaliar Minha Redação
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('competencies')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6 border-2 hover:bg-primary/5"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Ver Critérios
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-bounce-in">
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Avaliação Precisa</h3>
              <p className="text-muted-foreground">Baseada nos critérios oficiais das 5 competências do ENEM</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-warning/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-warning" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Feedback Detalhado</h3>
              <p className="text-muted-foreground">Pontuação individual e sugestões específicas para cada competência</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Rumo aos 1000</h3>
              <p className="text-muted-foreground">Dicas personalizadas para melhorar e alcançar a nota máxima</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};