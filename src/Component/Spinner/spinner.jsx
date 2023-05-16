import { BeatLoader } from 'react-spinners'

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
      <BeatLoader color='#0702f3' loading={true} size={60} />
    </div>
  )
}

export default Spinner
