import React from 'react'
import { Route,  
  createBrowserRouter,
   createRoutesFromElements,
  RouterProvider} from 'react-router-dom'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import DevelopersAndEmployees from './components/DevelopersAndEmployees'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'


const router = createBrowserRouter(
  createRoutesFromElements(<Router index element ={<h1></h1>} />)
)

const App = () => {
  return (
    <>
    <NavBar/>
    <Hero/>
    <DevelopersAndEmployees/>
    <JobListings/>
    <ViewAllJobs/>

   
    
    </>
  )
}

export default App