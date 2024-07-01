import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import DefaultButton from "../../UI/DefaultButton/DefaultButton";
import styles from "./CreateListItemPage.module.css";
import QuizItems from "../../containers/QuizItems/QuizItems";

const CreateListItemPage = () => {
    const quiz = useSelector((state: RootState) => state.quiz);
    const navigate = useNavigate();

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <p className={styles.heading}>Создай свою викторину!</p>
                {quiz.map((item, index) => (
                    <QuizItems item={item} index={index} key={index} />
                ))}
                <DefaultButton
                    onClick={() => navigate("/create/" + quiz.length)}
                >
                    Создать новую
                </DefaultButton>
            </div>
        </div>
    );
};

export default CreateListItemPage;
