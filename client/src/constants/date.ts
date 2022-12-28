const days = function() {
    let daysArr = [];
    for(let i=1;i<=31;i++) {
        daysArr.push(i);
    }
    return daysArr;
}();

const years = function() {
    let yearsArr = [];
    for(let i=1960;i<=2022;i++) {
        yearsArr.push(i);
    }
    return yearsArr;
}();

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

export default {
    days,
    months,
    years,
};