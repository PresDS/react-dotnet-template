function App() {
  const apiUrl = import.meta.env.VITE_API_URL;

  async function handlePing() {
    try {
      const response = await fetch(`${apiUrl}/test`);
      if(!response.ok) {
        throw Error('Something went wrong', response)
      }
      const responseData = await response.json();
      console.log('responseData', responseData);

    } catch (error) {
      console.error(error)
    }

  }

  async function handleGreeting() {
    try {

      const requestBody = { 
        name: "Preston"
      };

      const response = await fetch(`${apiUrl}/test`, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-type": "application/json"
        }
        
      });

      if(!response.ok) {
        throw Error('Something went wrong', response)
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
      <button onClick={handlePing}>Ping</button>
      <button onClick={handleGreeting}>Greeting</button>
    </>
  )
}

export default App
