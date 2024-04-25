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

export const sectionWindows = {
	id: 'Windows',
    heading: 'CYSE 695: Windows Course',
	subHeading: 'Key Concepts Learned and Outcomes of Projects Completed',
    subHeading2: "Hands-On Projects",
    subHeading3: "Final Thoughts",
	text: "During my academic journey, I learned about the different aspects of Windows Server 2019. These include building a lab environment, configuring and using Windows Admin Center, configuring DNS Service and DHCP Server, Active Directory Management and Administration, Group Policy in Active Directory, Firewall Administration, Remote Desktop Services, and more. During my research, I understood the fundamentals of TCP/IP protocols and how they differ from those of the OSI model. While utilizing Windows Admin Center, I understood how it can contribute to the effective management and performance of Windows Server environments and the essential security considerations and best practices for ensuring secure configuration and administration within this framework. For my third research assignment, I understood how DNS and DHCP can contribute to network communications and the effective management strategies that can be implemented to address standard privacy and security concerns associated with these protocols. For my third research assignment, I learned about the key components and functions of Active Directory. I highlighted the most common security risks and mitigation strategies for managing secure authentication and authorization processes. For my fifth research assignment, I learned how subnetting can affect IP management and network segmentation. Furthermore, I learned the benefits of using PowerShell for domain management tasks in Windows Server 2019. For my sixth research assignment, I understood how group policy affects user experience and system configurations and the challenges and best practices in designing and implementing group policy. My seventh research assignment focused on emerging cyber threats and network architecture changes that affected Windows Firewall configurations and policies. I also learned about the impact of specific rules in Windows Defender Firewall on system security. For my final research assignment, I learned how User Profile Disks (UPDs) can enhance user experience in Windows Server 2019's Remote Desktop Services and their key management considerations.",
    text2: "My first hands-on project was to the first lab, which allowed me to understand how to mount an ISO image to start the installation process of my virtual machine, create true partitions on my virtual hard disk, and set passwords for my administrator account. While working on my second lab, I performed tasks such as assigning network settings, configuring Windows Admin Center, and using Remote Desktop. The third hands-on project allowed me to configure a DNS for my domain controller by installing a DNS server and active directory roles and features. Furthermore, I was able to add new zones, new hosts, and new resource records. I also installed a DHCP Server role and created a DHCP scope. For my fourth lab, I set up an active directory on Windows Server 2019 by logging in to the server as an administrator. I also added a domain controller to an existing domain and specified the location of active directory data log files. The fifth hands-on project allowed me to understand how to create active directory sites, create subnets, move domain controllers, and check replication. Furthermore, it allowed the creation and managing of active directory user accounts using Powershell. The next hands-on project was installing applications using group policy in Windows Server 2019. This project allowed me to understand how to create new objects that automatically install software for computers connected to the domain controller.  For my seventh hands-on project, I managed firewall rules using group policy objects, like turning it on or off. I also managed Windows Defender Firewall rules by using group policy objects to change their state for domain, private, and public profiles. For my final hands-on project, I could set up a User Profile Disk with a Remote Desktop and connect to my domain controller while using another virtual machine.",
    text3: "This course has expanded my knowledge of configuring and managing a Windows Server 2019. The course is structured and self-paced, allowing me to take my time to learn each module. There was an outstanding balance between the technical side of things and the research assignments. This taught me about managing Windows Servers, like creating users using group policy, managing firewalls, configuring active directories, DNS, DHCP, and Remote Desktop, how to add an existing domain controller, and more. On the other hand, I learned the best practices when working with Windows Server 2019, the best security practices, and how different functions can affect the user. Overall, this course has helped me understand how to work with a Windows Server and the foundational skills to become a Windows Server administrator.",
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
	text5: "This is a compitaltion of research assignments and hands-on projects where I dicsuss different topics related to Windows Server. The projects demonstrate that I was able to gain technical skills like setting up a new Windows Server 2019, using active directory, creating group golicy objects, creating users, setting up network settings, using RDP, and more. For the research assignments I was able to write about different cyberecurity matters related to Windows Server 2019, and the importance of having good practices.",
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

export const sectionContact= {
	id: 'contact',    
};