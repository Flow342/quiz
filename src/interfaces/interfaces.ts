import { Dispatch, SetStateAction } from "react";

export interface quizItem {
    question: string;
    items: string[];
    answer: number;
}

export interface quiz {
    name: string;
    body: string;
    questions: quizItem[];
    id: number;
}

export interface quizItem {
    question: string;
    items: string[];
    answer: number;
}

export interface PropsCreateQuizItem {
    quizContent: quizItem[];
    setQuizContent: Dispatch<SetStateAction<quizItem[]>>;
    index: number;
}
