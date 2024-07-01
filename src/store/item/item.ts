import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { quiz } from "../../interfaces/interfaces";

const initialState: quiz[] = [
    {
        name: "Первая викторина",
        body: "просто викторина про что то там",
        questions: [
            {
                question: "Сколько щупалец у осьминога?",
                items: ["4", "2", "8", "156467"],
                answer: 2,
            },
            {
                question: "Кто король зверей?",
                items: ["Лев", "Лось", "Я", "Бобер"],
                answer: 0,
            },
        ],
        id: 0,
    },
];

const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        newQuiz: (state, action: PayloadAction<quiz>) => {
            state.push({ ...action.payload });
        },
        editQuiz: (state, action: PayloadAction<quiz>) => {
            state[action.payload.id] = action.payload;
        },
        deleteItem: (state, action: PayloadAction<quiz>) => {
            state.splice(action.payload.id);
        },
    },
});

export const { newQuiz, editQuiz, deleteItem } = quizSlice.actions;
export default quizSlice.reducer;
