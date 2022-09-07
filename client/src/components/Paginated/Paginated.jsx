import React from "react";
import styles from "./Paginated.module.css";

const Paginated = ({ countriesPerPage, allCountries, paginated }) => {
    const pages = [];
    const numberPages = Math.ceil(allCountries / countriesPerPage);

    for (let i = 0; i < numberPages; i++) {
        pages.push(i + 1)
    }

    return (
        <nav>
            <ul className={styles.listContainer}>
                {pages ? pages.map((num) => (
                    <li className={styles.number} key={num}>
                        <a onClick={() => paginated(num)}>
                            {num}
                        </a>
                    </li>
                )) : <div></div>
                }
            </ul>
        </nav>
    )
}

export default Paginated;