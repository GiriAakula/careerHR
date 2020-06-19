$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

document.getElementById('training').addEventListener('submit', (e) => {
    e.preventDefault();
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
    console.log(data)

})