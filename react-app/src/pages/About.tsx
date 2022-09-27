import { Link, useSearchParams } from "react-router-dom";
export const About = () => {
    const [searchParams, setSearchParams ] = useSearchParams();

    const setOrder = (order: 'asc' | 'desc') => {
        searchParams.set('order', order);
        setSearchParams(searchParams);
    }

    return (
        <div>
            Filtro: {searchParams.get('filter')}<br />
            Ordem: {searchParams.get('order')};
            <hr />
            <button onClick={() => setOrder('asc')}>Asc</button>
            <button  onClick={() => setOrder('desc')}>Desc</button>
            Página sobre: 
            <ul>
                <li><Link to="/sobre/paulo">Paulo</Link></li>
                <li><Link to="/sobre/henrique">Henrique</Link></li>
            </ul>
        </div>
    );
}