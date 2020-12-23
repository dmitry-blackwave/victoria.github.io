(this["webpackJsonpreact-resume"]=this["webpackJsonpreact-resume"]||[]).push([[0],[,,function(e){e.exports=JSON.parse('{"info":{"name":"Your Name","email":"yourname@email.com","links":[{"name":"LinkedIn","url":"https://www.linkedin.com/in/yourname"},{"name":"Instagram","url":"https://instagram.com/yourname"},{"name":"Neopets","url":"https://neopets.com/yourname"},{"name":"Download"},{"name":"Fork this site!","url":"https://github.com/mklevin/react-resume"}]},"experience":[{"company":"Company with the Jobs","jobTitle":"Job Haver","location":"Jobtown, NY","startDate":"January 2019","endDate":"Present","bullets":["Carried out the responsibilities of someone who has a job, resulting in an over 100% increase in people with jobs.","Monitored job opportunities to ensure the continued job-havingness of all job-havers.","Managed tasks for self and team by doomscrolling on Twitter instead of actually doing work."]},{"company":"Employer Inc.","jobTitle":"Chief Employee","location":"Employville, CA","startDate":"August 2015","endDate":"December 2018","bullets":["Led a team of X employees in carrying out various employee tasks, including working, toiling, and laboring.","Completed tasks related to being an employee, including checking email, drowning in email, and declaring email bankruptcy."]},{"company":"Entry Level Employer","jobTitle":"Overqualified Hire","location":"Workenberg, WV","startDate":"June","endDate":"August 2014","bullets":["Acquired five years of experience despite this field having only existed for half that time.","Design and implemented a new method of appearing to work while watching cat videos, resulting in a 500% decrease in productivity."]},{"company":"University of College","jobTitle":"Undergraduate Employee","location":"Collegeplace, IO","startDate":"February","endDate":"December 2013","bullets":["Completed likely pretty complicated work for almost definitely a third of the pay a full-time employee would receive."]},{"company":"The Neighbor Down the Street","jobTitle":"\\"Landscaper\\"","location":"Hometown, FL","startDate":"May","endDate":"August 2013","bullets":["Mowed lawns, trimmed hedges, and otherwise kept the property looking pristine.","Received half-minimum wage for what is typically three people worth of work."]}],"skills":[{"name":"Languages","items":["Java","Scala","JavaScript/TypeScript","French","German","Pig Latin","Klingon"]},{"name":"Frameworks & Libraries","items":["MySQL","PostgreSQL","React","Android","Your Local Public Library"]},{"name":"Hobbies","items":[{"name":"Musical performance","items":["piano","cello","didgeridoo","seven-piece choir"]},"reading","farming","investment banking"]}],"education":[{"institute":"University of College","graduationDate":"May 2015","degree":"B.A., Art History","subDegree":"Minor in Gastronomy","majorGpa":"4.0","overallGpa":"3.2","coursework":["History of Art","History of Paint","History of Painted Art","The Stomach and Art","Paintings of Food"]}]}')},,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(0),a=i(1),s=i.n(a),r=i(4),c=i.n(r),l=(i(10),function(e){var t=e.education.map((function(e){return Object(n.jsxs)("li",{className:"educationItem",children:[Object(n.jsxs)("div",{className:"summary",children:[Object(n.jsxs)("div",{className:"info",children:[Object(n.jsx)("h3",{children:e.institute}),Object(n.jsx)("div",{children:e.degree}),Object(n.jsx)("div",{children:e.subDegree})]}),Object(n.jsxs)("div",{className:"context",children:[Object(n.jsx)("div",{className:"when",children:e.graduationDate}),e.overallGpa&&Object(n.jsxs)("div",{className:"gpa",children:["GPA: ",e.overallGpa]}),e.majorGpa&&Object(n.jsxs)("div",{className:"gpa",children:["Major GPA: ",e.majorGpa]})]})]}),Object(n.jsxs)("div",{className:"coursework",children:[Object(n.jsx)("span",{className:"title",children:"Related Coursework: "}),e.coursework.join(", ")]})]},e.institute)}));return Object(n.jsxs)("div",{className:"education",children:[Object(n.jsx)("h2",{children:"Education"}),Object(n.jsx)("ul",{className:"educationList",children:t})]})}),o=function(e){var t=e.experiences.map((function(e){return Object(n.jsxs)("li",{className:"experienceItem",children:[Object(n.jsxs)("div",{className:"summary",children:[Object(n.jsxs)("div",{className:"info",children:[Object(n.jsx)("h3",{children:e.company}),Object(n.jsx)("h4",{children:e.jobTitle})]}),Object(n.jsxs)("div",{className:"context",children:[Object(n.jsxs)("div",{className:"when",children:[e.startDate," \u2014 ",e.endDate]}),Object(n.jsx)("div",{className:"where",children:e.location})]})]}),Object(n.jsx)("ul",{className:"details",children:e.bullets.map((function(e){return Object(n.jsx)("li",{children:e},e)}))})]},e.company)}));return Object(n.jsxs)("div",{className:"experience",children:[Object(n.jsx)("h2",{children:"Experience"}),Object(n.jsx)("ul",{className:"experienceList",children:t})]})};function d(e){e.preventDefault(),window.print()}var m=function(e){var t=e.resumeInfo,i=t.links.map((function(e){return Object(n.jsx)("span",{children:"Download"===e.name?Object(n.jsx)("a",{href:"#",onClick:d,children:"Download"}):Object(n.jsx)("a",{href:e.url,target:"blank",children:e.name})},e.name)})).reduce((function(e,t){return[e," | ",t]}));return Object(n.jsxs)("header",{children:[Object(n.jsx)("div",{className:"name",children:Object(n.jsx)("h1",{children:t.name})}),Object(n.jsxs)("div",{className:"links",children:[Object(n.jsx)("div",{className:"email",children:Object(n.jsx)("a",{href:"mailto:"+t.email,children:t.email})}),Object(n.jsx)("div",{className:"other",children:i})]})]})};function j(e){if(e.items){var t=e.items.map((function(e){return j(e)})).join(", ");return e.name+" (".concat(t,")")}return e}var u=function(e){var t=e.skills.map((function(e){return Object(n.jsxs)("div",{className:"category",children:[Object(n.jsx)("div",{className:"categoryName",children:Object(n.jsx)("h3",{children:e.name})}),Object(n.jsx)("div",{className:"skills",children:e.items.map((function(e){return j(e)})).join(", ")})]},e.name)}));return Object(n.jsxs)("div",{className:"skills",children:[Object(n.jsx)("h2",{children:"Skills"}),Object(n.jsx)("div",{className:"skillsList",children:t})]})},h=i(2);i(11);var b=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("div",{className:"spacer"}),Object(n.jsxs)("div",{className:"Resume",children:[Object(n.jsx)(m,{resumeInfo:h.info}),Object(n.jsxs)("main",{children:[Object(n.jsx)(o,{experiences:h.experience}),Object(n.jsxs)("div",{className:"sidebar",children:[Object(n.jsx)(u,{skills:h.skills}),Object(n.jsx)("div",{className:"spacer"}),Object(n.jsx)(l,{education:h.education})]})]})]}),Object(n.jsx)("div",{className:"spacer"})]})},p=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,13)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;i(e),n(e),a(e),s(e),r(e)}))};c.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root")),p()}],[[12,1,2]]]);
//# sourceMappingURL=main.b7a6a622.chunk.js.map