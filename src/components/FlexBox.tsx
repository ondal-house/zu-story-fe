import classNames from 'classnames';
import './FlexBox.scss';

const scrollType = {
  Horizontal: 'Horizontal',
  Vertical: 'Vertical',
} as const;

export type scrollType = typeof scrollType[keyof typeof scrollType];

export type flexBoxProps = {
  className?: string;
  fullWidth?: boolean;
  scrollable?: scrollType;
};

export const FlexBox = (props: React.PropsWithChildren<flexBoxProps>) => {
  return (
    <div
      className={classNames('commonFlexBox', props.className, {
        fullWidthBox: props.fullWidth,
        verticalScroll: props.scrollable === scrollType.Horizontal,
        horizontalScroll: props.scrollable === scrollType.Horizontal,
      })}
    >
      {props.children}
    </div>
  );
};
