
import tea from '../images/tea.png'; 
import emoji from '../images/loginEmoji.JPG';
import callMEter from '../images/LandingPageCM.JPG';
import jung from '../images/jung.jpg';
import me from '../images/mysprite.JPG';

let indent = '     ';
const projects = [
  {title: `About Me`,
  short:`${indent}👋 Hey all, I go by Jocelyn and I'm a full stack developer based in Boston, I found my way to programming as a studio art major my senior year at Wellesley (CO '18).`,
  description:`${indent}👋 Hey all, I go by Jocelyn and I'm a full stack developer based in Boston, I found my way to programming as a studio art major my senior year at Wellesley (CO '18). \n \n${indent}I've always had a thing for making experiences for people and bringing ideas to life, that was the draw in my practice in studio and that was the primary drive for taking the steps to become a developer post grad. \n \n${indent}I joined Thinkful's full stack engineering immersion program and have not looked back. In the past six months I've learned to build applications from the ground up and worked with many great people, some of whom you'll meet below. \n \n${indent} When I'm not at my keyboard you'll probably find me writing or collecting audio and video clips. I've kept journals for years, I love the act of writing and keeping records of everyday life. \n \n${indent}I'm looking forward to forging a career as a developer. I want to continue my experience of working on talented teams and creating tools and experiences that have the power to make life better. \n \n ${indent}Feel free to reach out on LinkedIn or drop me a line using the email links in the header and footer of this page. Advice, critiques, questions and future collabs are all welcome!`,
  image:me,
  collaborators:[['get a glimpse of my past life here','https://drive.google.com/drive/folders/1W85nx7axHA6D4HNAeQF1h0XC0_YO6ZZW?usp=sharing']]
  },
  {
   title:`CallMEter`,
   short:`${indent}CallMEter is a tool for anyone who tracks minutes spent on calls for their business.`,
   description:`${indent}CallMEter is a tool for anyone who tracks minutes spent on calls for their business. \n \n${indent}CallMEter takes care of tracking calls made through your browser and on your phone with the help of Twilio's api. Invoices are generated based off time spent and contact settings, with the help of NodeMailer they can be sent with the click of a button. \n \n${indent}CallMEter was a team effort! Check out my 4 good friends and our live demo with the links below! `,
   collaborators:[[`Brady Fox`,`https://www.bradycfox.com/`],[`Jonathon Garrett`,`http://jonathongarrett.com/`],[`Allister Rooke`, `https://github.com/allistergg` ],[`Sean Nealon`, `https://signalflowsean.netlify.com/`]],
   image:callMEter,
   alt:`image landing page for CallMEter application`,
   skills:[
     "ReactJS", "Redux", "NodeJS", "NodeMailer", "Twilio", "Express", "MongoDB","Mongoose","Passport & Bcrypt", "JWT Auth", "Netlify" 
   ],
   demo:[["organization name","CallMeter Demo"], ["password","password123"]],
   links:{
     github:`https://github.com/thinkful-ei25/billable-client`,
     live:`https://callmeter.netlify.com`
    }
  },
  {
  title:`Emoji Tutor`,
  short:`${indent}Emoji Tutor is a linked list based, spaced-repetition learning app made to boost emoji literacy 👩‍🏫.`,
  description:`${indent}Emoji Tutor is a linked list based, spaced-repetition learning app made to boost emoji literacy 👩‍🏫.\n \n${indent}Emojis are quickly becoming a staple in modern communication 🗣️, use Emoji Tutor to keep up 🏃 with the times ⏳. \n \n${indent}I worked on Emoji Tutor with a great partner, check Logan out below!`,
  collaborators:[[`Logan Wang`,'https://loganwang.com/']],
  image:emoji,
  skills:[
    "ReactJS","Redux", "NodeJS", "Express", "Passport & Bcrypt", "JWT Auth", "Mongoose", "MongoDB", "Heroku"
  ],
  demo:{username: `demo`, password:`test123456`},
  links:{
    github:`https://github.com/thinkful-ei25/Emoji-Tutor-client-jocelyn-logan`,
    live:` https://emoji-tutor-client.herokuapp.com/`
  }
  },
  {
  title:`Tea Time`,
  short:`${indent}Tea Time was built to help users perfect their tea experience by keeping a log of brew times and ratings.`,
  description:`${indent}Tea Time was built to help users perfect their tea experience by keeping a log of brew times and ratings. \n \n${indent}The app's main feature is a timer page that also tracks user activity. When a user leaves the Tea Time app by clicking another tab or closing the window while the timer is still running they will discover a spilled virtual cup upon their return 😞.\n \n${indent} I think we can all benefit from a nice break from the endless tabs and buzz of the interwebs, this is a cute tool to do it and enjoy your tea 💖.`,
  collaborators:null,
  image:tea,
  skills:[
    "ReactJS", "Redux", "NodeJS", "Express","MongoDB", "Mongoose", "JWT Auth", "Heroku", "Passport and Bcrypt"
  ],
  demo: [],
  links:{
    github:`https://github.com/jsantiag/tea-time-client`,
    live:`https://tea-time-client.herokuapp.com`
  }
  },
  {
    title:"Between Dreams, WIP",
    image:jung,
    alt: `a young Jung, artfully displayed in colorful digital painting`,
    short:`${indent}I'm a fan of recording dreams and developing an understanding of what's happening under the surface.`,
    description: `${indent}I'm a big fan of recording dreams and developing an understanding of what's happening under the surface. \n \n${indent}I've been logging my own dreams for months now and my dream life has only become more vivid and meaningful. Between Dreams is my first mobile app. \n \n${indent}The goal is to bring a social element into the way we experience and interpret dreams, which I believe are as much about the collective as they are about the individual. \n \n${indent}With Between Dreams users can expect the following: a clean interface for logging, a way to create tags of trackable keywords, and a semi-anonymous way to share, view, and discuss dream logs amongst friends you add to your collective, and some resources to Jungian dream theory.`,
    skills:["React-Native", "Mongodb", "NodeJS", "Express"], 
  }
];

export default projects;