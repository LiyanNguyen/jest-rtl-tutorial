type Props = {
  name?: string
}

const Greet = (props: Props) => {
  const { name } = props
  return (
    <div>Hello {name}</div>
  )
}

export default Greet