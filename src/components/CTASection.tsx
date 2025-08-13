import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="cta" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="gradient-divine p-12 md:p-16 rounded-3xl shadow-divine">
          <Heart className="w-16 h-16 text-white mx-auto mb-6" />
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              O Momento de Agir é Agora!
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Não deixe mais um dia passar sem esperança. Sua fé pode ser o 
              instrumento de transformação que seus filhos precisam.
            </p>
          </div>
          
          <Button 
            variant="blessed" 
            size="lg"
            className="px-12 py-6 text-xl font-bold bg-white text-spirit-brown hover:bg-white/90 hover:shadow-divine hover:scale-105 transition-divine"
          >
            Salvar meus filhos
            <ArrowRight className="w-6 h-6 ml-2" />
          </Button>
          
          <p className="text-white/80 text-sm mt-6 max-w-2xl mx-auto">
            Junte-se às mais de 3.000 famílias que já encontraram o caminho de volta 
            através do Método Filhos de Deus em Terra.
          </p>
        </div>
      </div>
    </section>
  );
};