import useLoader from "../../useLoader";
import "./style.scss"


export default function Loader(){
    const {loading}=useLoader();
    return(loading &&
        (
            <div className="div">
                <span className="loader"></span>
            </div>
        ))
}