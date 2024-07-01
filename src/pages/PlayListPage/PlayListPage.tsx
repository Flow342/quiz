import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import DefaultButton from "../../UI/DefaultButton/DefaultButton";
import styles from "./PlayListPage.module.css";

const PlayListPage = () => {
    const quizzes = useSelector((state: RootState) => state.quiz);
    const navigate = useNavigate();

    const playButton = (index: number) => {
        navigate("/play/" + index);
    };

    return (
        <div>
            <h1 className={styles.heading}>Играть!</h1>
            {quizzes.map((item, index) => (
                <div key={index} className={styles.wrapper}>
                    <div className={styles.container}>
                        <div className={styles.item_name_body}>
                            {item.name}, {item.body}
                        </div>
                        <div className={styles.button_container}>
                            <DefaultButton onClick={() => playButton(index)}>
                                Играть
                            </DefaultButton>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PlayListPage;
