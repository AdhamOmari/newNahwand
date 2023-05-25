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
      <CircleLoader color='#425559' loading={true} size={120} />
    </div>
  )
}

export default Spinner
