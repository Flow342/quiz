import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";

const PlayListPage = () => {
    const quizzes = useSelector((state: RootState) => state.quiz);
    const navigate = useNavigate();

    const playButton = (index: number) => {
        navigate("/play/" + index);
    };

    return (
        <div>
            {quizzes.map((item, index) => (
                <div key={index}>
                    {index + 1}.{item.name} {item.body}
                    <button onClick={() => playButton(index)}>Играть</button>
                </div>
            ))}
        </div>
    );
};

export default PlayListPage;
