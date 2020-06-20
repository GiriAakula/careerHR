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

document.getElementById('training').addEventListener('submit', async (e) => {
    e.preventDefault();
   uploadResume(e.target.resume.files[0], e); 
});

function saveDataToDatabase(data){
    let newRef = dataBaseRef.push()
    newRef.set(data)
};

function buildObject(e, url){
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
        comments:e.target.Comments.value,
        resume: url
    };
    return data;
}
function uploadResume(resume, e){
    var storageRef = firebase.storage().ref('resumes/' + resume.name);
    var task = storageRef.put(resume);
    task.on('state_changed', function progress(snapshot) {
        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percentage)
        document.getElementById('training').style.display = 'none';
        document.querySelector('.progress').style.display = 'flex';
        $('.progress-bar').css('width', percentage+'%').attr('aria-valuenow', percentage);        

    }, function error(err) {
        console.log('error')

    }, function complete() {
        console.log('upload completed')
        task.snapshot.ref.getDownloadURL().then( 
            function(downloadURL) { 
               let data = buildObject(e, downloadURL);
               saveDataToDatabase(data);               
               document.querySelector('.submit').style.display = 'block'
        });
    });
}