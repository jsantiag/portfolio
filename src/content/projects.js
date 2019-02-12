import tea from '../images/tea.png'; 
import emoji from '../images/loginEmoji.JPG';
import callMEter from '../images/LandingPageCM.JPG';
import jung from '../images/jung.jpg';
import me from '../images/mysprite.JPG';

const projects = [
  {title: 'About Me',
  description:'👋 Hey all, I go by Jocelyn and I\'m a full stack developer based in Boston, I found my way to programming as a studio art major my senior year at Wellesley (CO \'18). I\'ve always had a thing for making experiences for people, that was the draw in my practice in studio and that was the primary drive for taking the steps to become a developer post grad. I joined Thinkful\'s full stack engineering immersion program and have not looked back. In the past six months I\'ve learned to build applications from the ground up and worked with many great people, some of whom you\'ll meet below. I look forward to forging my careerpath as a developer, keeping the goal of crafting better user experiences close as my guide through all that lies ahead. Take a look at some of my projects and drop me a line in the form below.',
  image:me
  },
  {
   title:'CallMEter',
   description:'CallMEter is a tool for anyone who tracks minutes spent on calls for their business. CallMEter takes care of tracking calls made through your browser and on your phone with the help of Twilio\'s api. Invoices are generated based off time spent and contact settings, with the help of NodeMailer they can be sent with the click of a button. CallMEter was a team effort! Check out my 4 good friends and our live demo with the links below! ',
   collaborators:[['Brady Fox','portfolioLink'],['Jonathon Garrett','portfolioLink'],['Allister Rooke', 'portFolioLink' ],['Sean Nealon', 'portfolioLink']],
   image:callMEter,
   alt:"image landing page for CallMEter application",
   skills:[
     "ReactJS", "Redux", "NodeJS", "NodeMailer", "Twilio", "Express", "MongoDB","Mongoose","Passport & Bcrypt", "JWT Auth", "Netlify" 
   ],
   demo:[["organization name","CallMeter Demo"], ["password","password123"]],
   links:{
     github:'https://github.com/thinkful-ei25/billable-client',
     live:'https://callmeter.netlify.com'
    }
  },
  {
  title:'Emoji Tutor',
  description:'Emoji Tutor is a linked list based, spaced-repetition learning app made to boost emoji literacy 👩‍🏫. Emojis are quickly becoming a staple in modern communication 🗣️, use Emoji Tutor to keep up 🏃 with the times ⏳. I worked on Emoji Tutor with a great partner, check Logan out below!',
  collaborators:[['Logan Wang','portfolioLink']],
  image:emoji,
  skills:[
    "ReactJS","Redux", "NodeJS", "Express", "Passport & Bcrypt", "JWT Auth", "Mongoose", "MongoDB", "Heroku"
  ],
  demo:{username: 'demo', password:'test123456'},
  links:{
    github:'https://github.com/thinkful-ei25/Emoji-Tutor-client-jocelyn-logan',
    live:' https://emoji-tutor-client.herokuapp.com/'
  }
  },
  {
  title:'Tea Time',
  description:'Tea Time was my first ever react app and maybe the most revealing, so far, of who I am as an individual. Tea Time was built to help users perfect their tea experience by keeping a log of brew times and ratings. The app\'s main feature is a timer page that also tracks user activity. When a user leaves the Tea Time app by clicking another tab or closing the window while the timer is still running they will discover a spilled virtual cup upon their return 😞. I think we can all benefit from a nice break from the endless tabs and buzz of the interwebs, this is a cute tool to do it and enjoy your tea 💖.',
  collaborators:null,
  image:tea,
  skills:[
    "ReactJS", "Redux", "NodeJS", "Express","MongoDB", "Mongoose", "JWT Auth", "Heroku", "Passport and Bcrypt"
  ],
  demo: [],
  links:{
    github:'https://github.com/jsantiag/tea-time-client',
    live:'https://tea-time-client.herokuapp.com'
  }
  },
  {
    title:"Coming Soon -- Between Dreams",
    image:jung,
    alt: 'a young Jung, artfully displayed in colorful digital painting',
    description: "I'm a big fan of recording dreams and developing an understanding of what's happening under the surface. I've been logging my own dreams for months now and my dream life has only become more vivid and meaningful. Between Dreams is my first mobile app. The goal is to bring a social element into the way we experience and interpret dreams, which I believe are as much about the collective as they are about the individual. With Between Dreams users can expect the following: a clean interface for logging, a way to create tags of trackable keywords, and a semi-anonymous way to share, view, and discuss dream logs amongst friends you add to your collective, and some resources to Jungian dream theory",
    skills:["React-Native", "Mongodb", "NodeJS", "Express"], 
  }
];

export default projects;