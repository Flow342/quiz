interface Props {
    correctAnswers: number;
    answersLength: number;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuizResults = ({
    correctAnswers,
    answersLength,
    setIsPlaying,
}: Props) => {
    return (
        <div>
            {correctAnswers} / {answersLength}
            <button onClick={() => setIsPlaying(false)}>Подтвердить</button>
        </div>
    );
};

export default QuizResults;
