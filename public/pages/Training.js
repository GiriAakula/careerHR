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
let dataBaseRef = firebase.database().ref('training');

document.getElementById('training').addEventListener('submit', async (e) => {
    e.preventDefault();
    if(e.target.resume.files[0]){
        uploadResume(e.target.resume.files[0], e);
    }else{
      let obj = buildObject(e, null)
      saveDataToDatabase(obj); 
      document.getElementById('training').style.display = 'none';
     document.querySelector('.submit').style.display = 'block'
    }
    
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