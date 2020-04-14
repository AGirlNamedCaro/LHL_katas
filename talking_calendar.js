/**
 * The objective is to convert date strings like "2017/12/02"
 * into an english friendly date string like 
 * December 2nd, 2017
 * 
 * INPUT: String in the YYYY/MM/DD format
 * OUTPUT String in the format Month Day Year
 */

 const talkingCalendar = (date) => {
  const arrayDate = date.split('/')
  const year = arrayDate[0]
  let month = arrayDate[1]
  let day = arrayDate[2]

  const monthlyArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  //Creating a switch statement that will determine the month
  month = month.split('0')
  for(const index in monthlyArray) {


    let newIndex = parseInt(index) + 1
    if(month.length > 1) {
      if(newIndex === parseInt(month[1])) {
        month = monthlyArray[index] 
       }
    }

    // console.log('newIndex', newIndex)
    
  else {

    if(newIndex === parseInt(month)) {
       month = monthlyArray[index] 
      }

  } 
  }
  switch(day) {
    case '01':
      day = '1st';
    break;
    case '02':
      day = '2nd';
    break;
    case '03':
      day = '3rd';
    break;
    default:
      day = day.split('0')
      if(day.length > 1) {
        day = day[1]
      }
      day = day + 'th'
  }

  return `${month} ${day}, ${year}`

 }

 console.log(talkingCalendar('1995/04/27'));
 console.log(talkingCalendar('2020/03/15'));
 console.log(talkingCalendar('1964/11/04'));
 console.log(talkingCalendar('1999/12/01'));