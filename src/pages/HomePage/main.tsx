import './main.scss';

import SearchBar from './components/SearchBar';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CategoryContentContainer from './CategoryContentContainer';
import BeverageContentContainer from './BeverageContentContainer';
import BoardContentContainer from './BoardContentContainer';

const Main = () => {
  return (
    <div className="mainPage">
      <SearchBar />
      <div className={`mainPageTitleContainer horizon`}>
        <p className="title">카테고리</p>
        <button className="moreButton">
          <span>더보기</span>
          <ArrowForwardIosIcon fontSize="small" />
        </button>
      </div>
      <CategoryContentContainer />
      <div className="mainPageTitleContainer">
        <p className="title">오늘은 이런 술 어때요?</p>
        <p className="subTitle">오늘에 딱 맞는 술을 찾아보세요</p>
      </div>
      <BeverageContentContainer />
      <div className="mainPageTitleContainer">
        <p className="title">게시판 둘러보기</p>
      </div>
      <BoardContentContainer />
    </div>
  );
};

export default Main;
