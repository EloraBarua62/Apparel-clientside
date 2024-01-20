import styles from './Search.module.scss';

const Search = ({setParPage, searchValue, setSearchValue}) => {
    return (
      <div className={styles.quantity_searchbar}>
        <select onClick={(e) => setParPage(parseInt(e.target.value))}>
          <option value="5">5</option>
          <option value="5">15</option>
          <option value="5">25</option>
        </select>
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="search" />
      </div>
    );
};

export default Search;