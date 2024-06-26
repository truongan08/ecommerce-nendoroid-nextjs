using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace BackEndR.Api.Models.Order
{
public class Order
{
    [Key]
    public int Id { get; set; }
    public string OrderDate { get; set; }
    public decimal OrderTotal { get; set; }
    public string OrderStatus { get; set; } = "preparing";
    public string? OrderTrace { get; set; }
    public string OrderInvoice { get; set; }

    public string UserID { get; set; }
    public User User { get; set; }

    public int AddressID { get; set; }
    public Address Address { get; set; }

    public List<OrderItem> OrderItems { get; set; }
}
}