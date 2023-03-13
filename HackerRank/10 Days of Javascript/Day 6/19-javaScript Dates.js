// Day 6: JavaScript Dates

// Problem

// Receive a string value of dateString
// The format is in DD/MM/YYYY (10/11/2009)
// Return the name of the day (Sunday, Monday, Tuesday,…) based on the date

// Solution

function getDayName(dateString) {
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];
    
    return days[(new Date(dateString)).getDay()];
}