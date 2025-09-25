function App() {
  console.log('App component rendering...')

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h1 style={{ color: '#333', fontSize: '32px', textAlign: 'center' }}>
        🎉 Wearly Documentation Site Test
      </h1>
      <p style={{ color: '#666', fontSize: '18px', textAlign: 'center', marginTop: '20px' }}>
        If you can see this, the basic React app is working!
      </p>
      <div style={{
        backgroundColor: '#ff6a1f',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '8px',
        display: 'inline-block',
        margin: '20px auto',
        display: 'flex',
        justifyContent: 'center'
      }}>
        Test Button
      </div>
    </div>
  )
}

export default App