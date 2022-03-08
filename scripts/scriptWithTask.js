'use strict';

// Суббота, 1 неделя Января 2022 года 

function getDayInfo(date) {
    let newDate = new Date(date);
    let dayOfWeek = newDate.getDay();
    let weekOfMonth = newDate.getMonth() - newDate.getDay();
    let month = newDate.getMonth();

    function dow() {
        if (dayOfWeek == 1) { 
            dayOfWeek = 'Понедельник, ';
        } else if (dayOfWeek == 2) {
            dayOfWeek = 'Вторник, ';
        } else if (dayOfWeek == 3) {
            dayOfWeek = 'Среда, ';
        } else if (dayOfWeek == 4) {
            dayOfWeek = 'Четверг, ';
        } else if (dayOfWeek == 5) {
            dayOfWeek = 'Пятница, ';
        } else if (dayOfWeek == 6) {
            dayOfWeek = 'Суббота, ';
        } else if (dayOfWeek == 7) {
            dayOfWeek = 'Воскресенье, ';
        }
    }

    function wom() {
        if (weekOfMonth <= 7) {
            weekOfMonth = '1 неделя ';
        } else if (weekOfMonth > 7 && weekOfMonth <= 14) {
            weekOfMonth = '2 неделя ';
        } else if (weekOfMonth > 14 && weekOfMonth <= 21) {
            weekOfMonth = '3 неделя ';
        } else if (weekOfMonth > 21 && weekOfMonth <= 28) {
            weekOfMonth = '4 неделя ';
        }
    }

    function m() {
        if (month == 0) {
            month = 'Января ';
        } else if (month == 1) {
            month = 'Февраля ';
        } else if (month == 2) {
            month = 'Марта ';
        } else if (month == 3) {
            month = 'Апреля ';
        } else if (month == 4) {
            month = 'Мая ';
        } else if (month == 5) {
            month = 'Июня ';
        } else if (month == 6) {
            month = 'Июля ';
        } else if (month == 7) {
            month = 'Августа ';
        } else if (month == 8) {
            month = 'Сентября ';
        } else if (month == 9) {
            month = 'Октября ';
        } else if (month == 10) {
            month = 'Ноября ';
        } else if (month == 11) {
            month = 'Декабря ';
        }
    }

    wom();
    m();
    dow();
    

    return dayOfWeek.toString() + weekOfMonth.toString() + 
        month.toString() + newDate.getFullYear().toString() + ' года';
}

console.log(getDayInfo("01.01.2022"));
console.log(getDayInfo('12.15.2021'));
console.log(getDayInfo('03.08.2022'));