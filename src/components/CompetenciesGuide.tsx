import { CheckCircle, FileText, Brain, Link, Target, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const CompetenciesGuide = () => {
  const competencies = [
    {
      id: 1,
      title: "Domínio da Língua Portuguesa",
      description: "Demonstrar domínio da modalidade escrita formal da Língua Portuguesa",
      icon: FileText,
      color: "text-success",
      bgColor: "bg-success/10",
      details: [
        "Uso correto da norma padrão",
        "Gramática, ortografia e pontuação",
        "Vocabulário adequado ao contexto",
        "Clareza na expressão das ideias"
      ]
    },
    {
      id: 2,
      title: "Compreensão do Tema",
      description: "Compreender a proposta de redação e aplicar conceitos das várias áreas de conhecimento",
      icon: Brain,
      color: "text-primary",
      bgColor: "bg-primary/10",
      details: [
        "Entendimento da proposta temática",
        "Desenvolvimento dentro do tema",
        "Conhecimentos interdisciplinares",
        "Repertório sociocultural"
      ]
    },
    {
      id: 3,
      title: "Seleção e Organização",
      description: "Selecionar, relacionar, organizar e interpretar informações, fatos, opiniões e argumentos",
      icon: Target,
      color: "text-warning",
      bgColor: "bg-warning/10",
      details: [
        "Seleção de informações relevantes",
        "Organização lógica das ideias",
        "Argumentação consistente",
        "Interpretação crítica dos fatos"
      ]
    },
    {
      id: 4,
      title: "Mecanismos Linguísticos",
      description: "Demonstrar conhecimento dos mecanismos linguísticos necessários para a construção da argumentação",
      icon: Link,
      color: "text-danger",
      bgColor: "bg-danger/10",
      details: [
        "Uso de conectivos adequados",
        "Coesão textual",
        "Coerência argumentativa",
        "Progressão temática"
      ]
    },
    {
      id: 5,
      title: "Proposta de Intervenção",
      description: "Elaborar proposta de intervenção para o problema abordado, respeitando os direitos humanos",
      icon: Users,
      color: "text-primary-dark",
      bgColor: "bg-primary/5",
      details: [
        "Proposta específica e viável",
        "Detalhamento da intervenção",
        "Respeito aos direitos humanos",
        "Agente, meio, ação e efeito"
      ]
    }
  ];

  return (
    <section id="competencies" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            As 5 Competências do ENEM
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada competência vale até 200 pontos. Entenda o que é avaliado em cada uma delas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {competencies.map((comp, index) => (
            <Card 
              key={comp.id} 
              className="hover:shadow-card transition-all duration-300 animate-slide-up border-0 shadow-sm hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-xl ${comp.bgColor} flex items-center justify-center mb-3`}>
                  <comp.icon className={`w-6 h-6 ${comp.color}`} />
                </div>
                <CardTitle className="text-lg">
                  Competência {comp.id}
                </CardTitle>
                <CardDescription className="font-medium text-foreground">
                  {comp.title}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {comp.description}
                </p>
                <div className="space-y-2">
                  {comp.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};