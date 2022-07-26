function reqBTC() {
  const res = axios
    .get("https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT")
    .then((data) => {
      return data.data
    })
    .catch((error) => {
      return error.message
    })

  return res
}

function reqBTCUSDT() {
  let a = document.getElementById("resInOne").innerHTML
  setTimeout(() => {
    reqBTC().then(
      (data) => (document.getElementById("resInOne").innerHTML = data.price)
    )
  }, 1000)

  if (a == 0) {
    document.getElementById("resOutOne").innerHTML = 0 + "%"
  } else {
    setTimeout(() => {
      let b = document.getElementById("resInOne").innerHTML
      document.getElementById("resOutOne").innerHTML = 1 - a / b + "%"
    }, 2300)
  }
}

function reqETH() {
  const res = axios
    .get("https://api.binance.com/api/v3/avgPrice?symbol=ETHUSDT")
    .then((data) => {
      return data.data
    })
    .catch((error) => {
      return error.message
    })
  return res
}

function reqETHUSDT() {
  let a = document.getElementById("resInTwo").innerHTML
  setTimeout(() => {
    reqETH().then(
      (data) => (document.getElementById("resInTwo").innerHTML = data.price)
    )
  }, 1000)

  if (a == 0) {
    document.getElementById("resOutTwo").innerHTML = 0 + "%"
  } else {
    setTimeout(() => {
      let b = document.getElementById("resInTwo").innerHTML
      document.getElementById("resOutTwo").innerHTML = 1 - a / b + "%"
    }, 2300)
  }
}

function reqBNB() {
  const res = axios
    .get("https://api.binance.com/api/v3/avgPrice?symbol=BNBBTC")
    .then((data) => {
      return data.data
    })
    .catch((error) => {
      return error.message
    })
  return res
}

function reqBNBBTC() {
  let a = document.getElementById("resInThree").innerHTML
  setTimeout(() => {
    reqBNB().then(
      (data) => (document.getElementById("resInThree").innerHTML = data.price)
    )
  }, 1000)

  if (a == 0) {
    document.getElementById("resOutThree").innerHTML = 0 + "%"
  } else {
    setTimeout(() => {
      let b = document.getElementById("resInThree").innerHTML
      document.getElementById("resOutThree").innerHTML = 1 - a / b + "%"
    }, 2300)
  }
}
