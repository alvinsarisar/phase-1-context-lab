/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
// 1.Create an employee record from an array
function createEmployeeRecord(array) {
    return {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  //2. Create multiple employee records from an array of arrays
  function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord);
  }
  
  // 3.Add a time in event to an employee record
  function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
  
    this.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date
    });
  
    return this;
  }
  
  //3. Add a time out event to an employee record
  function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
  
    this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date
    });
  
    return this;
  }
  
  //4. Calculate hours worked on a given date
  function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(e => e.date === date);
    const timeOutEvent = this.timeOutEvents.find(e => e.date === date);
  
    return (timeOutEvent.hour - timeInEvent.hour) / 100;
  }
  
  // 5.Calculate wages earned on a given date
  function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
  }
  
  // 6.Calculate all wages for an employee
  const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
      return e.date;
    });
  
    const payable = eligibleDates.reduce(function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this), 0);
  
    return payable;
  };
  
  // 7.Find an employee by first name
  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(rec => rec.firstName === firstName);
  }
  
  //8. Calculate payroll for all employees
  function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((memo, rec) => {
      return memo + allWagesFor.call(rec);
    }, 0);
  }
  
  m
  
