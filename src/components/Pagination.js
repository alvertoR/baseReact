import React from 'react';
import './styles/Pagination.css';

const Pagination = ({ postPerPage, totalPost, paginate }) => {
    const pageNumbers = [];

    //Get pages numbers
    for(let i = 1; i<=Math.ceil(totalPost / postPerPage); i++){
        pageNumbers.push(i);
    }
    return(
        <nav className="pagination">
            <ul className="pagination-container">
                {pageNumbers.map(number => (
                    <li className="pagination-container-item" key={number}>
                        <button  
                            className="pagination-container-button"
                            onClick={() => paginate(number)}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;