using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEndR.Api.DTOs.Product
{
   public class ProductDTO
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Brand { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Src { get; set; }

        [Required]
        public string Alt { get; set; }

        [Required]
        public decimal Price { get; set; }

        public decimal? DiscountPrice { get; set; }

        public string? Color { get; set; }

        [Required]
        public string Date { get; set; }

        [Required]
        public string Slug { get; set; }

        [Required]
        public bool IsFavorite { get; set; } = false;

        [Required]
        public int Quantity { get; set; }
    }
}