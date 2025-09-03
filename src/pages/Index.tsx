import { useState } from "react";
import { EssayForm } from "@/components/EssayForm";
import { EssayEvaluation } from "@/components/EssayEvaluation";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CompetenciesGuide } from "@/components/CompetenciesGuide";

export interface Essay {
  theme: string;
  text: string;
}

export interface EvaluationResult {
  competencies: {
    id: number;
    name: string;
    description: string;
    score: number;
    feedback: string;
    suggestions: string[];
  }[];
  totalScore: number;
  overallFeedback: string;
}

const Index = () => {
  const [currentEssay, setCurrentEssay] = useState<Essay | null>(null);
  const [evaluation, setEvaluation] = useState<EvaluationResult | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);

  const handleEssaySubmit = async (essay: Essay) => {
    setIsEvaluating(true);
    setCurrentEssay(essay);
    
    // Simular avaliação (em um app real, seria uma API)
    setTimeout(() => {
      const mockEvaluation: EvaluationResult = {
        competencies: [
          {
            id: 1,
            name: "Domínio da Língua Portuguesa",
            description: "Domínio da modalidade escrita formal da Língua Portuguesa",
            score: Math.floor(Math.random() * 41) + 160, // 160-200
            feedback: "Boa utilização da norma padrão, com poucos desvios gramaticais.",
            suggestions: [
              "Revisar concordância verbal em alguns períodos",
              "Atentar para o uso adequado de conectivos",
              "Evitar repetições desnecessárias de palavras"
            ]
          },
          {
            id: 2,
            name: "Compreensão do Tema",
            description: "Compreender a proposta e aplicar conceitos das várias áreas do conhecimento",
            score: Math.floor(Math.random() * 41) + 160,
            feedback: "Demonstrou boa compreensão do tema proposto e trouxe conhecimentos relevantes.",
            suggestions: [
              "Aprofundar a contextualização histórica",
              "Incluir mais dados estatísticos quando pertinente",
              "Relacionar o tema com diferentes áreas do conhecimento"
            ]
          },
          {
            id: 3,
            name: "Argumentação",
            description: "Selecionar, relacionar, organizar e interpretar informações e argumentos",
            score: Math.floor(Math.random() * 41) + 160,
            feedback: "Argumentos bem estruturados com boa progressão textual.",
            suggestions: [
              "Desenvolver melhor os contra-argumentos",
              "Usar exemplos mais específicos e atuais",
              "Fortalecer a conexão entre os parágrafos"
            ]
          },
          {
            id: 4,
            name: "Coesão e Coerência",
            description: "Demonstrar conhecimento dos mecanismos linguísticos para construção da argumentação",
            score: Math.floor(Math.random() * 41) + 160,
            feedback: "Texto bem articulado com uso adequado de conectivos.",
            suggestions: [
              "Variar mais os elementos coesivos",
              "Melhorar as retomadas anafóricas",
              "Cuidar da progressão temática"
            ]
          },
          {
            id: 5,
            name: "Proposta de Intervenção",
            description: "Elaborar proposta de intervenção respeitando os direitos humanos",
            score: Math.floor(Math.random() * 41) + 160,
            feedback: "Proposta viável e detalhada, respeitando os direitos humanos.",
            suggestions: [
              "Detalhar melhor o agente responsável",
              "Especificar os meios de execução",
              "Apresentar possíveis efeitos da proposta"
            ]
          }
        ],
        totalScore: 0,
        overallFeedback: "Redação demonstra bom domínio das competências avaliadas. Continue praticando para aperfeiçoar ainda mais sua escrita!"
      };
      
      mockEvaluation.totalScore = mockEvaluation.competencies.reduce(
        (sum, comp) => sum + comp.score, 0
      );
      
      setEvaluation(mockEvaluation);
      setIsEvaluating(false);
    }, 3000);
  };

  const handleNewEssay = () => {
    setCurrentEssay(null);
    setEvaluation(null);
    setIsEvaluating(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {!currentEssay && !evaluation && !isEvaluating && (
        <>
          <Hero />
          <CompetenciesGuide />
          <EssayForm onSubmit={handleEssaySubmit} />
        </>
      )}
      
      {isEvaluating && (
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="animate-bounce-in">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
              <h2 className="text-2xl font-bold mb-4">Avaliando sua redação...</h2>
              <p className="text-muted-foreground mb-8">
                Nossa IA está analisando seu texto baseado nas 5 competências do ENEM
              </p>
            </div>
          </div>
        </div>
      )}
      
      {evaluation && (
        <EssayEvaluation 
          essay={currentEssay!} 
          evaluation={evaluation} 
          onNewEssay={handleNewEssay}
        />
      )}
    </div>
  );
};

export default Index;