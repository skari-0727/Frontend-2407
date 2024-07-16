// 백준도장 - 2884 문제

conet alarmHour = 6, alarmMin = 40;
let newHour = 0, newMin = 0;

if (alarmMin >= 45){
    newHour = alarmHour;
    newMin = alarmMin - 45;
} else{
  newHour = (24 + alarmHour -1) % 24
}