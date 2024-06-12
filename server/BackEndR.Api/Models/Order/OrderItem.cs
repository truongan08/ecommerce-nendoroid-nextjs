using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
 using System.ComponentModel.DataAnnotations;
using server.BackEndR.Order;

namespace BackEndR.Api.Models.Order
{
public class OrderItem
{
    public int Id { get; set; }

    [Required]
    public int OrderId { get; set; }

    [Required]
    public decimal Price { get; set; }

    [Required]
    public int Quantity { get; set; }

    public string? Color { get; set; }
    public string? Size { get; set; }

    public Product Product { get; set; }
    public int ProductId { get; set; }

    public Order Order { get; set; }
}
}