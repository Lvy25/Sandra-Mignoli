import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Eu estava desolada... Hoje, meu filho está de volta à igreja e à família!",
      author: "Ana P."
    },
    {
      text: "Ver meu filho livre das drogas é um milagre! Recomendo a todos os pais.",
      author: "Carlos R."
    }
  ];

  return (
    <section className="py-16 px-6 gradient-sacred">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-spirit-brown">
          Histórias de Transformação
        </h2>
        
        <div className="grid gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 md:p-10 rounded-3xl shadow-sacred">
              <Quote className="w-12 h-12 text-divine-gold mb-6" />
              
              <blockquote className="text-xl md:text-2xl font-medium text-spirit-brown italic leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>
              
              <footer className="text-right">
                <span className="text-divine-gold font-bold text-lg">
                  — {testimonial.author}
                </span>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};