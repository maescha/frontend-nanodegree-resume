
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
    skills: ["writing ", " learning ", " ..."],
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


if (bio.skills < 0){ //checks if there are skills in my bio
    
    $("#header").append(HTMLskillsStart)
    
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkills);
    formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkills);
}


var work = {
    jobs: [     
        {       //THIS IS INSIDE THE JOBS ARRAY IN THE WORK OBJECT
            employer: "HM",
            title: "what else ;-;",
            location: "WEM",
            dates: "09/19 - present",
            description: "minimal wage retail job yall",
        }
    ], 
}

var projects = {
    projects: [
        {
            title: "Front-end Nanodegree Resume",
            dates: "shrug - present",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget finibus neque, nec rhoncus lectus. Duis fermentum, dolor sed ornare gravida, magna sem maximus justo, et luctus est eros dapibus nunc. Proin tristique semper orci id placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin a auctor odio, sit amet rutrum diam. In finibus, ipsum elementum consectetur auctor, lorem diam vestibulum nibh, interdum vulputate nibh sem id mauris. Suspendisse quis leo ut ante volutpat rhoncus nec eu enim. Pellentesque tempor vitae massa non posuere. Cras molestie justo nec sollicitudin pulvinar. Cras convallis leo ac nunc euismod sodales.",
            images: "images/101try.png",
        }
    ]
}

var education = {
    schools: [
        {
            name: "University of Alberta",
            location: "Edmonton, Alberta",
            degree: "Bachelor of Arts",
            specialization: "Film Studies, Minor: Comparative Literature",
            dates: "September 2015 - June 2019",
        }
    ]
    ,
    OnlineCourses: [
        {
        title: "Front-end Web Developer Nanodegree",
        school: "Udacity",
        dates: "August 2019 - in progress",
        url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011"
        }
    ]
}

function displayEducation() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        //concatenate name and degree
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolDeg = formattedSchoolName + formattedSchoolDegree ;
        $(".education-entry:last").append(formattedSchoolDeg);
        //dates
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        //location and major
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].specialization);
        $(".education-entry:last").append(formattedSchoolLocation)
        $(".education-entry:last").append(formattedSchoolMajor);
    }
    // ONLINE COURSES -- idk why its on top of online classes lol
    for (course in education.OnlineCourses) {
        $("#education").append(HTMLonlineClasses); // ??? i think
        //concatenate title and school
        var formattedOCTitle = HTMLonlineTitle.replace("%data%", education.OnlineCourses[course].title);
        var formattedOCSchool = HTMLonlineSchool.replace("%data%",education.OnlineCourses[course].school);
        var formattedOCName = formattedOCTitle + formattedOCSchool ;
        $(".education-entry:last").append(formattedOCName);
        // dates
        var formattedOCDates = HTMLonlineDates.replace("%data%", education.OnlineCourses[course].dates);
        $(".education-entry:last").append(formattedOCDates);
        //url
        var formattedOCURL = HTMLonlineURL.replace("%data%", education.OnlineCourses[course].url);
        $(".education-entry:last").append(formattedOCURL);
    }
}

displayEducation(); 

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        //concatenate employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        //dates
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        //descript
        var formattedDescript = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescript);
    }
}

displayWork(); 

//logs where you click on the resume page
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY; 
    logClicks(x,y);
  });

//hiding internationalize button that doesnt even work lol
// function inName(name) {
//     name = name.trim().split(" ");
//     console.log(name);
//     name[1] = name[1].toUpperCase();
//     name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).ToLowerCase();
//     return name[0] +" "+ name[1];
// }
//$('#main').append(internationalizeButton);

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        //getting project title
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle)
        //getting project date
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates)
        //getting description
        var formattedDescript = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescript)

    //appending images
        // dont know why the image is coming up undefined lol 
        // if (projects.projects[project].images.length > 0) {
        //     for (image in projects.projects[project].images){
        //         var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        //         $(".project-entry:last").append(formattedImage);
        //     }
        // }
    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
    $(".project-entry:last").append(formattedImage);
    }
}

projects.display();

// NOT GONNA DO THE GOOGLE MAP BECAUSE REQUIRES MONEY
// $("#mapDiv").append(googleMap);