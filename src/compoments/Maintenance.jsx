import { Wrench } from "lucide-react";
import { Link } from "react-router-dom";

export const Maintenance = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center px-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg w-full">
        <div className="flex justify-center mb-6">
          <Wrench size={84} className="text-primary animate-pulse" />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Página em manutenção</h1>
        <p className="text-gray-600 text-lg mb-4">
          Estamos trabalhando para melhorar sua experiência.
          <br />
          Por favor, volte mais tarde.
        </p>
        <Link to={'/'} className="bg-primary text-white py-2 px-12 rounded-lg ml-4 cursor-pointer hover:bg-primary/90">Ir para Home</Link>
      </div>
    </div>
  );
};