import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { UserAPI } from '../../types/User';
import './styles.css'

export function FinishScheduling() {

    const navigate = useNavigate();

    return (
        <div id="finish-div-page">
            <h1 id="terms-title">Agendamento finalizado!</h1>

            <h2 className="finish-subtitle">A sua solicitação de agendamento foi feita com sucesso {":)"}</h2>
            <h2 className="finish-subtitle blue">Próximas instruções: </h2>
            <ul>
                <li className="next-instruction-item"><h3>O valor total da mentoria para o horário solicitado foi de <b className="important-value">R$50,00</b></h3></li>
                <li className="next-instruction-item"><h3>O pagamento deverá ser realizado por transferência PIX para o CNPJ da DevPath: <b className="important-value">53.370.689/0001-02</b></h3></li>  
                <li className="next-instruction-item"><h3>Assim que a DevPath receber a sua transferência, o mentor receberá o pagamento referente ao seu agendamento e seu agendamento será concluído</h3></li>  
                <li className="next-instruction-item"><h3>Quando o agendamento for concluído, o mentor será notificado, e basta aguardar para receber sua mentoria!</h3></li>  
            </ul>

            <br />
            <button id={`continue-button`} onClick={() => navigate("/perfil")}>Voltar para o perfil</button>
        </div>
    )
}