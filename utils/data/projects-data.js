import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Bus Booking  WebApp',
        description: "The bus booking app features Spring Boot, Hibernate, MySQL, and React. Spring Boot and Hibernate handle backend operations and database interactions, while RESTful APIs facilitate seamless data exchange. React provides an interactive UI, enhanced by Axios for efficient HTTP requests, allowing users to easily search routes, select seats, and book tickets online.",
        tools: ['React', 'MUI', 'Bootstrap',' Springboot','Hibernate','Postman', 'MySQL'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        projectLink: "",
        image: crefin,
    },
    {
        id: 2,
        name: 'Property Rental WebApp',
        description: 'The property rental application is a robust backend solution built with Spring Boot and Hibernate, using MySQL for data storage. It manages property listings, user accounts, and rental transactions, with secure API endpoints for seamless data handling. The backend ensures efficient CRUD operations, user authentication, and scalable management of property and rental information.',
        tools: [ 'Spring Boot', 'Hibernate', 'MySQL',"Postman"],
        role: 'Back-End Developer',
        code: '',
        demo: '',
        projectLink: "",
        image: travel,
    },
    {
        id: 3,
        name: 'Typing Test WebApp ',
        description: 'The typing test app offers an intuitive frontend interface where users can add custom text and set personalized test durations. It features an easy-to-use input form for entering text and selecting time limits, providing a flexible and engaging typing practice experience. The responsive design ensures smooth usability across various devices..',
        tools: ['React', 'Bootstrap', "MUI"],
        code: '',
        role: ' Front-end Developer',
        projectLink: "https://technotype.netlify.app/",
        image: realEstate,
    },
    // {
    //     id: 4,
    //     name: 'Health Care Project',
    //     description: "My team and I developed a healthcare insurance claims dashboard application for a USA based client. As a front-end developer, I worked on creating the dashboard using ReactJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Jest for testing phase.",
    //     tools: ['ReactJS', 'Material UI', 'Redux', 'Jest', 'Enzyme', 'NVDA'],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: 'Front-End Developer',
    // }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },