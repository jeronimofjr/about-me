import { myself } from "../../config/constants";
import { motion } from 'framer-motion';

const Languages = () => {
    return (
        <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
        >
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#7d4412] border-b border-[#9f5717] pb-1">
                {myself["pt-BR"].sections.languages}
            </h3>
            <div className="text-sm text-[#5b310d]">
                {myself["pt-BR"].education.languages.map((language) => (
                    <p key={language.name}>
                        <span className="font-bold text-[#381f08]">{language.name}:</span> {language.level}
                    </p>
                ))}
            </div>
        </motion.div>
    )
}

export default Languages;