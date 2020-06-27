// firebase authentication
const firebaseConfig = {
    apiKey: "AIzaSyCnBEWsATznzbfd0tYUbB8MR2-J8Mvdul4",
    authDomain: "career-school-75f3d.firebaseapp.com",
    databaseURL: "https://career-school-75f3d.firebaseio.com",
    projectId: "career-school-75f3d",
    storageBucket: "career-school-75f3d.appspot.com",
    messagingSenderId: "307417595171",
    appId: "1:307417595171:web:3d0beb8161e7ec608ba096",
    measurementId: "G-MXJFZ5B5S8"
  };

firebase.initializeApp(firebaseConfig);
let dataBaseRef = firebase.database().ref('contactform');

document.getElementById('contactform').addEventListener('submit', async (e) => {
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
    // document.getElementById('employers').style.display = 'none';
    // document.querySelector('.submit').style.display = 'block'
}

