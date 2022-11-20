import './styles.css';
import { PagTab } from '../PageTab/PageTab'
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header>
            <div className='headerItems'>
                <h1><Link to={"/"}>{"< DevPath />"}</Link></h1>
                <PagTab content={"Find your path"} route={"find-your-path"}/>
                <PagTab content={"Mentoria"}  route={"mentoria"}/>
                <PagTab content={"Login"}  route={"login"}/>
                <PagTab content={"Cadastre-se!"}  route={"cadastro"}/>
            </div>
        </header>
    )
}