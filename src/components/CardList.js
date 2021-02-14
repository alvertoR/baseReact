import React from 'react';

import './styles/CardList.css';

//Componets
import ItemCard from '../components/ItemCard';

//Filtrado de los escritos
//Custom Hooks
function useSearchWrittings(writtings){
    const [query, setQuery]                       = React.useState('');
    const [filteredWritings, setFilteredWritings] = React.useState(writtings);

    React.useMemo(() => {
        const result = writtings.filter(write => {
        return write.title
        .toLowerCase()
        .includes(query.toLowerCase())
        });

        setFilteredWritings(result)

    }, [ writtings, query ]);

    return { query, setQuery, filteredWritings };
}

function CardList(props){
    const writtings = props.writings;  
    
    const { query, setQuery, filteredWritings } = useSearchWrittings(writtings);

    return(
        <div>
            <div className="landing-search">
                <label className="landing-search--label">
                        Buscar escrito
                </label>
                <div className="landing-search--input">
                    <input 
                        type="text" 
                        name="written"
                        placeholder="Nombre del escrito..." 
                        onChange={e => {
                            setQuery(e.target.value);
                        }}   
                    />
                </div>
            </div>
            <div className="galery-writtens">
                {filteredWritings.length ? 
                <ul className="container-writtens">
                    {filteredWritings.map((item) => {
                        return(
                            <li key={item._id}>
                                <ItemCard 
                                    data={item}
                                />
                            </li>
                        )
                    })}
                </ul> :
                <div className="prueba">
                    <p>Nada mor :c</p>
                </div>
                }
            </div>
        </div>
        
    )
};

export default CardList;