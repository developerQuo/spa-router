import useRouter from '../utils/useRouter'
import './App.css'

function About() {
  const { push } = useRouter()

  const onClick = () => {
    push('/')
  }
  return (
    <>
    <div>
      <h1>about</h1>
      <button onClick={onClick}>go main</button>
    </div>
    </>
  )
}

export default About
