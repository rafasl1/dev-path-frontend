import { PageTabContent } from "../../types/PageTabContent";
import { redirect } from "../../utils/redirect";
import './styles.css'

export function PagTab(props: PageTabContent) {
    return <div className="pageTab" onClick={() => redirect(props.route)}>{props.content}</div>
}