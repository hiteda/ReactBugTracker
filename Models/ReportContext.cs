using Microsoft.EntityFrameworkCore;

namespace BugTrackerReact.Models
{
    public class ReportContext : DbContext
    {
        public ReportContext(DbContextOptions<ReportContext> options)
            : base(options)
        {
        }

        public DbSet<Report> BugReports { get; set; }
    }
}
