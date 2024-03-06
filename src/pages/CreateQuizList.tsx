import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";

const CreateQuizList = () => {
    const quiz = useSelector((state: RootState) => state.quiz);
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Создать викторину</h1>
            {quiz.map((item, index) => (
                <div key={index} style={{ fontSize: 30 }}>
                    {index + 1}.{item.name}, {item.body}
                    <button onClick={() => navigate("/create/" + index)}>
                        редактировать!
                    </button>
                </div>
            ))}
            <button onClick={() => navigate("/create/" + quiz.length)}>
                Создать новую викторину
            </button>
        </div>
    );
};

export default CreateQuizList;
