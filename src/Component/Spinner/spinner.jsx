import { CircleLoader } from 'react-spinners'

const Spinner = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10vh auto',
        height: '100vh'
      }}
    >
      <CircleLoader color='#314F4F' loading={true} size={80} />
    </div>
  )
}

export default Spinner
