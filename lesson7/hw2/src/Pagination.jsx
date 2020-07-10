import React from 'react';

//1.write render
//2.iSPrevAval
// 3.isNextAval




const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {





    const isPrevPageAvailable = currentPage > 1;
    const isNextPageAvailable = totalItems - itemsPerPage * currentPage >= 0;

    // console.log(isNextAvaible)
    // console.log(isPrevPageAvaible)
    return (

        <div className="pagination">
            <button className="btn"
            disabled={!isPrevPageAvailable}
            onClick={goPrev}>
                {isPrevPageAvailable && '←'}
            </button>
            <span className="pagination__page">{currentPage}</span>
            <button className="btn" 
            disabled={!isNextPageAvailable}
            onClick={goNext}>
            {isNextPageAvailable && '→'}</button>
        </div>
    )



}

export default Pagination