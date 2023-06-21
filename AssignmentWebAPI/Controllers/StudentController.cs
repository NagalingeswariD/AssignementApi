using AssignmentWebAPI.Model;
using Microsoft.AspNetCore.Mvc;

namespace AssignmentWebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentController : ControllerBase
    {
        

        private readonly ILogger<StudentController> _logger;

        public StudentController(ILogger<StudentController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetStudent")]
        public IEnumerable<Student> Get()
        {
            return new List<Student>()
            {
                new Student()
                {
                    Name="Alice",
                    Age=20,
                    Hobbies=new List<string>(){ "reading", "swimming", "coding" }

                },
                new Student()
                {
                    Name="Bob",
                    Age=22,
                    Hobbies=new List<string>(){ "painting", "dancing", "singing" }

                }
            };
        }
    }
}