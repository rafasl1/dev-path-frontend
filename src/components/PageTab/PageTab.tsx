import { Link } from "react-router-dom";
import { PageTabContent } from "../../types/PageTabContent";
import './styles.css'

export function PagTab(props: PageTabContent) {
    return <Link to={props.route}>
            <div className="pageTab">
                {props.content}
            </div>
        </Link>
}