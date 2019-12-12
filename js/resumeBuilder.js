
var bio = {
    name: "Josephine Su",
    role: "shrug",
    contacts: {
       mobile: "123-123-1234",
       email: "hi@hi.com",
       github: "to be filled",
       twitter: "@twitter",
       location: "edmonton"
    },
    bioPic: "images/fry.jpg",
    welcomeMessage: "hello",
    skills: ["writing, ", "learning ", "..."],
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
//var formattedContacts = HTMLcontactGeneric.replace("%data%", bio.contacts);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedSkillsStart = HTMLskillsStart.replace("%data%", bio.contacts);

var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedTwitter);
$("#header").append(formattedGithub);
$("#header").append(formattedLocation);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMessage);
$("#header").append(formattedSkills);


if (bio.skills < 0){ //checks if there is an onlinecourse in education object
    
    $("#header").append(HTMLskillsStart)
    
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkills);
    formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkills);
}


var work = {
    jobs: { 
        employer: "HM",
        title: "what else ;-;",
        location: "WEM",
        dates: "09/19 - present",
        description: "minimal wage retail job yall",
    }, 
}

var projects = {
    projects: {
        title: "Front-end Nanodegree Resume",
        dates: "shrug - present",
        description: " ",
        images: {
            img1: "img link here",
        },
    },
}

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

for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    //concatenate employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    //dates
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs.dates);
    $(".work-entry:last").append(formattedDates);
    //descript
    var formattedDescript = HTMLworkDescription.replace("%data%", work.jobs.description);
    $(".work-entry:last").append(formattedDescript);

}