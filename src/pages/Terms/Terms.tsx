import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { UserAPI } from '../../types/User';
import './styles.css'

export function Terms() {

    const [termsAccepted, setTermsAccepted] = useState<boolean>(false)
    const navigate = useNavigate();


    return (
        <div id="terms-div-page">
            <h1 id="terms-title">Para prosseguir, precisamos que aceite os termos da plataforma:</h1>
            <h2 id="terms-subtitle">Bem-vindo ao website DevPath, avisamos previamente que ao acessar esse site você concorda tacitamente com as disposições contidas nesse documento, por isso muito atenção ao ler cada uma das cláusulas e obrigações dispostas a seguir:</h2>
            <h2 id="terms-subtitle-item">1.Do Objeto</h2> 
            <h3>1.1 Essa plataforma tem como finalidade de “e-commerce”, ou seja, disponibilizar a venda de produtos e serviços online disponibilizados na nossa plataforma ou aplicativo. Este documento foi criado pelo advogado Diego Castro e modificado com permissão para este website.</h3>
            <h2 id="terms-subtitle-item">2. Da reserva dos produtos</h2>
            <h3>2.1 O nosso website não trabalha com nenhuma possibilidade de reservar qualquer um dos produtos ofertados em nossa plataforma.</h3>
            <h3>2.2. O fato de o produto estar no carrinho de compras não é tido como uma reserva e não impossibilita que outras pessoas possam adquirir o produto e eles venham a se esgotar.</h3>
            <label>
                <input id="agree-input" type={"checkbox"} onClick={() => setTermsAccepted(!termsAccepted)}/>
                Concordo com os termos e condições de uso da plataforma e mentoria
            </label>
            <br />
            <button id={`continue-button${ termsAccepted ? "" : "-disabled" }`} onClick={() => navigate("/create-schedule/finish")} disabled={!termsAccepted}>Continuar</button>
        </div>
    )
}