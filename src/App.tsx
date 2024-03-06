import QuizPlaying from "./pages/QuizPlaying";
import QuizCreating from "./containers/QuizCreating";
import CreateQuizList from "./pages/CreateQuizList";
import PlayPage from "./pages/PlayListPage";
import "./style/App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <nav>
                <Link className="link" to="/play">
                    Играть
                </Link>
                <Link className="link" to="/list">
                    Создать
                </Link>
                <Link className="link" to="">
                    Главная
                </Link>
            </nav>
            <Routes>
                <Route path="/create/:id" element={<QuizCreating />} />
                <Route path="/play/:id" element={<QuizPlaying />} />
                <Route path="/list" element={<CreateQuizList />} />
                <Route path="*" element={<div>PET PROJECT QUIZ</div>} />
                <Route path="/play" element={<PlayPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
