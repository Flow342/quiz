import { ChangeEvent, FC } from "react";
import styles from "./TextInput.module.css";

interface InputBaseProps {
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: FC<InputBaseProps> = ({ placeholder, value, onChange }) => {
    return (
        <input
            className={styles.TextInput}
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

export default TextInput;
