import classNames from "classnames";
import styles from "./button.module.scss";
const BTN_STYLE = {
  primary: styles.btnPrimary,
  outline: styles.btnOutline,
  transparent: styles.btnTransparent,
};
const BTN_COLOR = {
  DANGER: styles.btnDanger,
  PRIMARYCOLOR: styles.btnPrimaryColor,
  RED: styles.btnRed,
};
const BTN_SIZE = {
  LARGE: styles.btnLarge,
  MIDDLE: styles.btnMiddle,
  SMALL: styles.btnSmall,
};

const Button = ({
  children = null,
  isDisabled = false,
  onClick = () => {},
  btnColor = "",
  btnSize = "",
  btnStyle = "",
  title = "",
}) => {
  return (
    <button
      title={title}
      disabled={isDisabled}
      onClick={(...param) => onClick(...param)}
      className={classNames(styles.button, btnStyle, btnColor, btnSize)}
    >
      {children}
    </button>
  );
};

export { Button, BTN_STYLE, BTN_SIZE, BTN_COLOR };
