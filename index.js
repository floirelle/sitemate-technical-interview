// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  const hourArr = [
    "midnight",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve"
  ]

  const minutesArr=[
    ...hourArr,
    "thirteen",
    "fourteen",
    "quarter",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty one",
    "twenty two",
    "twenty three",
    "twenty four",
    "twenty five",
    "twenty six",
    "twenty seven",
    "twenty eight",
    "twenty nine",
    "half"
  ]
  
  if (time === '0:00') {
    return 'midnight';
  }else if (time === '12:00'){
    return 'midday';
  }

  const splittedTime = time.split(":").map(x=>parseInt(x)) //[3,00]
  const hour = splittedTime[0];
  const minutes = splittedTime[1];
  if(minutes === 0){
    return `${hourArr[hour]} o'clock`
  }else if(minutes <= 30){
    return `${minutesArr[minutes]} past ${hourArr[hour]}`
  }else{
    return `${minutesArr[60 - minutes]} to ${hourArr[hour+1]}` // 31, 29 minutes to hour
  }
}

module.exports = { convertTimeToWords };