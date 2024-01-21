import React, {useMemo, useState} from "react";
import styles from "./paginator.module.css";

const Paginator = ({
                       totalItemsCount,
                       pageSize,
                       currentPage,
                       onPageChanged,
                       portionSize = 10,
                   }) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    const pages = useMemo(() => {
        const arr = [];
        for (let i = 1; i <= pagesCount; i++) {
            arr.push(i);
        }
        return arr;
    }, [pagesCount]);

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    const renderPageNumbers = () => {
        return pages
            .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return (
                    <span
                        key={p}
                        className={`${styles.PaginatorPage} Paginator-page ${
                            currentPage === p && styles.selectedPage
                        }`}
                        onClick={() => onPageChanged(p)}
                    >
            {p}
          </span>
                );
            });
    }

    const handlePrevClick = () => {
        setPortionNumber(portionNumber - 1);
    }

    const handleNextClick = () => {
        setPortionNumber(portionNumber + 1);
    }

    return (
        <div>
            {portionNumber > 1 && (
                <button className={styles.back_button} onClick={handlePrevClick}>
                    BACK
                </button>
            )}
            {renderPageNumbers()}
            {portionCount > portionNumber && (
                <button className={styles.next_button} onClick={handleNextClick}>
                    NEXT
                </button>
            )}
        </div>
    );
}


export default Paginator;