using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEndR.Api.DTOs.Order
{
 public class OrderDTO
    {
        [Required]
        public int OrderID { get; set; }

        [Required]
        public string OrderDate { get; set; }

        [Required]
        public string OrderStatus { get; set; } = "preparing";

        [Required]
        public decimal OrderTotal { get; set; }

        [Required]
        public string OrderInvoice { get; set; }
        public string? OrderTrace { get; set; }

        [Required]
        public AddressDTO Address { get; set; }

        [Required]
        public virtual ICollection<OrderItemDTO> OrderItems { get; set; }
    }
}