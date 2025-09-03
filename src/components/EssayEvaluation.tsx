import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Trophy, 
  RefreshCw, 
  CheckCircle, 
  AlertTriangle, 
  Target,
  TrendingUp,
  FileText,
  Lightbulb
} from "lucide-react";
import { Essay, EvaluationResult } from "@/pages/Index";

interface EssayEvaluationProps {
  essay: Essay;
  evaluation: EvaluationResult;
  onNewEssay: () => void;
}

export const EssayEvaluation = ({ essay, evaluation, onNewEssay }: EssayEvaluationProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 180) return "text-success";
    if (score >= 140) return "text-warning";
    return "text-danger";
  };

  const getScoreBadge = (score: number) => {
    if (score >= 180) return { variant: "default" as const, label: "Excelente", className: "bg-success text-success-foreground" };
    if (score >= 160) return { variant: "secondary" as const, label: "Bom", className: "bg-warning text-warning-foreground" };
    if (score >= 140) return { variant: "secondary" as const, label: "Regular", className: "bg-warning/70 text-warning-foreground" };
    return { variant: "destructive" as const, label: "Precisa Melhorar", className: "" };
  };

  const getOverallGrade = (score: number) => {
    if (score >= 900) return { grade: "A+", color: "text-success", description: "Excelente! Muito próximo da nota 1000!" };
    if (score >= 800) return { grade: "A", color: "text-success", description: "Muito bom! Continue assim!" };
    if (score >= 700) return { grade: "B+", color: "text-warning", description: "Bom trabalho! Pequenos ajustes podem levar à nota máxima." };
    if (score >= 600) return { grade: "B", color: "text-warning", description: "No caminho certo! Foque nas sugestões de melhoria." };
    if (score >= 500) return { grade: "C+", color: "text-danger", description: "Precisa de mais prática. Revise os critérios." };
    return { grade: "C", color: "text-danger", description: "Continue estudando! Cada redação é uma oportunidade de melhoria." };
  };

  const overallGrade = getOverallGrade(evaluation.totalScore);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header com Resultado Geral */}
        <Card className="border-0 shadow-card bg-gradient-primary text-white animate-bounce-in">
          <CardHeader className="text-center pb-6">
            <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold">
              Resultado da Avaliação
            </CardTitle>
            <CardDescription className="text-primary-light text-lg">
              {essay.theme}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-6">
              <div className="text-6xl md:text-7xl font-bold mb-2">
                {evaluation.totalScore}
              </div>
              <div className="text-xl opacity-90">de 1000 pontos</div>
              <Badge className={`mt-3 ${overallGrade.color} text-lg px-4 py-2`} variant="secondary">
                Conceito {overallGrade.grade}
              </Badge>
            </div>
            <p className="text-lg opacity-90 mb-6">
              {overallGrade.description}
            </p>
            <Button 
              onClick={onNewEssay}
              variant="secondary"
              size="lg"
              className="bg-white/20 hover:bg-white/30 text-white border-white/30"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Avaliar Nova Redação
            </Button>
          </CardContent>
        </Card>

        {/* Detalhamento por Competências */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Target className="w-7 h-7 text-primary" />
              Avaliação por Competências
            </h3>
            
            {evaluation.competencies.map((comp, index) => {
              const badge = getScoreBadge(comp.score);
              return (
                <Card 
                  key={comp.id} 
                  className="border-0 shadow-sm hover:shadow-card transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">
                          Competência {comp.id}
                        </CardTitle>
                        <CardDescription className="font-medium">
                          {comp.name}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${getScoreColor(comp.score)}`}>
                          {comp.score}
                        </div>
                        <div className="text-sm text-muted-foreground">/ 200</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Progress 
                      value={(comp.score / 200) * 100} 
                      className="h-3"
                    />
                    <Badge className={badge.className} variant={badge.variant}>
                      {badge.label}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      {comp.feedback}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Sugestões de Melhoria */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Lightbulb className="w-7 h-7 text-warning" />
              Sugestões de Melhoria
            </h3>
            
            {evaluation.competencies.map((comp) => (
              <Card 
                key={`suggestions-${comp.id}`}
                className="border-0 shadow-sm"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center font-bold">
                      {comp.id}
                    </span>
                    {comp.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {comp.suggestions.map((suggestion, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}

            {/* Feedback Geral */}
            <Card className="border-0 shadow-sm bg-muted/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Feedback Geral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">
                  {evaluation.overallFeedback}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};