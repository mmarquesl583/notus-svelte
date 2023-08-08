export default {
    getCalendar() {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();
        const firstDayOfMonth =
            new Date(currentYear, currentMonth, 1).getDay() - 1;
        const daysInMonth = new Date(
            currentYear,
            currentMonth + 1,
            0
        ).getDate();

        const monthFormatter = new Intl.DateTimeFormat("pt-BR", {
            month: "long",
        });
        let monthName = monthFormatter.format(currentDate);
        monthName = monthName.charAt(0).toUpperCase() + monthName.slice(1);

        return [firstDayOfMonth, daysInMonth, currentYear, monthName];
    },

    getDateHist(data = this.getDate()) {
        const dataObj = new Date(data);
        const dia = String(dataObj.getDate()).padStart(2, "0");
        const mes = String(dataObj.getMonth() + 1).padStart(2, "0");
        const ano = dataObj.getFullYear();
        const dataFormatada = `${dia}/${mes}/${ano}`;
        return dataFormatada;
    },
    getDate() {
        const currentDate = new Date();
        const day = String(currentDate.getDate()).padStart(2, "0");
        const month = String(currentDate.getMonth() + 1).padStart(2, "0");
        const year = currentDate.getFullYear();
        return `${year}-${month}-${day}`;
    },

    getTime() {
        const currentDate = new Date();
        const options = {
            timeZone: "America/Sao_Paulo",
            hour: "2-digit",
            minute: "2-digit",
        };
        return currentDate.toLocaleTimeString("pt-BR", options);
    },
};
