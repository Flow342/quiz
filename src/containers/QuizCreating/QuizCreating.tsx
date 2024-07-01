import { useEffect, useState } from "react";
import CreateListItemPage from "../../pages/CreateItemPage";
import { quizItem, quiz } from "../../interfaces/interfaces";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { editQuiz } from "../../store/item/item";
import DefaultButton from "../../UI/DefaultButton/DefaultButton";
import styles from "./QuizCreating.module.css";
import TextInput from "../../UI/TextInput/TextInput";

function QuizCreating() {
    const params = Number(useParams().id);
    const navigate = useNavigate();
    const quizzes = useSelector((state: RootState) => state.quiz);
    const dispatch = useDispatch();
    const defaultQuiz: quiz = {
        name: "",
        body: "",
        questions: [{ question: "", answer: 0, items: ["", ""] }],
        id: params,
    };
    const [quiz, setQuiz] = useState<quiz>(
        quizzes[params] ? { ...quizzes[params] } : { ...defaultQuiz }
    );
    const [quizContent, setQuizContent] = useState<quizItem[]>([
        ...quiz.questions,
    ]);
    useEffect(
        () => setQuiz({ ...quiz, questions: [...quizContent] }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [quizContent]
    );
    const quizAction = () => {
        navigate("/create");
        setQuiz({ name: "", body: "", questions: [], id: params });
        dispatch(editQuiz(quiz));
    };

    return (
        <div>
            <div className={styles.wrapper}>
                <div>
                    <TextInput
                        placeholder="Название"
                        value={quiz.name}
                        onChange={(e) =>
                            setQuiz({ ...quiz, name: e.target.value })
                        }
                    />
                    <TextInput
                        placeholder="Описание"
                        value={quiz.body}
                        onChange={(e) =>
                            setQuiz({ ...quiz, body: e.target.value })
                        }
                    />
                </div>
                {quizContent.map((_item, index) => (
                    <div key={index}>
                        <CreateListItemPage
                            index={index}
                            quizContent={quizContent}
                            setQuizContent={setQuizContent}
                        />
                    </div>
                ))}
                <DefaultButton
                    onClick={() =>
                        setQuizContent([
                            ...quizContent,
                            { question: "", items: ["", ""], answer: 1 },
                        ])
                    }
                >
                    Добавить вопрос
                </DefaultButton>
            </div>
            <DefaultButton
                disabled={
                    quiz.name &&
                    quiz.body &&
                    quiz.questions[0].question &&
                    quiz.questions[0].items[0] &&
                    quiz.questions[0].items[1]
                        ? false
                        : true
                }
                onClick={() => {
                    quizAction();
                }}
            >
                Подтвердить
            </DefaultButton>
        </div>
    );
}

export default QuizCreating;
