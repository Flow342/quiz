interface Optionprops {
    index: number;
    setItemsArray: any;
    itemsArray: any;
}

const QuizOption = ({ index, itemsArray, setItemsArray }: Optionprops) => {
    return (
        <div>
            <input
                value={itemsArray[index]}
                onChange={(e) =>
                    setItemsArray([
                        ...itemsArray.slice(0, index),
                        e.target.value,
                        ...itemsArray.slice(index + 1),
                    ])
                }
                type="text"
                placeholder={"Вопрос номер " + index}
            />
        </div>
    );
};

export default QuizOption;
