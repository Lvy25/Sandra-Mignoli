import { CheckCircle } from "lucide-react";

export const MethodSection = () => {
  const benefits = [
    {
      title: "Direcionamento de Oração Estratégico",
      description: "Aprenda a orar com propósito e poder."
    },
    {
      title: "Comunidade de Apoio Exclusiva",
      description: "Conecte-se com outros pais de fé."
    },
    {
      title: "Paz e Esperança Renovadas",
      description: "Transforme a angústia em fé."
    },
    {
      title: "Recursos de Cura e Libertação",
      description: "Ensinamentos para cura e libertação espiritual."
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card p-8 md:p-12 rounded-3xl shadow-blessed text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-spirit-brown">
            O Método Filhos de Deus em Terra: Seu Guia Para a Transformação
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed text-blessing-brown mb-8">
            Não é apenas um devocional, é uma <span className="font-bold text-spirit-brown">jornada guiada!</span> Um 
            programa completo que oferece direcionamento estratégico de oração, ensinamentos 
            profundos e suporte necessário para orar eficazmente pela salvação e retorno de seus filhos.
          </p>
          
          <div className="grid gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-sacred-cream rounded-2xl shadow-blessed text-center md:text-left">
                <CheckCircle className="w-8 h-8 text-divine-gold flex-shrink-0 mt-1 mx-auto md:mx-0" />
                <div>
                  <h3 className="text-xl font-bold text-spirit-brown mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-blessing-brown">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};