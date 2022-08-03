import type { NextPage } from 'next'
import axios from 'axios'

interface IProps{
  videos: Array<any>
}
const Home: NextPage = ({}) => {
  return (
    <div>
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
      
    </div>
  )
}
export const getServerSideProps = async () => {
  const response = await axios.get('http://localhost:3000/api/post')
  console.log(response.data)

  return {
    props: {
      videos: response.data
    }
  }
}
export default Home
