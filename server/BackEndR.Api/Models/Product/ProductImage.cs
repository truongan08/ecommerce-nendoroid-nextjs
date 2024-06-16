using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace BackEndR.Api.Models.Product
{

public class ProductImage
{
    public int Id { get; set; }

    [Required]
    public string src { get; set; }

    [Required]
    public string alt { get; set; }

    public Product? Product { get; set; }
    public int ProductId { get; set; }
}
}