import Languages from "./Languages";
import Degrees from "./Degrees";

const Education = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Degrees />
            <Languages />
        </div>
    )
}


export default Education;