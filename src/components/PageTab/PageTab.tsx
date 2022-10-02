import { PageTabContent } from "../../types/PageTabContent";
import './styles.css'

export function PagTab(props: PageTabContent) {
    return <div className="pageTab">{props.content}</div>
}