import { animate, motion } from "framer-motion";

const FloatingBadge = ({ text, icon: Icon, className,animate }) => {
    return (
        <motion.div
            className={`absolute ${className} z-20`}
            animate={animate}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            whileHover={{
                scale: 1.08,
            }}
        >
            <div className="flex items-center gap-2 rounded-full border border-white/50 bg-white/80 backdrop-blur-xl px-4 py-2 shadow-xl">
                {Icon && <Icon className="text-blue-500 text-lg" />}
                <span className="text-sm font-semibold text-slate-700">
                 {text}

                </span>
            </div>
        </motion.div>
    );
};

export default FloatingBadge;