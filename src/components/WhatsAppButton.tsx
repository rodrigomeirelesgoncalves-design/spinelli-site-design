import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/5566999784828?text=Olá! Gostaria de agendar uma consulta com discrição."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-foreground flex items-center justify-center shadow-lg"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    aria-label="Contato via WhatsApp"
  >
    <MessageCircle className="w-5 h-5 text-background" strokeWidth={1.5} />
  </motion.a>
);

export default WhatsAppButton;
