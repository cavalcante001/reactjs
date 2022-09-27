import { Link } from "react-router-dom";
export const About = () => {
    return (
        <div>
            Item: 
            <ul>
                <li><Link to="/sobre/paulo">Paulo</Link></li>
                <li><Link to="/sobre/henrique">Henrique</Link></li>
            </ul>
        </div>
    );
}