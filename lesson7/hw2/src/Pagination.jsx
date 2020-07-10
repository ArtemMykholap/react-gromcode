import React from 'react';

//1.write render
//2.iSPrevAval
// 3.isNextAval




const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {





    const isPrevPageAvaible = currentPage > 1;
    const isNextPageAvaible = totalItems - itemsPerPage * currentPage >= 0;

    // console.log(isNextAvaible)
    // console.log(isPrevPageAvaible)
    return (

        <div className="pagination">
            <button className="btn"
            disabled={!isPrevPageAvaible}
            onClick={goPrev}>
                {isPrevPageAvaible && '←'}
            </button>
            <span className="pagination__page">{currentPage}</span>
            <button className="btn" 
            disabled={!isNextPageAvaible}
            onClick={goNext}>
            {isNextPageAvaible && '→'}</button>
        </div>
    )



}

export default Pagination