import { useParams } from "react-router-dom";

import Template from "../template";
import Crompress from "../crompress";

const Selector = () => {
    const {URL} = useParams();
    if (URL === "Crompress") {
        return (
            <Crompress />
        )
    }
    return ( <div><Template /></div> );
}

export default Selector;