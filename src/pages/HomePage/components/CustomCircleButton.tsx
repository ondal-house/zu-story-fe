import './CustomCircleButton.scss';

interface customCircleButtonProps {
  imageUrl?: string;
  title: string;
}

const CustomCircleButton = ({ imageUrl, title }: customCircleButtonProps) => {
  return (
    <button className="customCircleButton" onClick={() => console.log('click customCircleButton')}>
      <img src={imageUrl || 'src/image/soju_image.png'} />
      <p className="title">{title}</p>
    </button>
  );
};

export default CustomCircleButton;
