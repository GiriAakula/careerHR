// firebase authentication
var firebaseConfig = {
    apiKey: "AIzaSyDPzfWo46cqqdQnsZNOT_xu0bf_BNeLEBE",
    authDomain: "careerhr-1a9e3.firebaseapp.com",
    databaseURL: "https://careerhr-1a9e3.firebaseio.com",
    projectId: "careerhr-1a9e3",
    storageBucket: "careerhr-1a9e3.appspot.com",
    messagingSenderId: "471605720184",
    appId: "1:471605720184:web:d6f3652ebb106abd8f298d",
    measurementId: "G-BZXG75MWHW"
  };

firebase.initializeApp(firebaseConfig);
let dataBaseRef = firebase.database().ref('contactform');

document.getElementById('contactform').addEventListener('submit', async (e) => {
    console.log('giri')
e.preventDefault();
   buildObject(e)
});

function saveDataToDatabase(data){
    let newRef = dataBaseRef.push()
    newRef.set(data)
};

function buildObject(e){
    const data = {
        name : e.target.name.value,
        email : e.target.email.value,
        message: e.target.message.value,
               
    };
    console.log(data)
    saveDataToDatabase(data)
    document.getElementById('success').style.display = 'block';
    document.getElementById("contactform").reset();
}

