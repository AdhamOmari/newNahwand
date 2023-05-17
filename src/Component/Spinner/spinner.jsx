import { CircleLoader } from 'react-spinners'

const Spinner = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <CircleLoader color='#AB6E15' loading={true} size={60} />
    </div>
  )
}

export default Spinner
