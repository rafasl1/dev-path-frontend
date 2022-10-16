import './styles.css';
import { PagTab } from '../PageTab/PageTab'

export function Header() {
    return (
        <header>
            <div className='headerItems'>
                <h1>{"< DevPath />"}</h1>
                <PagTab content={"Find your path"} route={"find-your-path"}/>
                <PagTab content={"Mentoring"}  route={"mentoring"}/>
            </div>
        </header>
    )
}