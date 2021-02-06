    //import { clamp, isNumeric } from './function.js';
        
	let pArray = [];
	let projects;
    const imgPath = "images/";
    let img;
    let skillarray = [];
    var initialPageHeight;
    
    //var navBackground = linear-gradient(to bottom, $background , transparent);
    var navBackgroundFull = "#6a9aa1";

    /*
    project json

        "name": "SimplyCalc",
        "description": "Android Calculator Application",
        "details": "A calculator made using android studio that allows for basic functions.",
        "language":"Java 8.0",
        "image": "calcpro.png",
        "Date-Began":"NA",
        "status": "partially-complete",
        "Date-Finished": "NA",
        "url-link":"not-created-yet",
        "image-description": ""
    
    */


	class Project{
		constructor(projectName, description, details, startDate, endDate, language, image, imageAlt, status, url, demo){
			this.projectName = projectName;
            this.description = description;
            this.details = details;
			this.language = language;
            this.image =  image;
            this.imageAlt = imageAlt;
            this.startDate = startDate;
            this.endDate = endDate;
            this.status = status;
            this.url = url;
            this.demo = demo;
		}
    }
    
    class Skill{
        constructor(name, years, proficiency){
            this.name = name;
            this.years = years;
            this.proficiency = (isNumeric(proficiency)? clamp(proficiency, 0, 100) : 0 );
        }

    }
    Skill.prototype.MAX = 100;
    Skill.prototype.MIN = 0;




    
    
    function loadSkills(content) {
        let langs = content.skills.languages;
        let db = content.skills.databases;
        let frontend = content.skills.frontend;
       //skillarray = langs.map((e) => {return new Skill(e.name, e.years, e.proficiency)})
        console.log(langs);
        console.log(db);
        
       langs.forEach(element => { 
           
            $("#lang-body").append
            (`
            <tr>
                <td>${element.name}</td>
                <td>${element.years}</td>
                <td>
                <div class="progress prog-bar">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="${element.proficiency}" aria-valuemin="0" aria-valuemax="100" style="width: ${element.proficiency}%">
                    ${element.proficiency}%
                    </div>
                </div>
                </td>
            </tr>
            
            `);
        });

         
       db.forEach(element => { 
           
            $("#db-body").append
            (`
            <tr>
                <td>${element.name}</td>
                <td>${element.years}</td>
                <td>
                <div class="progress prog-bar">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="${element.proficiency}" aria-valuemin="0" aria-valuemax="100" style="width: ${element.proficiency}%">
                    ${element.proficiency}%
                    </div>
                </div>
                </td>
            </tr>
            
            `);
        
        });

        frontend.forEach(element => { 
           
            $("#db-frontend").append
            (`
            <tr>
                <td>${element.name}</td>
                <td>${element.years}</td>
                <td>
                <div class="progress prog-bar">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="${element.proficiency}" aria-valuemin="0" aria-valuemax="100" style="width: ${element.proficiency}%">
                    ${element.proficiency}%
                    </div>
                </div>
                </td>
            </tr>
            
            `);
        
        });

    }

function loadProjects(content) {

	console.log("in doc ready");
	
		
		projects = content.cataloge.projects;
		for (x = 0; x < projects.length; x++) {
			pArray.push(new Project(
					projects[x].name,
                    projects[x].description,
                    projects[x].details,
                    projects[x]["Date-Began"],
                    projects[x]["Date-Finished"],
					projects[x].language,
                    imgPath + projects[x].image,
                    projects[x]["image-description"],
                    projects[x].status,
                    projects[x]["url-link"],
                    projects[x].demo
                ));
                /*
                $("#projectlist").append(
                    ` <section id='project${x}' class='project-section card'>
                    <img id='project${x}-img' class='card-img-top project-imgs' src='${pArray[x].image}' alt='${pArray[x].imageAlt}' /> 
                       <div class="card-body"> 
                        <h3 class="card-title">${pArray[x].projectName} - ${pArray[x].description} </h3>
                        <p class="card-text project-desc">
                            <span><strong>Language(s):</strong> ${pArray[x].language}</span><br>
                            <span><strong>Details:</strong> ${pArray[x].details}</span><br>
                         </p>
                         <a href="#" class="btn btn-info btn-block text-white">See github repository <i class="fab fa-github-square"></i></a>
                         </div>
                    </section>
					`
                );
                */

        }
        

        for (let i = 0; i < pArray.length; i++){
            if(i >= 3){
                break;
            }
             
            

            
            $("#featured-projects").append(`
            <div class="featured-item" style="">
                <img src="${pArray[i].image}"
                class=" project-imgs" 
                alt="${pArray[i].imageAlt}">
                
                <div class='item-caption'>
                    <h5>${pArray[i].projectName} - ${pArray[i].description} </h5>
                    <span class='item-language'><strong>Technologies:</strong> ${pArray[i].language}</span><br>
                
                      
                    <span class="item-text">${pArray[i].details}</span><br>
                    <div class='item-links'>
                        <a href=${pArray[i].url} class='github-link'>Github</a>
                        ${pArray[i].demo !== 'NA'? 
                        `<a href=${pArray[i].demo} class='demo-link'>Demo</a>`:""}
                    </div>
                </div>
                
                
            </div>
            `); 
        }


        
    
        pArray = pArray.filter((p, ind) => ind > 2);
        pArray.sort((p1,p2) => p1.projectName < p2.projectName);
        pArray.forEach((proj,index) => {
            let image = (proj.image !== 'NA')?
            `<img class="card-img-top" src=${proj.image} alt=${proj.imageAlt} />`
            :
            ""
            ;

                
            $("#project-cards").append(`
            <div class="card">
            
                ${image}
                
                <div class="card-body">
                    <h5 class="card-title">${proj.projectName}</h5>
                    <p class="card-text">${proj.description}</p>
                    <p class="card-text"><small class="text-muted">Technologies:${proj.language}</small></p>
                    <a href="${proj.url}" class="card-link"><i class="fab fa-github"></i> See on Github</a>
                </div>
            
            </div>`
        )
    });
        
	
}


function loadJourney(content){
    let events = content.journey.events;
    events = events.reverse();
    for (let i = 0 ; i < events.length; i++){
        $("#journey-list").append(`          
            <div class="journey-item animation ${i % 2 === 0 ? 'right' : 'left'}">
                <div class="content">
                    <div class="list-date accordion">
                        ${events[i].date} - ${events[i].summary}<span></span>
                    </div>
                    <div class="panel">
                        ${events[i].description}
                    </div>
                </div>
            </div>
      
        `); 
    }

    
}


function isScrolledIntoView($elem, $window) {
    $elem = $($elem);
    $window = $($window);
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}



$(document).ready(function() {

    $.getJSON("dataFiles/projects.json", loadProjects);
   
    $.getJSON("dataFiles/skills.json", loadSkills);

    $.getJSON("dataFiles/journey.json", loadJourney);

    accourdian();
    

    $(".navbar").css("position", "absolute");
    $(".navbar").css("top", initialPageHeight);

    window.onload = function() {
        navScroll(window.pageYOffset);
    };
    window.onresize = function() {
        navScroll(window.pageYOffset);
    };
    var siteNav = document.querySelector("#site-nav");
        
    window.onscroll =  function() {
        navScroll(window.pageYOffset);
        
        siteNav.classList.toggle("sticky", window.scrollY > 0);
    };

    
  const navbarBtn = document.querySelector('.navbar__btn');
  const navbarLinks = document.querySelector('.navbar__links');
  


    navbarBtn.addEventListener('click', function(){
        let value = navbarLinks.classList.contains('navbar_collapse');
     
        if (value){
           navbarLinks.classList.remove('navbar_collapse');
           navbarBtn.classList.remove('change');
        }else{
           navbarLinks.classList.add('navbar_collapse');
           navbarBtn.classList.add('change');
     
        }
     });

     window.addEventListener("scroll", function(){
        var header = document.querySelector("#site-nav");
        header.classList.toggle("sticky", window.scrollY > 0);
     })

     window.addEventListener("DOMContentLoaded", function(){
        var header = document.querySelector("#site-nav");
        header.classList.toggle("sticky", window.scrollY > 0);
     })
    
     

     window.addEventListener('scroll', function(){
        var elemsToAnimate = document.querySelectorAll('.animation');
        
         elemsToAnimate.forEach((elem) => {
             console.log(elem);
             if ((isScrolledIntoView(elem, window))){
                 elem.classList.add('animate');
             }
         })

     })

    openSection
        ({
            currentTarget: document.getElementsByClassName("tablinks")[0],
        }, 
        'Front'
        );


        
});

function toggleProj(){
    const allProj = document.querySelector('#projs');

    if (allProj.classList.contains('show'))
        allProj.classList.remove('show');
    else
        allProj.classList.add('show');

}


function navScroll(offset) 
{
    initialPageHeight = $("#title-screen").css("height");
    console.log("initial height: " + initialPageHeight);
    initialPageHeight = parseInt(initialPageHeight, 10);   
    
    console.log("initial height: " + initialPageHeight);
    
    if(offset <= initialPageHeight){
        $(".navbar").css("position", "absolute");
        $(".navbar").css("top", initialPageHeight);
        
    }else
    {
        $(".navbar").css("position", "fixed");
        $(".navbar").css("top", 0);
    }
}

function loadArticles(content)
{
    let sites = content.articles.site;
    let videos = content.articles.video;
    let audios = content.articles.audio;

    console.log("Sites: " + JSON.stringify(sites) + "\nVideos: " + JSON.stringify(videos) + "\nAudio: " + JSON.stringify(audios));
    
    for (let i = 0 ; i < sites.length; i++){
        $("#sites").append(`          
            <div class="card">
            <img src="${sites[i]['img-src']}" class="card-img-top w-75 mx-auto" alt="${sites[i]['img-alt']}">
            <div class="card-body">
                <h5 class="card-title">${sites[i]['title']}</h5>
                <a href="${sites[i]['src']}" class="btn btn-secondary">Go to article</a>
            </div>
            </div>
        `); 
    }
    

}

function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}


function accourdian(){
    
    document.addEventListener("click", function(e) {
        if (hasClass(e.target, 'accordion')) {
            // Toggle between adding and removing the "active" class,
            // to highlight the button that controls the panel
            e.target.classList.toggle("active");
    
            // Toggle between hiding and showing the active panel
            var panel = e.target.nextElementSibling;
            
            if (panel.style.display === "block") {
            panel.style.display = "none";
            } else {
            panel.style.display = "block";
            }
        }
    }, false);
    
    
    var acc = document.getElementsByClassName("accordion");
    var i;

    console.log("accordian");
    console.log(acc);
    for (i = 0; i < acc.length; i++) {
        
    } 
    
}



function openSection(evt, sectionName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(sectionName).style.display = "block";
    evt.currentTarget.className += " active";
  } 

  function topNavShow() {
    var x = document.getElementById("site-nav");
    if (x.classList.contains("responsive")) {
      x.classList.remove("responsive");
    } else {
        x.classList.add("responsive");
    }
  }


