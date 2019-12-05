/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name: "Josephine Su",
    role: "shrug",
    age: 22,
    contacts: {
       mobile: "123-123-1234",
       email: "hi@hi.com",
       github: "to be filled",
       location: "edmonton"
    },
    bioPic: "images\ApplicationFrameHost_2019-12-04_16-40-15.png",
    welcomeMessage: "hello",
    skills: ["writing, ", "learning ", "..."],
}

//???? just copied from the video this format....
// var work = {};
//     work.employer = "HM";
//     work.title: "sales advisor";
//     work.location: "WEM";
//     work.dates: "09/19 - present ";
//     work.description: "minimal wage retail job yall";

var education = {
    schools: {
        name: "University of Alberta",
        location: "Edmonton, Alberta",
        degree: "Bachelor of Arts",
        specialization: "Film Studies, minor in Comparative Literature",
        dates: "September 2015 - June 2019",
    },
    OnlineCourses: {
    title: "Front-end Web Developer Nanodegree",
    school: "Udacity",
    dates: "August 2019 - in progress",
    url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011"
},
}


$("#main").prepend(bio.name);

//i dont knowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww

$("#main").append(work["employer"]);
$("#main").append(education.name);