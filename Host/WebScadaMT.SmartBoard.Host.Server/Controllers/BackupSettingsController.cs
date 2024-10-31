using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using WebScadaMT.SmartBoard.Host.Server;

namespace WebScadaMT.SmartBoard.Host.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BackupSettingsController : ControllerBase
    {
    
      [HttpGet]
        public IActionResult GetBackupSettings()
        {
            var backupSettings = new
            {
                backupFrequency = "daily",
                backupTime = "02:00",
                storageLocation = "/backups/",
                retentionPeriodInDays = 30
            };

            return Ok(backupSettings);
        }
    }
}
