function updateClock(){
var now = new Date();
var dname = now.getDay(),
            mo = now.getMonth(),dnum = now.getDate(),yr = now.getFullYear(),
            hour = now.getHours(),min = now.getMinutes(),sec = now.getSeconds(), pe = "AM";

          if(hour == 0){
            hour = 12;
          }
          if(hour > 12){
            hour = hour - 12;
            pe = "PM";
          }

            var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            var ids  = ["dayname","month","daynum","year","hour","minute","seconds","period"];
            var values = [week[dname],months[mo],dnum,yr,hour,min,sec,pe];
            for(var i = 0;i<ids.length;i++)
            document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}
function initClock(){
  updateClock();
  window.setInterval("updateClock()",1);
}