import React, { useMemo, useState } from 'react'
import data from './data';
import Pagination from './Pagination';

let PageSize = 10;

const Results = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);


    return (
        <div className="cardContainer">
            {
                currentTableData.map((res) => (
                    <div className="card">
                        <img
                            className="cardImg"
                            src={res.max_photo_url}
                            alt=""
                        />
                        <div className="card-body">
                            <div className='title'>
                                <h3 className="head">{res.hotel_name}</h3>
                                <p className="sub-head">
                                    <strong>
                                        {res.district} {res.city_trans}
                                    </strong>
                                    <small style={{ marginLeft: '10px' }}>
                                        {res.distance_to_cc} Km from centre
                                    </small>
                                </p>
                            </div>
                            <div className='details'>
                                <strong>
                                    {res.accommodation_type_name}
                                </strong>
                                <p>
                                    {
                                        res.unit_configuration_label
                                    }
                                </p>
                            </div>
                        </div>
                        <div className='review'>
                            <h3>
                                {res.review_score}
                            </h3>
                            <p>
                                {res.review_score_word}
                            </p>
                        </div>
                        <div className='price'>
                            EGP 10,138
                        </div>
                        <button>availability</button>
                    </div>
                ))
            }
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </div>
    )
}

export default Results