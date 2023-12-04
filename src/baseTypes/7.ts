//TODO:  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
//TODO: і повертає boolean значення, що вказує, чи це день робочий чи вихідний.

enum WeekOfDay {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend (day: WeekOfDay): boolean {
  return day === WeekOfDay.Saturday || day === WeekOfDay.Sunday;
}