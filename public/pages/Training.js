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

let dataBaseRef = firebase.database().ref('training');

document.getElementById('training').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('giri')
    const data = {
        name : e.target.Fullname.value,
        phone : e.target.phoneNumber.value,
        email : e.target.exampleInputEmail1.value,
        location : e.target.location.value,
        experience: e.target.experience.value,
        languages : {
            pythonBeginner : e.target.pythonBeginner.checked,
            pythonAdvanced : e.target.pythonAdvanced.checked,
            pythonExpert : e.target.pythonExpert.checked,
            DataScienceWithPython : e.target.DataScienceWithPython.checked,
            SQLBeginner : e.target.SQLBeginner.checked,
            SQLAdvanced : e.target.SQLAdvanced.checked,
            CMBasic : e.target.CMBasic.checked,
            CMAdvanced : e.target.CMAdvanced.checked,
            CMDemo : e.target.CMDemo.checked,
            HTML : e.target.HTML.checked,
        },
        preferredTime :{
            weekday: e.target.Weekdaybatches.checked,
            weekend: e.target.Weekendbatches.checked
        },
        optionalCourse: e.target.technical.value,
        comments:e.target.Comments.value

    }
    saveDataToDatabase(data)
    document.getElementById('training').style.display = 'none'
    document.querySelector('.submit').style.display = 'block'

});

function saveDataToDatabase(data){
    let newRef = dataBaseRef.push()
    newRef.set(data)
};