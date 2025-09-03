import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Send, AlertCircle } from "lucide-react";
import { Essay } from "@/pages/Index";

interface EssayFormProps {
  onSubmit: (essay: Essay) => void;
}

export const EssayForm = ({ onSubmit }: EssayFormProps) => {
  const [theme, setTheme] = useState("");
  const [text, setText] = useState("");
  const [errors, setErrors] = useState<{ theme?: string; text?: string }>({});

  const validateForm = () => {
    const newErrors: { theme?: string; text?: string } = {};
    
    if (!theme.trim()) {
      newErrors.theme = "O tema da redação é obrigatório";
    }
    
    if (!text.trim()) {
      newErrors.text = "O texto da redação é obrigatório";
    } else if (text.trim().split(/\s+/).length < 100) {
      newErrors.text = "A redação deve ter pelo menos 100 palavras";
    } else if (text.trim().split(/\s+/).length > 400) {
      newErrors.text = "A redação deve ter no máximo 400 palavras";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({ theme: theme.trim(), text: text.trim() });
    }
  };

  const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;

  return (
    <section id="essay-form" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Envie sua Redação para Avaliação
            </h2>
            <p className="text-xl text-muted-foreground">
              Preencha os campos abaixo com sua redação e receba uma avaliação completa
            </p>
          </div>

          <Card className="shadow-card border-0 animate-fade-in">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Formulário de Redação</CardTitle>
              <CardDescription className="text-base">
                Insira o tema proposto e sua redação completa
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="theme" className="text-base font-semibold">
                    Tema da Redação *
                  </Label>
                  <Input
                    id="theme"
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    placeholder="Ex: A importância da educação ambiental na sociedade brasileira"
                    className="text-base p-4 h-12"
                  />
                  {errors.theme && (
                    <div className="flex items-center gap-2 text-danger text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.theme}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="text" className="text-base font-semibold">
                      Texto da Redação *
                    </Label>
                    <span className={`text-sm ${
                      wordCount < 100 ? 'text-danger' : 
                      wordCount > 400 ? 'text-danger' : 
                      'text-success'
                    }`}>
                      {wordCount} palavras
                    </span>
                  </div>
                  <Textarea
                    id="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Digite sua redação aqui... (mínimo 100 palavras, máximo 400 palavras)"
                    className="min-h-[300px] text-base p-4 resize-none"
                    rows={15}
                  />
                  {errors.text && (
                    <div className="flex items-center gap-2 text-danger text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.text}
                    </div>
                  )}
                  <div className="text-xs text-muted-foreground">
                    Dica: Uma redação do ENEM deve ter entre 100 e 400 palavras para nossa avaliação preliminar
                  </div>
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg py-6"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Avaliar Redação
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};