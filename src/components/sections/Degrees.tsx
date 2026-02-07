import { myself } from "../../config/constants";
import { motion } from 'framer-motion';

const Degrees = () => {
    return (
        <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
        >
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#7d4412] border-b border-[#9f5717] pb-1">
                {myself["pt-BR"].sections.education}
            </h2>

            <div>
                <p className="font-bold text-sm text-[#381f08]">{myself["pt-BR"].education.institution}</p>
                <p className="text-sm text-[#5b310d]">{myself["pt-BR"].education.degree}</p>
                <p className="text-xs text-[#7d4412] mt-1">{myself["pt-BR"].education.date}</p>
            </div>
        </motion.div>
    )
}


export default Degrees;