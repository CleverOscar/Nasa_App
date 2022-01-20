import React, {useState} from 'react';

export default function Pagination({data, RenderComponent, title, pageLimit, dataLimit}) {
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);
    

    function goToNextPage(){
        setCurrentPage((page) => page + 1);
    }
    
    function goToPreviousPage(){
        console.log('clicked', data)
        setCurrentPage((page) => page - 1);
    }

    function changePage(event){
        const pageNumber = Number(event.target.textContent);

        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;

        return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;

        return new Array(pageLimit).fill().map((_, idx) => start * idx + 1);
    };


    return(
        <div className="border-2 border-black w-1/2 mx-auto py-4 px-4">
            {title}
            <div>
                {getPaginatedData().map((d, idx) => (
                    <RenderComponent key={idx} data={d} />
                ))}
            </div>

            <div className="flex flex-row justify-between">
                <button className="border-2 border-black p-2 mt-4" onClick={goToPreviousPage}>
                    prev
                </button>

                {getPaginationGroup().map((item, index) => (
                    <button key={index}
                    onClick={changePage}>
                        <span className="mx-4">{item}</span>
                    </button>
                ))}

                <button className="border-2 border-black p-2 mt-4" onClick={goToNextPage}>
                    next
                </button>
            </div>
        </div>
    );

}