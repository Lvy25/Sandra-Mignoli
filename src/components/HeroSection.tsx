import { Button } from "@/components/ui/button";
import spiritualBackground from "@/assets/spiritual-background.jpg";

export const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${spiritualBackground})` }}
    >
      <div className="absolute inset-0 gradient-sacred opacity-90" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text leading-tight">
          Você Sonha com a Salvação de Seus Filhos? Há um Caminho.
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-blessing-brown font-medium leading-relaxed max-w-3xl mx-auto">
          Descubra o <span className="font-bold text-spirit-brown">Método Filhos de Deus em Terra</span> e 
          traga seus amados de volta ao abraço divino, em uma experiência que inspira esperança e transformação.
        </p>
        
        <Button 
          variant="divine" 
          size="lg"
          className="px-12 py-4 text-lg font-bold"
          onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Descobrir o Método Agora
        </Button>
      </div>
    </section>
  );
};