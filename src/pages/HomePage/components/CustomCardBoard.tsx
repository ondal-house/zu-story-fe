import './CustomCardBoard.scss';

interface customCardBoardProps {
  title: string;
  userImageUrl?: string;
  boardCategory: string;
}

const CustomCardBoard = ({ title, userImageUrl, boardCategory }: customCardBoardProps) => {
  return (
    <div className="customCardBoardContainer">
      <div className="userImageContainer">
        <img src={userImageUrl || 'src/image/profile.jpeg'} />
      </div>
      <div className="boardTitle">{title}</div>
      <div className="boardCategoryContainer">{boardCategory} 게시판</div>
    </div>
  );
};

export default CustomCardBoard;
