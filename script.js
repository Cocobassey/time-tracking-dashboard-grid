const dailyBtn = document.querySelector("#daily");
const weeklyBtn = document.querySelector("#weekly");
const monthlyBtn = document.querySelector("#monthly");

const allTime = document.querySelectorAll(".time");
const allPrev = document.querySelectorAll(".previous");


const jsonData = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]


  dailyBtn.addEventListener("click", () => {
    for (let i = 0; i < jsonData.length; i++) {
      allTime[i].innerText = jsonData[i].timeframes.daily.current + "hrs";
      allPrev[i].innerText = "previous - " + jsonData[i].timeframes.daily.previous + "hrs";
    }
  });

  weeklyBtn.addEventListener("click", () => {
    for (let i = 0; i < jsonData.length; i++) {
      allTime[i].innerText = jsonData[i].timeframes.weekly.current + "hrs";
      allPrev[i].innerText = "previous - " + jsonData[i].timeframes.weekly.previous + "hrs";
    }
  });

  monthlyBtn.addEventListener("click", () => {
    for (let i = 0; i < jsonData.length; i++) {
      allTime[i].innerText = jsonData[i].timeframes.monthly.current + "hrs";
      allPrev[i].innerText = "previous - " + jsonData[i].timeframes.monthly.previous + "hrs";
    }
  });