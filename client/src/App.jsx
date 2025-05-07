function App() {

  async function handleClick() {
    try {
      const response = await fetch('http://localhost:5016/weatherforecast');
      if(!response.ok) {
        throw Error('Bad Request :(')
      }
      const responseData = await response.json();
      console.log('responseData', responseData);
      
    } catch (error) {
      console.error(error)
    }

  }

  return (
    <>
      <h1>React with ASP.NET</h1>
      <button onClick={handleClick}>Ping</button>
    </>
  )
}

export default App
