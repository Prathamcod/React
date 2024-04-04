import React from 'react'
import ReactDOM from 'react-dom/client'
// import{jsx as _jsx} from "react/jsx-runtime.js"
// import App from './App.jsx'

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App</h1>
//     </div>
//   )
// }

// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },

//   children: "Click me to visit google"

// }
const anotheruser = " react + vite + JSX"

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit Google</a>
// )

const reactElementCreate = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'clik me to visit google com',
  anotheruser
)


ReactDOM.createRoot(document.getElementById('root')).render(
  reactElementCreate
)



