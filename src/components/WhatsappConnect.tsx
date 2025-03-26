
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappConnect = () => {
    return (
        <motion.a
            href="https://wa.me/8437333427?text=Hello%20there!%20I%20am%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
        >
            <FaWhatsapp className="w-full h-full" />
        </motion.a>
    )
}

export default WhatsappConnect