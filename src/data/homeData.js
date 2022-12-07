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
	text: "I was born and raised in Barranquitas, Puerto Rico. My native language is Spanish, but I speak English fluently. I am 22 years old, and I like coding and playing video games. I enjoy building stuff, figuring out how things work, and how to break them. Since I come from a small island, I have always had a big concern for the cybersecurity of my country. One of my biggest goals is to become an outstanding Computer Science and Cybersecurity professional that can improve the cybersecurity infrastructure of Puerto Rico. My primary interests are Penetration Testing and Web Application Security.",
    //I have a Bachelor's Degree in Computer Science. I am also a recipient of the CyberCorps Scholarship for Service (SFS). I recently moved to Norfolk, Virginia to pursue a Master's in Cybersecurity
    reverse: true,
    img: require('../images/about.png'),
};

export const sectionEducation = {
	id: 'education',
    heading: 'Education🎓',
	subHeading: '',
	text: "I completed my undergraduate studies at the Interamerican University of Puerto Rico-Barranquitas and obtained my Bachelor's degree in Computer Science with a Minor Concentration in Videogame Design and Development. When I got accepted to the CyberLEADERs Program (SFS), I moved to Norfolk, VA, to pursue a Master's in Cybersecurity at Old Dominion University. I am expected to graduate in May 2024. With this opportunity, I aim to work for the government, get as many certifications as possible, and prepare myself to be the professional I aspire to be.",
    //I have a Bachelor's Degree in Computer Science. I am also a recipient of the CyberCorps Scholarship for Service (SFS). I recently moved to Norfolk, Virginia to pursue a Master's in Cybersecurity
    reverse: false,
    img: require('../images/education.png'),

};

export const sectionAwards = {
	id: 'awards',    
    heading: 'Awards',
	subHeading: 'CyberLEADERS Program',
	text: "The CyberLEADERs Program is a Scholarship for Service award that provides selected students with two to three years of support. This includes a full in-state tuition scholarship, an annual stipend, and a professional development allowance. In exchange, each student must work for the federal government in select cybersecurity positions for the same number of years. My experience so far has been great. I have met my peers, and they have strong ambitions and goals. I look forward to working with them in the future.",
    reverse: false,
    img: require('../images/award.png'),
};

export const sectionSkills = {
	id: 'skills',
    heading: 'Skills 🛠️',
	subHeading: 'Below are some of my technical and soft skills.',
    img1: require('../images/binary-code.png'),
    img2: require('../images/hacker.png'),
    img3: require('../images/solution.png'),
    channelTitle:'Programming',
    channelDesc:'C++, Python, SQL, HTML5, CSS, JavaScript, ReactJS, Microsoft Visual Basic',
    channelTitle2:'Cybersecurity',
    channelDesc2:'NMAP, Nessus, Wireshark, Burpsuit, Snort, Bash, Powershell Scripting, Autopsy, ProDiscover, FTK Imager, and Recuva',
    channelTitle3:'Soft Skills',
    channelDesc3:'Good writing, communication, teamwork, critical thinking, and time management skills',
};

export const sectionProjects = {
	id: 'projects',
    heading: 'My projects',
	subHeading: 'Landing Page - AppLivio',
	text: "A fully responsive landing page was developed for AppLivio to promote their virtual assistant and medical appointment manager, Sofia. This project helped sharpen my front-end development skills and allowed me to work with AWS Amplify.",
    reverse: true,
    img: require('../images/project1.png'),

    subHeading2: 'A Sensible Approach for Implementing the NIST Cybersecurity Framework',
	text2: "The National Institute of Standards and Technology's Cybersecurity Framework (NIST CSF) was created in 2014 to help organizations that want to improve their cybersecurity defenses. While most organizations recognize how the NIST CSF Framework works, collaborative effort to improve cybersecurity in businesses of all sizes, adapting and implementing the Framework can be easier said than done.",
    img2:require('../images/NIST_logo.png'),

    subHeading3: 'ATM Malware Analysis in Digital Forensics',
	text3: "ATMs or automated teller machines are computers programmed to manage bank funds. These computers are a big target for criminals since they hold a lot of cash and are vulnerable to physical, software, and remote attacks. Knowing what kind of threats these machines are vulnerable to is vital since they can be part of skimming and laundering money crimes. Therefore, Digital forensics investigators should be familiar with these kinds of frauds on ATMs.",
    img3:require('../images/hacking-ATM.png'),

    subHeading4: 'Using Torchattacks to Improve the Robustness of Models with Adversarial Training ',
	text4: "Adversarial training has proven to be one of the most successful ways to defend models against adversarial examples. This process consists of training a model with an adversarial example to improve the robustness of the model. In this experiment, Torchattacks, a Pytorch library made for importing adversarial examples more easily, was used to determine which attack was the strongest.",
    img4:require('../images/cifar10.png'),
};

export const sectionExperiences = {
	id: 'experiences',
    heading:'Experiences',
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