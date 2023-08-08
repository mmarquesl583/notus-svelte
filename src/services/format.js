export default {
    formatValue(dados) {
        const data_formated = {};
        for (const chave in dados) {
            const valor = dados[chave];
            const valorSemSimbolo = valor.replace("R$", "").trim();
            data_formated[chave] = valorSemSimbolo;
        }
        return data_formated;
    },
};
