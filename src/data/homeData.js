export const sectionHero = {
	id: 'home',
    heading: 'Hello there!',
	subHeading: 'My name is William Matos',
	text: "root@william: ~# ls",
    reverse: false,
	button1: 'Download CV ',
    button2: 'Github ',
    img: require('../images/me.png'),
};

export const sectionAbout = {
	id: 'about',
    heading: 'About Me',
	subHeading: 'My name is William',
	text: "I was born and raised in Barranquitas, Puerto Rico. My native language is Spanish, but I speak English fluently. I am 22 years old, and I like video games and reading. Since I was little, I have been influenced by playing online computer games, which interested me in how technology works. Throughout my studies, I realized that what I liked about computers was their coding and security side. I enjoy building stuff, figuring out how things work, and how to break them. Since I come from a small island, I have always had a big concern for the cybersecurity of my country. One of my biggest goals is to become an outstanding Computer Science and Cybersecurity professional that can improve the cybersecurity infrastructure of Puerto Rico. My primary interests are Penetration Testing and Web Application Security.",
    //I have a Bachelor's Degree in Computer Science. I am also a recipient of the CyberCorps Scholarship for Service (SFS). I recently moved to Norfolk, Virginia to pursue a Master's in Cybersecurity
    reverse: true,
    img: require('../images/about.png'),

    heading2: 'Education',
	subHeading2: '',
	text2: "I completed my undergraduate studies at the Interamerican University of Puerto Rico-Barranquitas. In May, 2022 I officially obtained my Bachelor's degree in Computer Science with a Minor Concentration in Videogame Design and Development. In 2021, I participated in a Summer Research for Undergraduates which gave me the opportunity to do research on an Emerging Cybersecurity Topic. After that I was told that I could apply to the CyberCorps Scholarship for Service. When I got accepted I moved to Norfolk, VA to pursue a Master's in Cybersecurity in Old Dominion University. With this opportunity I aim to work for the goverment, get as much certifications I can, and prepare myself to be the professional I aspire to be.",
    reverse: true,
    img2: require('../images/education.png'),
};

export const sectionAwards = {
	id: 'awards',    
    heading: 'Awards',
	subHeading: 'CyberLEADERS Program',
	text: "The CyberLEADERs Program is a Scholarship for Service award created in 2021 through funding from the National Science Foundation's CyberCorps Scholarship for Service initiative. The scholarship program provides two to three years of support to selected students. This includes a full in-state tuition scholarship, an annual stipend, and a professional development allowance. In exchange, each student must work for the federal government in select cybersecurity positions for the same number of years. My experience so far has been great. I have learned a lot and made many connections, and the program has prepared me professionally. I have met my peers, and they have strong ambitions and goals. I look forward to working with every one of them in the future.",
    reverse: false,
    img: require('../images/award.png'),
};

export const sectionProjects = {
	id: 'projects',
    heading: 'My projects',
	subHeading: 'Landing Page - AppLivio',
	text: "Using different technologies, a fully resposive landing page was develop for the company AppLivio to promote their virtual assistant and appointment manager called Sofia. This internship experience helped me sharpen my front-end developement skills, and gave me the experience to work with AWS Amplify.",
    reverse: true,
    img: require('../images/project1.png'),
};

export const sectionExperiences = {
	id: 'experiences',
    date: 'June 2022 – July 2022 ',
    place: 'Inter American University of Puerto Rico-Barranquitas',
    position:'Position: IT Support',
    description: 'I worked with IT Systems (Windows Computers) on college campus while giving IT Support. I troubleshooted network problems (DNS and IP Addresses) and, installed, maintained, and upgraded computer hardware and software.',
    img: require('../images/inter.png'),

    date2: 'August 2021 – July 2022',
    place2: 'Upward Bound Program',
    position2:'Position: Computer Teacher Assistant',
    description2: 'Worked as a computer teacher assitant to teach high school students how to use common computer programs and helped them develop the necessary skills to enter college.',
    img2: require('../images/trio.png'),

    date3: 'August 2021 - December 2021',
    place3: 'Internship with DoCare LLC',
    position3:'Position: Front-End Web Developer (Remote)',
    description3: 'Used the System Development Cycle to create a landing page for the startup company AppLivio. The landing page was created using ReactJS, NodeJS, Styled Components. It is fully responsive, and it was deployed using AWS Amplify. (www.applivio.com)',
    img3: require('../images/applivio-logo.png'),

    date4: 'June 2021 - August 2021',
    place4: 'Research Experiences for Undergraduate (REU) Fellow',
    position4:'Position: Student Researcher',
    mentor:'Mentor: Hongyi Michael Wu, PhD',
    description4: 'Understanding how adversarial examples “attacks” worked and finding a way to defend against them. Finding ways to improve the robustness of machine learning algorithms using adversarial training. Techniques: Using Pytorch and Torchattacks to import adversarial examples and defend against them using adversarial training “defense mechanism”.',
    img4: require('../images/nsf.png'),

    date5: 'February 2019 - November 2020',
    place5: 'Econo Supermarket Barranquitas',
    position5:'Position: Grocery Packer and Store Maintance',
    img5: require('../images/econo.png'),

};