import './assets/styles/App.css'
import { Header } from './components/Header'
import Job from './components/Job'
import { jobs } from './utils/data'

function App() {

  return (
    <>
      <Header />
      {jobs.map((job) => <Job job={job} />)}
    </>
  )
}

export default App
