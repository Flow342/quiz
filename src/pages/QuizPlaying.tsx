import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const QuizPlaying = () => {
    const params = Number(useParams().id);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const quiz = useSelector((state: RootState) => state.quiz)[params];
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [checked, setChecked] = useState<boolean>(true);
    const [selectedAnswer, setSelectedAnswer] = useState<number>(0);
    const [counter, setCounter] = useState<number>(0);
    const [answers, setAnswers] = useState<number[]>([]);
    const wrong: React.CSSProperties = {
        background: "red",
        color: "white",
        border: "none",
    };
    console.log(quiz.questions);

    const correct: React.CSSProperties = {
        background: "lightgreen",
        color: "white",
        border: "none",
    };

    const answerCheck = (index: number) => {
        setChecked(false);
        if (checked && quiz.questions[currentQuestion].answer === index) {
            setCounter((prev) => prev + 1);
        }
        setSelectedAnswer(index);
        setAnswers([...answers, selectedAnswer]);
    };

    const nextQuestion = () => {
        if (currentQuestion !== quiz.questions.length - 1) {
            setChecked(true);
            setCurrentQuestion((prev) => prev + 1);
        } else {
            setIsPlaying(false);
        }
    };
    const toggleStyle = (index: number) => {
        if (!checked) {
            if (index === quiz.questions[currentQuestion].answer) {
                return correct;
            }
            if (index === selectedAnswer) {
                if (selectedAnswer !== quiz.questions[currentQuestion].answer) {
                    return wrong;
                }
            }
        }
    };

    return (
        <div>
            {isPlaying ? (
                <div>
                    <div>{quiz.questions[currentQuestion].question}</div>
                    {quiz.questions[currentQuestion].items.map(
                        (item: string, index: number) => (
                            <button
                                style={toggleStyle(index)}
                                disabled={!checked}
                                onClick={() => answerCheck(index)}
                                key={index}
                            >
                                {item}
                            </button>
                        )
                    )}
                    <button disabled={checked} onClick={() => nextQuestion()}>
                        Следующий вопрос
                    </button>
                </div>
            ) : (
                <div>{counter + " / " + quiz.questions.length}</div>
            )}
        </div>
    );
};

export default QuizPlaying;
