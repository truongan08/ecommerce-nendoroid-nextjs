using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace server.BackEndR.Models;

namespace BackEndR.Api.Models.Category
{


public class Category
{
    public int Id { get; set; }
    public string Name { get; set; }

    public List<Product>? Products { get; set; }
}
}