import classNames from 'classnames';
import { useState } from 'react';
import './CustomButton.scss';

interface customButtonProps {
  value: string;
  onClick?: () => void;
}

const CustomButton = ({ value, onClick }: customButtonProps) => {
  const [selected, setSelected] = useState<boolean>(false);

  const onClickHandler = () => {
    setSelected(!selected);
    if (onClick) onClick();
  };

  return (
    <button className={classNames('customButton', { active: selected })} onClick={onClickHandler}>
      {value}
    </button>
  );
};

export default CustomButton;
