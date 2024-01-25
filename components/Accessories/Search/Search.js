import styles from './Search.module.scss';

const Search = ({parPage, setParPage, searchValue, setSearchValue}) => {
  console.log(parPage);
  console.log(searchValue)
    return (
      <div className={styles.quantity_searchbar}>
        <select onClick={(e) => setParPage(parseInt(e.target.value))}>
          <option value="5">5</option>
          <option value="15">15</option>
          <option value="25">25</option>
        </select>
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="search" />
      </div>
    );
};

export default Search;