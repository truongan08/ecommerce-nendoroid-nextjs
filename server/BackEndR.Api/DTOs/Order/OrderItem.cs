using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEndR.Api.DTOs.Order
{
    public class OrderItemDTO
    {
        [Required]
        public string Brand { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string ImageSrc { get; set; }

        [Required]
        public string ImageAlt { get; set; }

        [Required]
        public decimal Price { get; set; }

        [Required]
        public int Quantity { get; set; }

        public string? Color { get; set; }
        public string? Size { get; set; }
    }
}