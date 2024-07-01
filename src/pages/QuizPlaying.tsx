import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import DefaultButton from "../UI/DefaultButton/DefaultButton";

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
    const defaultStyle: React.CSSProperties = {
        color: "white",
        background: "transparent",
        border: "2px solid #0077ff",
        transition: "0.5s",
    };
    const wrong: React.CSSProperties = {
        background: "red",
    };
    console.log(quiz.questions);

    const correct: React.CSSProperties = {
        background: "lightgreen",
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
                return { ...defaultStyle, ...correct };
            }
            if (index === selectedAnswer) {
                if (selectedAnswer !== quiz.questions[currentQuestion].answer) {
                    return { ...defaultStyle, ...wrong };
                }
            }
            return { ...defaultStyle, border: "2px solid #292929" };
        }
    };

    return (
        <div>
            {isPlaying ? (
                <div>
                    <div style={{ fontSize: 40, fontWeight: 800, margin: 5 }}>
                        {quiz.questions[currentQuestion].question}
                    </div>
                    {quiz.questions[currentQuestion].items.map(
                        (item: string, index: number) => (
                            <DefaultButton
                                style={toggleStyle(index)}
                                disabled={!checked}
                                onClick={() => answerCheck(index)}
                                key={index}
                            >
                                {item}
                            </DefaultButton>
                        )
                    )}
                    <DefaultButton
                        disabled={checked}
                        onClick={() => nextQuestion()}
                    >
                        Следующий вопрос
                    </DefaultButton>
                </div>
            ) : (
                <div>{counter + " / " + quiz.questions.length}</div>
            )}
        </div>
    );
};

export default QuizPlaying;
