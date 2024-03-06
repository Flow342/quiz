import { CSSProperties, useState } from "react";

const QuizPlayItem = ({ children, index, correctAnswer }: any) => {
    const [styles, setStyles] = useState<CSSProperties>({
        border: "1px solid black",
        fontSize: "20px",
    });
    const correctedCheck = () => {
        if (index === correctAnswer) {
            setStyles({ ...styles, color: "green" });
        } else {
            setStyles({ ...styles, color: "red" });
        }
    };

    return (
        <button onClick={() => correctedCheck()} style={styles}>
            {children}
        </button>
    );
};

export default QuizPlayItem;
