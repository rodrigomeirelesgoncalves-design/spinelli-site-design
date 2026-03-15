import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/5566999999999?text=Olá! Gostaria de agendar uma consulta."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    aria-label="Contato via WhatsApp"
  >
    <MessageCircle className="w-6 h-6 text-primary-foreground" strokeWidth={1.5} />
  </motion.a>
);

export default WhatsAppButton;
