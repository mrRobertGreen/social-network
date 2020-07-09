import React, {useState} from "react";
import style from "./paginator.module.css";

const Paginator = ({intervalSize, onPageChanged, currentPage, totalItemsCount, pageSize}) => {
	let pages = [];
	let pagesCount = Math.ceil(totalItemsCount / pageSize)

	const [currentInterval, toggleCurrentInterval] = useState(0)

	const toggleIntervalOnRight = () => {
		toggleCurrentInterval(currentInterval+1)
	}
	const toggleIntervalOnLeft = () => {
		toggleCurrentInterval(currentInterval-1)
	}

	for (let i = currentInterval * intervalSize; i < currentInterval * intervalSize + intervalSize; i++) {
		pages.push(i + 1);
	}

	return (
		<div>
			{
				currentInterval > 0 && <span onClick={() => toggleIntervalOnLeft()}>{"<"}</span>
			}
			{pages.filter(p => p <= pagesCount).map(pageNumber => (<span
				onClick={() => onPageChanged(pageNumber)}
				className={currentPage === pageNumber && style.selectedPage}>{pageNumber}
					</span>))}

			{
				currentInterval < Math.ceil(pagesCount / intervalSize) - 1
				&& <span onClick={() => toggleIntervalOnRight()}>{">"}</span>
			}
		</div>
	)
};


export default Paginator;