using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEndR.Api.DTOs.Auth
{
    public class UpdatePasswordDTO
    {
        [Required]
        [StringLength(
            128,
            ErrorMessage = "Current password can't be shorter than 8 digit and longer than 128 digit.",
            MinimumLength = 6
        )]
        public required string currentPassword { get; set; }

        [Required]
        [StringLength(
            128,
            ErrorMessage = "New password can't be shorter than 8 digit and longer than 128 digit.",
            MinimumLength = 6
        )]
        public required string newPassword { get; set; }
    }
}