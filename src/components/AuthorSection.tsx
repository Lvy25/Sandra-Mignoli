export const AuthorSection = () => {
  return (
    <section className="py-16 px-6 gradient-sacred">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card p-8 md:p-12 rounded-3xl shadow-sacred text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-spirit-brown">
            Conheça Sandra Mignoli: A Voz da Esperança
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="flex-shrink-0">
              <img 
                src="/lovable-uploads/a3ba830f-1d01-4dbc-9505-e241f25b7efb.png" 
                alt="Sandra Mignoli" 
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-sacred"
              />
            </div>
            
            <div className="space-y-6 text-center md:text-left">
              <p className="text-lg md:text-xl leading-relaxed text-blessing-brown">
                Sandra Mignoli é uma especialista em espiritualidade renomada, cuja história 
                de vida ecoa a sua dor. Ela vivenciou a angústia de ver seu próprio filho 
                mergulhado no mundo das drogas, e foi dessa profunda experiência que nasceu 
                o <span className="font-bold text-spirit-brown">Método Filhos de Deus em Terra.</span>
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed text-blessing-brown">
                Com mais de <span className="font-bold text-divine-gold text-2xl">3.000 famílias</span> já 
                reconectadas com Deus, Sandra se tornou um farol para pais que anseiam pela 
                salvação de seus filhos.
              </p>
            </div>
          </div>
          
          <blockquote className="border-l-4 border-divine-gold pl-6 py-4 italic text-xl md:text-2xl text-spirit-brown font-medium">
            "Minha missão é guiar cada pai e mãe a clamar com sabedoria pela alma de seus filhos."
            <footer className="text-right mt-4 text-divine-gold font-bold">
              — Sandra Mignoli
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};