import { myself } from "../../config/constants";
import { motion } from 'framer-motion';

const Header = () => {

    return (
        <header className="space-y-12">
            <motion.div
                className="flex flex-col gap-5"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <div className="space-y-3">
                    <motion.img
                        className="w-28 h-28 rounded-full ring-2 ring-[#f2be64]  bg-[#f2be64]   flex items-center justify-center text-3xl font-extrabold tracking-tight"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        src="/profile.png"
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        aria-label="Profile placeholder"
                    >
                    </motion.img>
                    <div className="flex flex-col sm:items-start sm:gap-2">
                        <div className="flex justify-between w-full items-center gap-3">
                            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-[#381f08]">{myself["pt-BR"].header.name}</h1>
                            <div className="flex items-center gap-1">
                            </div>
                        </div>
                        <p className="text-xl text-[#6c3b10] font-medium mt-2 sm:mt-0">
                            {myself["pt-BR"].header.role}
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#6c3b10]  font-bold uppercase tracking-[0.2em]">
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500" aria-hidden />
                            {myself["pt-BR"].header.nationality}
                        </span>
                        <span className="text-[#8e4d14] ">/</span>
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" aria-hidden />
                            {myself["pt-BR"].header.location}
                        </span>
                        <span className="text-[#8e4d14] ">/</span>
                        <a
                            href={`https://wa.me/${myself["pt-BR"].header.phone.replace(/[^0-9]/g, '')}?text=Olá!%20Gostaria%20de%20mais%20informações?`}
                            className="hover:text-[#050301] hover:font-extrabold transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {myself["pt-BR"].header.phone}
                        </a>
                        <span className="text-[#8e4d14] ">/</span>
                        <a href={`mailto:${myself["pt-BR"].header.email}`} className="hover:text-[#050301] hover:font-extrabold transition-colors">
                            {myself["pt-BR"].header.email}
                        </a>
                    </div>
                </div>
            </motion.div>
        </header >
    );
}

export default Header;