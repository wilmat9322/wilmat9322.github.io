export const sectionHero = {
	id: 'home',
    heading: 'Hello there!',
	subHeading: 'My name is William Matos',
	text: "root@william: ~# ls",
    reverse: false,
	button1: 'Download CV ',
    button2: 'Github ',
    img: require('../images/boda3.png'),
};

export const sectionAbout = {
	id: 'about',
    heading: 'About Me',
	subHeading: 'My name is William',
	text: "I was born and raised in Puerto Rico. My native language is Spanish, but I speak English fluently. I am 24 years old and I like coding and playing video games. I enjoy building stuff, figuring out how things work, and how to break them. Since I come from a small island, I have always had a big concern for the cybersecurity of my country. One of my biggest goals is to become an outstanding Cybersecurity professional that can improve the cybersecurity infrastructure of Puerto Rico. My primary interests are System Administration, Pentesting and Web Application Security.",
    reverse: true,
    img: require('../images/about.png'),
};

export const sectionEducation = {
	id: 'education',
    heading: 'Education',
	subHeading: '',
	text: "I completed my undergraduate studies at the Interamerican University of Puerto Rico-Barranquitas and obtained my Bachelor's degree in Computer Science with a Minor Concentration in Videogame Design and Development. When I got accepted to the CyberCorps Scholarship for Service, I moved to Norfolk, VA, to pursue a Master's in Cybersecurity at Old Dominion University. I am expected to graduate in May 2024. With this opportunity, I aim to work for the government, get as many certifications as possible, and prepare myself to be the professional I aspire to be.",
    reverse: false,
    img: require('../images/education.png'),
};

export const sectionAwards = {
	id: 'awards',    
    heading: 'Awards',
	subHeading: 'CyberCorps SFS Program',
	text: "The CyberCorps SFS Program is a Scholarship for Service award that provides selected students with two to three years of support. This includes a full in-state tuition scholarship, an annual stipend, and a professional development allowance. In exchange, each student must work for the federal government in select cybersecurity positions for the same number of years. My experience so far has been amazing. I have met my peers, and they have strong ambitions and goals. I look forward to working with them in the future.",
    reverse: false,
    img: require('../images/award.png'),
};

export const sectionSkills = {
	id: 'skills',
    heading: 'Skills',
	subHeading: 'Below are some of my technical and soft skills.',

    img1: require('../images/binary-code.png'),
    channelTitle:'Programming',
    channelDesc:'C/C++, Python, SQL, HTML5, CSS, JavaScript, ReactJS, Microsoft Visual Basic',

    img2: require('../images/hacker.png'),
    channelTitle2:'Cybersecurity',
    channelDesc2:'NMAP, Nessus, Wireshark, Burp Suite, Snort, Bash Scripting, Powershell Scripting, Autopsy, ProDiscover, FTK Imager, and Recuva',

    img3: require('../images/solution.png'),
    channelTitle3:'Soft Skills',
    channelDesc3:'Project Management, documentation, communication, collaboration and teamwork, time Management, adaptability, excelent writing, and critical thinking.',

    img4: require('../images/server.png'),
    channelTitle4:'Windows Skills',
    channelDesc4:'Windows Server 2019, Active Directory, Group Policy Objects, TCP/IP, DNS, DHCP, IP Management, Firewall Rules, Remote Desktop Services, RDS, UDP.',
};

export const sectionProjects = {
	id: 'projects',
    heading: 'My projects',
	subHeading: 'Landing Page - AppLivio',
	text: "A fully responsive landing page was developed for AppLivio to promote their virtual assistant and medical appointment manager, Sofia. This project helped me sharpen my front-end development skills and allowed me to work with AWS Amplify.",
    reverse: true,
    img: require('../images/project1.png'),

    subHeading2: 'A Sensible Approach for Implementing the NIST Cybersecurity Framework',
	text2: "The National Institute of Standards and Technology's Cybersecurity Framework (NIST CSF) was created in 2014 to help organizations that want to improve their cybersecurity defenses. While most organizations recognize how the NIST CSF Framework works, a collaborative effort to improve cybersecurity in businesses of all sizes, adapting and implementing the Framework can be easier said than done.",
    img2:require('../images/NIST_logo.png'),

    subHeading3: 'ATM Malware Analysis in Digital Forensics',
	text3: "ATMs or automated teller machines are computers programmed to manage bank funds. These computers are a big target for criminals since they hold much cash and are vulnerable to physical, software, and remote attacks. Knowing what kind of threats these machines are vulnerable to is vital since they can be part of skimming and laundering money crimes. Therefore, Digital forensics investigators should be familiar with these kinds of frauds on ATMs.",
    img3:require('../images/hacking-ATM.png'),

    subHeading4: 'Using Torchattacks to Improve the Robustness of Models with Adversarial Training ',
	text4: "Adversarial training has proven to be one of the most successful ways to defend models against adversarial examples. This process consists of training a model with an adversarial example to improve the model's robustness. In this experiment, Torchattacks, a Pytorch library made for importing adversarial examples more easily, was used to determine the strongest attack.",
    img4:require('../images/cifar_10.png'),

    subHeading5: 'CYSE695: Windows System for Cybersecurity Course',
	text5: "This is a compilation of research assignments and hands-on projects where I dicsuss different topics related to Windows Server. The projects demonstrate that I was able to gain technical skills like setting up a new Windows Server 2019, using active directory, creating group golicy objects, creating users, setting up network settings, using RDP, and more. For the research assignments I was able to write about different cyberecurity matters related to Windows Server 2019, and the importance of having good practices.",
    img5:require('../images/windows-projects.png'),
};

export const sectionExperiences = {
	id: 'experiences',
    heading:'Experiences',

    date: 'June 2023 – August 2023 ',
    place: 'Cybersecurity Infrastructure and Security Agency (CISA)',
    position1:'Position: IT Cybersecurity Specialist',
    description: 'I Worked with the Cybersecurity Division (CSD) in Threat Hunting. I gained experience with tools like: Splunk, Eric Zimmerman Tools, RegRipper, Iris, Zeek, and more.',
    img: require('../images/CISA.png'),

    date2: 'June 2022 – July 2022 ',
    place2: 'Inter American University of Puerto Rico-Barranquitas',
    position2:'Position: IT Support',
    description2: 'I worked with IT Systems (Windows Computers) on college campus while giving IT Support. I troubleshooted network problems (DNS and IP Addresses) and installed, maintained, and upgraded computer hardware and software.',
    img2: require('../images/inter.png'),

    date3: 'August 2021 – July 2022',
    place3: 'Upward Bound Program',
    position3:'Position: Computer Teacher Assistant',
    description3: 'Worked as a computer teacher assistant to help high school students learn how to use standard computer programs and helped them develop the necessary skills to get into college.',
    img3: require('../images/trio.png'),

    date4: 'August 2021 - December 2021',
    place4: 'Internship with DoCare LLC',
    position4:'Position: Front-End Web Developer (Remote)',
    description4: 'Used the System Development Cycle to create a landing page for the startup company AppLivio. The landing page was created using ReactJS, NodeJS, and Styled Components. It is fully responsive, and it was deployed using AWS Amplify. (www.applivio.com)',
    img4: require('../images/applivio-logo.png'),


    date5: 'June 2021 - August 2021',
    place5: 'Research Experiences for Undergraduate (REU) Fellow',
    position5:'Position: Student Researcher',
    description5: 'I researched how adversarial examples worked and researched to find a way to defend against them. I also researched ways to improve the robustness of machine learning algorithms using adversarial training. Techniques: Using Pytorch and Torchattacks to import adversarial examples and defend against them using adversarial training “defense mechanism.”',
    img5: require('../images/nsf.png'),

    date6: 'February 2019 - November 2020',
    place6: 'Econo Supermarket Barranquitas',
    position6:'Position: Grocery Packer and Store Maintenance',
    img6: require('../images/econo.png'),

};

export const sectionConferences = {
	id: 'conferences',
    reverse: true,
    heading: 'Conferences',
    subHeading: 'Annual Security Conference (ASC)',
	text: "This conferences was focused on Academic and professional discourse in security, assurance and privacy. I attended this conference in May 2023 to present a research paper that focused on Malware found in ATMs.",
    img:require('../images/ASC.png'),

    id: 'conferences',
    reverse: true,
    heading: 'Conferences',
    subHeading2: 'SANS HackFest Hollywood 2023',
	text2: "This conference was a two-day Summit that covered all aspects of the offensive side of cybersecurity like penetration testing, adversary emulation, exploitation, or red teaming. There were interesting keynotes, workshops and CTFs.",
    img2:require('../images/SANS.png'),
}; 

export const sectionContact= {
	id: 'contact',    
};