const firebaseConfig = {
  apiKey: "AIzaSyARiREVh3N4tsEeJhqNzMB70R1ZA9IiRtc",
  authDomain: "clinicbrain-b1215.firebaseapp.com",
  databaseURL: "https://clinicbrain-b1215-default-rtdb.firebaseio.com",
  projectId: "clinicbrain-b1215",
  storageBucket: "clinicbrain-b1215.appspot.com",
  messagingSenderId: "142661610441",
  appId: "1:142661610441:web:4572c6354e428a6823d618"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const currentUrl = window.location.href;
console.log(currentUrl);
const inputs = document.querySelectorAll("input"),
  button = document.querySelector("button");
var urlsp = [];
urlsp = currentUrl.split("#");
console.log(urlsp);
if (urlsp[1] == "popup1") {
  window.location = "index.html";
}
var password = "";
if (localStorage.getItem("verify") == "yes") {
  window.location = "main.html";
}
var Username = "";
var Password = "";
var getU = "";
var getP = "";
function sendotp() {
  Username = document.getElementById("Username").value;
  Password = document.getElementById("password").value;

  if (Username != "" && Password != "") {
    var ref = firebase.database().ref("VerifyUser/");
    ref.once("value", function (get_data) {
      var data = get_data.val();
      getU = data.Name;
      getP = data.Password;
    });
    setTimeout(function () {
      if (getU == Username && getP == Password) {
        password = "no";
        localStorage.setItem("verify", "yes");
        window.location = 'main.html';
      } else {
        alert("Invalid Username And Password");
      }
    }, 2000);
  } else {
    alert("Some Strings Are Missing.");
  }
}
o = 0;
function makeotp() {
  o = Math.floor(Math.random() * 1000000);
}
function sendotp55() {
  document.getElementById("loader").click();
  //CF5B5693E1B1BCF15363447DC199BDC45B28
  //clinicbrainbot@gmail.com
  //f196c33d-9ffd-4bc3-8e3b-769190854a7f
  makeotp();
  const number = o;
  const numberString = number.toString(); // Convert the number to a string
  const digits = numberString.split("");

  if (digits.length != 6) {
    makeotp();
  } else {
    let OTP = "𝙋𝙡𝙚𝙖𝙨𝙚 𝙀𝙣𝙩𝙚𝙧 𝙏𝙝𝙚 𝙊𝙏𝙋 " + o;
    setTimeout(function () {
      Email.send({
        SecureToken: "59d130ea-b307-44ac-95cb-e44b232dd24e",
        To: "arkabhattacharyac42@gmail.com",
        From: "clinicbrainbot@gmail.com",
        Subject: "This is a AutoGenerated Mail.",
        Body: OTP,
      }).then((message) => {
        if (message === "OK") {
        } else {
          alert("NETWORK ERROR TRY AGAIN.");
        }
      });
    }, 2000);
  }
}
var ppp;
function verifyotp() {
  const number = o;
  const numberString = number.toString(); // Convert the number to a string
  const digits = numberString.split("");

  if (
    digits[0] == document.getElementById("n1").value &&
    digits[1] == document.getElementById("n2").value &&
    digits[2] == document.getElementById("n3").value &&
    digits[3] == document.getElementById("n4").value &&
    digits[4] == document.getElementById("n5").value &&
    digits[5] == document.getElementById("n6").value
  ) {
    if (password != "yes") {
      localStorage.setItem("verify", "yes");
      window.location = "main.html";
    } else if (password == "yes") {
      firebase.database().ref("VerifyUser/").update({
        Name: "drgautamsaha@gmail.com",
        Password: ppp,
      });
      alert("Changed !!");
      document.getElementById("login_div").style.display = "flex";
      document.getElementById("loaderc").click();
      document.getElementById("newpassword").style.display = "none";
    } else {
      return false;
    }
  } else {
    alert("Incorrect Otp");
    Email.send({
      SecureToken: "59d130ea-b307-44ac-95cb-e44b232dd24e",
      To: "drgautamsaha@gmail.com",
      From: "clinicbrainbot@gmail.com",
      Subject: "LOGIN ATTEMPTED !!!",
      Body: "𝐒𝐎𝐌𝐄 𝐇𝐀𝐒 𝐓𝐑𝐈𝐄𝐃 𝐓𝐎 𝐋𝐎𝐆𝐈𝐍 OR CHANGE THE PASSWORD 𝐀𝐓 𝐀𝐃𝐎𝐋𝐄𝐂𝐄𝐍𝐓'𝐒 𝐅𝐎𝐑𝐌 APP 𝐀𝐍𝐃 𝐆𝐀𝐕𝐄 𝐖𝐑𝐎𝐍𝐆 𝐎𝐓𝐏 𝐉𝐔𝐒𝐓 𝐍𝐎𝐖... 𝐓𝐇𝐈𝐒 𝐈𝐒 𝐀 𝐀𝐔𝐓𝐎𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃 𝐄𝐌𝐀𝐈𝐋.",
    }).then((message) => {
      if (message === "OK") {
      } else {
        console.log("Error !!!");
      }
    });
  }
}
function forgot() {
  if (confirm("Did You Forgot The Password") == true) {
    password = "yes";

    document.getElementById("newpassword").style.display = "flex";

    document.getElementById("login_div").style.display = "none";
  }
}

function newpassword() {
  if (document.getElementById("password12").value != "") {
    ppp = document.getElementById("password12").value;
    sendotp55();
  }
}
function resendotp() {
  sendotp55();
}
