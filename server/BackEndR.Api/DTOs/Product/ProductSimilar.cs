using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEndR.Api.DTOs.Product
{
    public class ProductSimilarDTO
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Src { get; set; }

        [Required]
        public string Alt { get; set; }

        [Required]
        public string Slug { get; set; }
    }
}