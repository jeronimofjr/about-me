
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Stacks from "../components/sections/Stacks";
import Education from "../components/sections/Education";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { motion } from 'framer-motion';
import About from "../components/sections/About";

const App = () => {
    return (
        <div className="min-h-screen bg-[#f2be64] text-[#0B0B0B] antialiased selection:bg-orange-100">
            <motion.div
                className="max-w-[800px] mx-auto px-6 py-16 md:py-24 space-y-20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <main className="space-y-12">
                    <Header />
                    <About />
                </main>

                <motion.section
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
                >
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#7d4412] mb-8 border-b border-[#9f5717] pb-2">
                        {"Experiência Profissional"}
                    </h2>

                    <Experience />

                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >

                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#7d4412] mb-8 border-b border-[#9f5717] pb-2">
                        {"Projetos"}
                    </h2>

                    <Projects />
                </motion.section>
                <motion.section
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                >
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#7d4412] mb-8 border-b border-[#9f5717]  pb-2">
                        {"Habilidades"}
                    </h2>
                    <Stacks />
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
                >

                    <Education />
                </motion.section>
                <Footer />
            </motion.div>
        </div>
    )
}

export default App;