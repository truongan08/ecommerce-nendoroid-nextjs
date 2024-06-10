using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEndR.Api.Models
{
    public class User : IdentityUser
{
    public Address? Address { get; set; }
}
}