import { useEffect, useState } from "react";
import CreateQuizForm from "../pages/CreateQuizForm";
import { quizItem, quiz } from "../interfaces/interfaces";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { editQuiz } from "../store/item/item";

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
        navigate("/list");
        setQuiz({ name: "", body: "", questions: [], id: params });
    };

    return (
        <div className="quiz">
            <div>
                <div style={{ border: "1px solid black", padding: 20 }}>
                    <div>
                        <input
                            type="text"
                            placeholder="Название"
                            value={quiz.name}
                            onChange={(e) =>
                                setQuiz({ ...quiz, name: e.target.value })
                            }
                        />
                        <input
                            type="text"
                            placeholder="Описание"
                            value={quiz.body}
                            onChange={(e) =>
                                setQuiz({ ...quiz, body: e.target.value })
                            }
                        />
                    </div>
                    {quizContent.map((_item, index) => (
                        <div
                            style={{ border: "1px solid black", margin: 10 }}
                            key={index}
                        >
                            <CreateQuizForm
                                index={index}
                                quizContent={quizContent}
                                setQuizContent={setQuizContent}
                            />
                        </div>
                    ))}
                    <button
                        onClick={() =>
                            setQuizContent([
                                ...quizContent,
                                { question: "", items: ["", ""], answer: 1 },
                            ])
                        }
                    >
                        новый вопрос
                    </button>
                </div>
                <button
                    onClick={() => {
                        quizAction();
                        dispatch(editQuiz(quiz));
                    }}
                >
                    Редактировать викторину
                </button>
            </div>
        </div>
    );
}

export default QuizCreating;
