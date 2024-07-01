import { useState } from "react";
import styles from "./DefaultButton.module.css";

interface Props {
    onClick: () => void;
    children: string;
    disabled?: boolean;
    style?: React.CSSProperties;
}

const DefaultButton = ({ style, onClick, children, disabled }: Props) => {
    const [hover, setHover] = useState<boolean>(false);
    const rootClasses = [styles.button];
    if (!disabled) {
        if (hover) {
            rootClasses.push(styles.hover);
        }
    } else {
        rootClasses.push(styles.disabled);
    }
    return (
        <button
            style={style ? style : {}}
            disabled={disabled}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => onClick()}
            className={rootClasses.join(" ")}
        >
            {children}
        </button>
    );
};

export default DefaultButton;
