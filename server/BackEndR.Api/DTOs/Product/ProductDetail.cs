using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEndR.Api.DTOs.Product
{
 public class ProductDetailsDTO
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Brand { get; set; }

        [Required]
        public string Name { get; set; }

        public string? Desc { get; set; }

        [Required]
        public decimal Price { get; set; }

        public decimal? DiscountPrice { get; set; }

        [Required]
        public string Slug { get; set; }

        [Required]
        public string Category { get; set; }

        [Required]
        public string Subcategory { get; set; }

        public List<ProductVariantDTO>? Variants { get; set; }

        public List<ProductImageDTO>? Images { get; set; }

        public List<ProductSimilarDTO>? SimilarProducts { get; set; }
    }
}