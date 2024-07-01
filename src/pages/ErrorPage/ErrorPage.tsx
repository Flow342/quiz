import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <p className={styles.error_number}>404</p>
                <p className={styles.error}>Ошибка!</p>
                <div className={styles.text}>
                    Такой ссылки не существует :&#40;
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
