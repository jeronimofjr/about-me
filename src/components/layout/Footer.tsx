
import { myself } from "../../config/constants";

const Footer = () => {
    return (
        <footer className="pt-12 border-t border-[#9f5717] flex justify-between items-center text-[10px] text-[#7d4412]  font-bold uppercase tracking-widest">
            <p>{myself["pt-BR"].footer.copyright}</p>
            <p> {myself["pt-BR"].footer.role}</p>
        </footer>
    );
};

export default Footer;

