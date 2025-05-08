using Microsoft.AspNetCore.Mvc;


[ApiController]
[Route("[controller]")] // By default gets the name of our controller
public class TestController : ControllerBase
{
    [HttpGet]
    public IActionResult Get() => Ok(new { message = "pong" });

    [HttpPost]
    public IActionResult SayHello(object message) {
        Console.WriteLine(message);
        return Ok(new { message });
    } 
}


