import './styles.css';
import { PagTab } from '../PageTab/PageTab'
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header>
            <div className='headerItems'>
                <h1><Link to={"/"}>{"< DevPath />"}</Link></h1>
                <PagTab content={"Encontre seu caminho"} route={"find-your-path"}/>
                <PagTab content={"Mentoria"}  route={"mentoria"}/>
                <PagTab content={"Perfil"}  route={"login"}/>
            </div>
        </header>
    )
}