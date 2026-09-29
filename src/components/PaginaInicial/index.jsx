import React from 'react';
import { useState } from 'react';
import './estilo.css'

export default function PaginaInicial() {
    const [numeroAleatorio, setNumeroAleatorio] = useState(0);

    function gerarNumero() {
        const novoNumero = Math.floor(Math.random() * 100);
        setNumeroAleatorio(novoNumero);
    }

    return (
        <div className='conteudo-centralizado'>
            <h1>Gerador de números aleatórios</h1>

            <h2>{numeroAleatorio}</h2>

            <div className='area-botao'>
                <label>Clique no botão para gerar um número aleaório</label>
                <button onClick={gerarNumero}>Gerar número aleatório</button>
            </div>
        </div>

    );
}