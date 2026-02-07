import { motion } from 'framer-motion';
import { myself } from '../../config/constants';


const Stacks = () => {

    return (
        <div className="flex flex-wrap gap-2 md:gap-3">
            {myself['pt-BR'].skills.map((skill) => (
                <motion.span
                    key={skill}
                    className="px-3 py-1.5  bg-neutral-50  border border-[#9f5717]  rounded-lg text-xs font-bold text-[#5b310d]  hover:border-orange-400  hover:bg-orange-50  hover:text-orange-700  transition-all cursor-pointer shadow-sm hover:shadow-md"
                    whileHover={{ y: -2, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 16 }}
                >
                    {skill}
                </motion.span>
            ))}
        </div>
    );
}


export default Stacks;