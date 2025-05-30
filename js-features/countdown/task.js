let timerCount = document.getElementById("timer");
startCount = timerCount.textContent
function leftTime() {
  let hours = Math.floor(startCount / 3600);
  //   console.log(`Часов ${hours}`);
  if (hours < 10) {
    hours = '0' + hours;
  }

  let leftminutes = Math.floor((startCount - hours * 60) / 60);
  //   console.log(`Минут ${leftminutes}`);
  if (leftminutes < 10) {
    leftminutes = '0' + leftminutes;
  }

  let leftseconds = startCount - leftminutes * 60;
  //   console.log(`Секунд ${leftseconds}`);
  if (leftseconds < 10) {
    leftseconds = '0' + leftseconds;
  }
  return [hours, leftminutes, leftseconds];
}

function increaseTimer() {
  if (startCount > 0) {
    startCount -= 1;
    console.log(startCount);
  }
  leftTime();
  console.log(
    `Осталось ${leftTime()[0]} часов ${leftTime()[1]} минут и ${
      leftTime()[2]
    } секунд`
  );
  timerCount.textContent = `${leftTime()[0]}:${leftTime()[1]}:${leftTime()[2]}`;
}

setInterval(increaseTimer, 1000);
