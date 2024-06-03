namespace server.Controllers;
public class AuthController : BaseController {
   private readonly UserManager<User> userManager;
    private readonly RoleManager<IdentityRole> roleManager;
    private readonly IConfiguration _configuration;

    public AuthController(
        UserManager<User> userManager,
        RoleManager<IdentityRole> roleManager,
        IConfiguration configuration
    )
    {
        this.userManager = userManager;
        this.roleManager = roleManager;
        _configuration = configuration;
    }
}