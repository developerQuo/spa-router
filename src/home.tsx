import useRouter from '../utils/useRouter'
import './App.css'

function Home() {
  const { push } = useRouter()
  const onClick = () => {
    push('/about')
  }
  return (
    <>
    <div>
      <h1>root</h1>
      <button onClick={onClick}>about</button>
    </div>
    </>
  )
}

export default Home
