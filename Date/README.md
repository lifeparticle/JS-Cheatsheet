# Introduction

The largest timestamp that a Date object can handle is just below the maximum safe integer (`Number.MAX_SAFE_INTEGER`), which is `9,007,199,254,740,991`. A Date object can represent a time range of up to `±8,640,000,000,000,000` milliseconds, or `±100,000,000` (one hundred million) days, based on the epoch. This means that the range of dates that can be represented is from April `20, 271821 BC` to `September 13, 275760 AD`. Any attempt to represent a time outside of this range will result in the Date object holding a `NaN value`, representing an `"Invalid Date"`.


# Date() constructor


| Constructor                                                              | Example                                                                                                        |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| `new Date()`                                                             | `let currentDate = new Date();`<br/>`console.log(currentDate);`                                                |
| `new Date(value)`                                                        | `let dateFromTimestamp = new Date(1617455400000);`<br/>`console.log(dateFromTimestamp);`                       |
| `new Date(dateString)`                                                   | `let dateFromString = new Date("2023-05-29");`<br/>`console.log(dateFromString);`                              |
| `new Date(dateObject)`                                                   | `let originalDate = new Date();`<br/>`let copiedDate = new Date(originalDate);`<br/>`console.log(copiedDate);` |
| `new Date(year, monthIndex)`                                             | `let specificMonthYear = new Date(2023, 4);`<br/>`console.log(specificMonthYear);`                             |
| `new Date(year, monthIndex, day)`                                        | `let specificDate = new Date(2023, 4, 29);`<br/>`console.log(specificDate);`                                   |
| `new Date(year, monthIndex, day, hours)`                                 | `let specificDateTime = new Date(2023, 4, 29, 15);`<br/>`console.log(specificDateTime);`                       |
| `new Date(year, monthIndex, day, hours, minutes)`                        | `let specificDateTime = new Date(2023, 4, 29, 15, 30);`<br/>`console.log(specificDateTime);`                   |
| `new Date(year, monthIndex, day, hours, minutes, seconds)`               | `let specificDateTime = new Date(2023, 4, 29, 15, 30, 45);`<br/>`console.log(specificDateTime);`               |
| `new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)` | `let specificDateTime = new Date(2023, 4, 29, 15, 30, 45, 500);`<br/>`console.log(specificDateTime);`          |


[Date time string format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) `YYYY-MM-DDTHH:mm:ss.sssZ` : `dateString`



# Resources

1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
