import { Link } from "react-router-dom";
import styles from "./MyLink.module.css";

interface Props {
    to: string;
    children: string;
}

const MyLink = ({ to, children }: Props) => {
    return (
        <Link className={styles.link} to={to}>
            {children}
        </Link>
    );
};

export default MyLink;
