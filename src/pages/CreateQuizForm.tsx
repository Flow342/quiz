import { useEffect, useState } from "react";
import { PropsCreateQuizItem, quizItem } from "../interfaces/interfaces";

const CreateQuizForm = ({
    quizContent,
    setQuizContent,
    index,
}: PropsCreateQuizItem) => {
    const [quizItemItems, setQuizItemItems] = useState<string[]>(
        quizContent[index].items
    );

    const [quizItem, setQuizItem] = useState<quizItem>(quizContent[index]);

    useEffect(
        () => setQuizItem({ ...quizItem, items: [...quizItemItems] }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [quizItemItems]
    );

    useEffect(
        () =>
            setQuizContent([
                ...quizContent.slice(0, index),
                quizItem,
                ...quizContent.slice(index + 1),
            ]),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [quizItem]
    );

    return (
        <div className="quizCreating">
            <div className="question">
                {index + 1}.
                <input
                    placeholder="Вопрос"
                    value={quizItem.question}
                    onChange={(e) =>
                        setQuizItem({ ...quizItem, question: e.target.value })
                    }
                />
            </div>

            <div className="answers">
                {quizItemItems.map((item, itemIndex) => (
                    <div
                        key={itemIndex}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <input
                            value={item}
                            placeholder="Ответ"
                            onChange={(e) =>
                                setQuizItemItems([
                                    ...quizItemItems.slice(0, itemIndex),
                                    e.target.value,
                                    ...quizItemItems.slice(itemIndex + 1),
                                ])
                            }
                        />
                        <input
                            type="radio"
                            checked={
                                itemIndex === quizItem.answer ? true : false
                            }
                            name={"corr" + index}
                            id={String(itemIndex)}
                            onChange={() =>
                                setQuizItem({
                                    ...quizItem,
                                    answer: itemIndex,
                                })
                            }
                        />
                    </div>
                ))}
                <button
                    onClick={() =>
                        quizItemItems.length == 4 ||
                        setQuizItemItems([...quizItemItems, ""])
                    }
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default CreateQuizForm;
