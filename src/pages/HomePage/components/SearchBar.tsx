import classNames from 'classnames';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.scss';

interface searchBarProps {
  value?: string;
  className?: string;
}

const SearchBar = ({ value, className }: searchBarProps) => {
  return (
    <div className={classNames('searchBarContainer', className)}>
      <input
        placeholder={'어떤 술을 찾으시나요?'}
        value={value}
        onClick={() => console.log(value)}
      />
      <SearchIcon />
    </div>
  );
};

export default SearchBar;
