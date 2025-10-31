import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-white">Pronto para Transformar seus Sistemas?</h2>
          <p className="text-lg text-indigo-100">
            Agende uma consulta gratuita com nossos especialistas e descubra como 
            podemos otimizar seus processos e sistemas.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="gap-2">
              Agendar Consulta Gratuita
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
