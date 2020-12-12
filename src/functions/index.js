function printMonth(monthNumber) {
    let monthName;
    switch (monthNumber) {
        case 1: monthName = 'Gennaio'; break;
        case 2: monthName = 'Febbraio'; break;
        case 3: monthName = 'Marzo'; break;
        case 4: monthName = 'Aprile'; break;
        case 5: monthName = 'Maggio'; break;
        case 6: monthName = 'Giugno'; break;
        case 7: monthName = 'Luglio'; break;
        case 8: monthName = 'Agosto'; break;
        case 9: monthName = 'Settembre'; break;
        case 10: monthName = 'Ottobre'; break;
        case 11: monthName = 'Novembre'; break;
        default: monthName = 'Dicembre'; break;
    }
    return monthName;
}

export function printDate (date){
    let data = new Date(date);
    let day, month, year;
    day = data.getDay(); month = data.getMonth(); year = data.getFullYear();
    return `${day} ${printMonth(month)} ${year}` ;
}