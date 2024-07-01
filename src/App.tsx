import QuizPlaying from "./pages/QuizPlaying";
import QuizCreating from "./containers/QuizCreating/QuizCreating";
import CreateListItemPage from "./pages/CreateListItemPage/CreateListItemPage";
import PlayListPage from "./pages/PlayListPage/PlayListPage";
import "./style/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import MyLink from "./UI/MyLink/MyLink";

const App = () => {
    return (
        <BrowserRouter>
            <div className="background">
                <div className="app">
                    <div className="nav_container">
                        <nav>
                            <MyLink to="/play">Играть</MyLink>
                            <MyLink to="/create">Создать</MyLink>
                            <MyLink to="/">Главная</MyLink>
                        </nav>
                    </div>
                    <Routes>
                        <Route path="/create/:id" element={<QuizCreating />} />
                        <Route path="/play/:id" element={<QuizPlaying />} />
                        <Route
                            path="/create"
                            element={<CreateListItemPage />}
                        />
                        <Route path="*" element={<ErrorPage />} />
                        <Route path="/play" element={<PlayListPage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
