import Welcome from './components/Welcome.vue'
import AboutMe from './components/AboutMe.vue'
import WebCreator from './components/WebCreator.vue'



export default [
    { path:'', component:Welcome},
    { path:'/AboutMe', component:AboutMe},
    { path:'/WebCreator', component:WebCreator}
]