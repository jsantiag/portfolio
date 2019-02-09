import tea from './images/tea.png'; 
import emoji from './images/loginEmoji.JPG';
import callMEter from './images/LandingPageCM.JPG';


export default [
  {
   title:'CallMEter',
   description:'CallMEter is a tool for anyone who tracks minutes spent on calls for their business. CallMEter takes care of tracking calls made through your browser and on your phone with the help of Twilio\'s api. Invoices are generated based off time spent and contact settings, with the help of NodeMailer they can be sent with the click of a button. CallMEter was a team effort! Check out my 4 good friends and our live demo with the links below! ',
   collaborators:[['Brady Fox','portfolioLink'],['Jonathon Garrett','portfolioLink']['Allister Rooke', 'portFolioLink' ],['Sean Nealon', 'portfolioLink']],
   image:callMEter,
   alt:"image landing page for CallMEter application",
   stack:[
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
  description:'Emoji Tutor is a linked list based, spaced-repetition learning app made to boost emoji literacy 👩‍🏫. Emojis are quickly becoming a staple in modern communication 🗣️, use Emoji Tutor to keep up 🏃 with the times ⏳.',
  collaborators:{'Logan Wang':'portfolioLink'},
  image:emoji,
  stack:[
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
  stack:[
    "ReactJS", "Redux", "NodeJS", "Express","MongoDB", "Mongoose", "JWT Auth", "Heroku", "Passport and Bcrypt"
  ],
  links:{
    github:'https://github.com/jsantiag/tea-time-client',
    live:'https://tea-time-client.herokuapp.com'
  }
  }
]