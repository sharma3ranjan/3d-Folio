import { Html, useProgress } from '@react-three/drei'

const Loader = () => {

  const { progress } = useProgress();
  return (
    <Html>
      <span className='canvas-load'></span>
      <p style={{
        fontSize: 18,
        color: '#f1f1f1',
        fontWeight: 600,
        marginTop: 40

      }}>{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader