const Main = document.getElementById("main");

const Div  = document.createElement("div");
const heading = document.createElement("h1");
heading.className = "Blogheading";
heading.textContent = "About Me..";
const Aboutpara = document.createElement("p");
Aboutpara.className = "Blogpara";
Aboutpara.innerHTML = "<p>I am Mohamed Halith, a passionate Python full-stack developer with a strong foundation in Computer Science Engineering. My journey in web development began during my academic years, where I discovered a love for building dynamic, user-friendly applications. Over time, I have honed my skills in both frontend and backend development, working with technologies such as Python, Django, JavaScript, and MySQL.<br><br>Having completed several projects, including a full-stack application, I have hands-on experience in integrating frontend and backend technologies to deliver seamless web solutions. My approach focuses on writing clean, efficient code and building scalable applications that solve real-world problems.<br><br>Currently, I am pursuing a Python certification to further enhance my expertise and stay up-to-date with the latest developments in the tech world. I am dedicated to continuous learning and am always exploring new frameworks and technologies to improve my skill set.  </p>"
Div.append(heading,Aboutpara);
Main.append(Div);

const Main_Aca = document.getElementById("main1")
const Div1  = document.createElement("div");
const heading1 = document.createElement("h3");
heading1.className = "Blogheading";
heading1.textContent = "Academic Achievements and Projects";
const Aboutpara1 = document.createElement("p");
Aboutpara1.className = "Blogpara";
Aboutpara1.innerHTML = "<p>During my time at college, I completed one full-fledged final year projects in the topic of An Enhanced Network Monitoring and Threat Detection ,this can strengthened my technical knowledge and problem-solving abilities. Among these, one was a E-commerce landing page web application**,and After I developed a full stack application which allowed me to dive deep into both front-end and back-end technologies. This project showcased my ability to integrate various web technologies into a seamless user experience</p>"
Div.append(heading1,Aboutpara1);
Main_Aca.append(Div);

const Main_Ath = document.getElementById("main2")
const Div2 = document.createElement("div");
const heading2 = document.createElement("h3");
heading2.className = "Blogheading";
heading2.textContent = "Athletic Achievements";
const para = document.createElement("p")
para.className = "Blogpara";
para.innerHTML ="<p>Beyond academics, I also have a passion for sports. I was part of the college football team, and we secured the zonal football championship during my time there. This experience taught me valuable lessons in teamwork, dedication, and maintaining a winning mindset—qualities I carry with me in my professional journey</p>" 
Div2.append(heading2,para);
Main_Ath.append(Div2);

const Main_cur = document.getElementById("main3")
const Div3 = document.createElement("div");
const heading3 = document.createElement("h3");
heading3.className = "Blogheading";
heading3.textContent = "Current Endeavors: Upskilling and Python Proficiency";
const para1 = document.createElement("p");
para1.className = "Blogpara";
para1.innerHTML = "<p>I am constantly looking to improve and expand my technical abilities. As part of my personal growth, I am currently pursuing a Python course to enhance my skill set. Python, with its versatility and growing demand, will enable me to explore new horizons in software development. This course is not only a stepping stone for my career growth but also a way to stay updated with evolving industry standards.</p>"
Div3.append(heading3,para1);
Main_cur.append(Div3);

const Main_web = document.getElementById("main4")
const Div4 = document.createElement("div");
const heading4 = document.createElement("h3");
heading4.className = "Blogheading";
heading4.textContent = "Web Development Journey and Career Growth";
const para2 = document.createElement("p");
para2.className = "Blogpara";
para2.innerHTML = "<p>My interest in web development is ever-growing, and I am dedicated to daily learning to keep pushing my knowledge and capabilities forward. From working on small side projects to exploring the latest web technologies, my goal is to continually upskill and make significant contributions</p>"
Div4.append(heading4,para2);
Main_web.append(Div4);

const Main_Look = document.getElementById("main5")
const Div5 = document.createElement("div");
const heading5 = document.createElement("h3");
heading5.className = "Blogheading";
heading5.textContent = "Looking Ahead";
const para3 = document.createElement("p");
para3.className = "Blogpara";
para3.innerHTML = "<p>As I continue my journey, I am excited about the opportunities that lie ahead, whether it be in web development, collaborating with like-minded individuals, or contributing to open-source projects. I am eager to see where my passion for technology and continuous learning will take me.</p>"
Div5.append(heading5,para3);
Main_Look.append(Div5);

const Main_vision = document.getElementById("main6")
const career = document.createElement("div");
const head = document.createElement("h3");
head.className = "Blogheading";
head.textContent = "Career Goals and Vision";
const para4 = document.createElement("p");
para4.className = "Blogpara";
para4.innerHTML = "<p>Looking ahead, my primary focus is on career growth and contributing to impactful projects in the world of web development. I am particularly interested in roles where I can leverage my skills in Python and full-stack development to create efficient, scalable applications. Additionally, I am open to exploring internship opportunities or open-source collaborations, where I can expand my horizons, work with industry experts, and contribute to the broader tech community.</p>"
career.append(head,para4);
Main_vision.append(career);
