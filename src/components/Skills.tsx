import { useEffect, useState } from "react"

type Props = {
  skills: string []
}

const Skills = (props: Props) => {
  const { skills } = props
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  // when this component mounts, set isLoggedIn to true after 500ms
  useEffect(() => {
    setTimeout(() => setIsLoggedIn(true), 1500)
  }, [])
  
  return (
    <>
      <ul>
        {skills.map(skill => 
          <li key={skill}>{skill}</li>  
        )}
      </ul>
      {isLoggedIn ? <button>Start learning</button> :
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      }
    </>
  )
}

export default Skills