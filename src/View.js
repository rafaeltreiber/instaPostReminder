const View = {
    render({minutes, seconds}) {
        /* O contra de fazer desta forma é que ele está atualizando o body inteiro.
        Caso a aplicação venha a crescer e a gente precise alterar outras partes do body,
        isto será um problema. Nesse caso, a melhor solução seria criar divs dentro do body,
        localiza-las por QuerySelector e fazer a alteração. Como só temos um conteúdo no body
        aqui, altera-lo completamente funciona. */
        document.body.innerHTML = `
        <p>Próximo post em</p>
        <span>${minutes}:${seconds}</span>  
        `;
    }
}

export { View }