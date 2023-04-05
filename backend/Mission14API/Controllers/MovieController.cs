using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mission14API.Data;

namespace Mission14API.Controllers;

[ApiController]
[Route("[controller]")]
public class MovieController : ControllerBase
{
    private MovieDbContext context;

    public MovieController(MovieDbContext temp)
    {
        context = temp;
    }


    public IEnumerable<Movies> Get()
    {
        var x = context.Movies
            .Where(x => x.Edited == "Yes")
            .OrderBy(x => x.Title)
            .ToArray();

        return x;
    }
}

