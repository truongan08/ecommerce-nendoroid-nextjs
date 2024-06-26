using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace BackEndR.Api.DTOs
{
    public class UserDTO
    {
        [Required]
        public string UserID { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Role { get; set; }
        public AddressDTO? Address { get; set; }
    }

}