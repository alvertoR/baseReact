import React, { useState, useEffect } from 'react';

//Styles
import './styles/Landing.css';

//components
import CardList   from '../components/CardList';
import Footer     from '../components/Footer';
import Skeleton   from '../components/Skeleton';
import Pagination from '../components/Pagination';

const URL_BASE = 'https://backletras.herokuapp.com/letras';

const Landing = () => {

    const [data, setData]       = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError]     = useState(null);
    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(7);
    
    //GetCurrentPost
    const indexOfLastPost  = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost      = data.slice(indexOfFirstPost, indexOfLastPost);

    //Cange page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        const fetchData = async (url) => {
            try{
                setLoading(true)
                const response = await fetch(`${url}/writings`);
                const data     = await response.json();
                setData(data.data);
                setLoading(false);
            }catch(error){
                setError(error);
                console.log(error);
            }
        }

        fetchData(URL_BASE);
    }, []);

    return(
        <div className="landing">
            <h1 className="landing-title">Letras</h1>
            {loading && (
                <Skeleton />
            )}
            {!loading && (
                <CardList writings={currentPost} />
            )}
            <Pagination 
                postPerPage={postPerPage} 
                totalPost={data.length}
                paginate={paginate}
            />
            <Footer />
        </div>
    );
}

export default Landing;