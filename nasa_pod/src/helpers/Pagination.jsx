import React, { useState } from 'react';

export default function Pagination({data, RenderComponent, pageLimit, dataLimit}){

    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);


    function getPaginationGroup(){
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    }

    const getPaginatedData = () => {
        const startIndex = (currentPage * dataLimit) - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };
    
    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    function goToNextPage(){
        setCurrentPage((currentPage) => currentPage+ 1);
    }

    function goToPreviousPage() {
        setCurrentPage((currentPage) => currentPage - 1);
    }

    console.log(data)

    return(
        <div>
            Pages
        </div>
    )
}