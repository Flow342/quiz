import { useNavigate } from "react-router-dom";
import DefaultButton from "../../UI/DefaultButton/DefaultButton";
import { quiz } from "../../interfaces/interfaces";
import styles from "./QuizItems.module.css";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../store/item/item";

interface Props {
    item: quiz;
    index: number;
}

const QuizItems = ({ item, index }: Props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div>
            <div className={styles.item}>
                <div className={styles.wrapper}>
                    <div className={styles.text_left}>
                        <div className={styles.item_name_body}>
                            Название: {item.name}
                        </div>
                        <div className={styles.item_name_body}>
                            Описание: {item.body}
                        </div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <DefaultButton onClick={() => navigate("/create/" + index)}>
                        Изменить
                    </DefaultButton>
                    <DefaultButton onClick={() => dispatch(deleteItem(item))}>
                        Удалить
                    </DefaultButton>
                </div>
            </div>
        </div>
    );
};

export default QuizItems;
