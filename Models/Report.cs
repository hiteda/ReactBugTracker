using System;
using System.ComponentModel.DataAnnotations;

namespace BugTrackerReact.Models
{
    public class Report
    {
        [Key]
        public long Id { get; set; }
        [Required]
        public string Summary { get; set; }
        public string Details { get; set; }
        public string HowFound { get; set; }
        public string Severity { get; set; }
        //public long CreatedBy { get; set; }
        //public long AssignedTo { get; set; }
        public DateTime DateCreated { get; }
        public DateTime DateUpdated { get; set; }

        public Report()
        {
            this.DateCreated = DateTime.Now;
            this.DateUpdated = DateTime.Now;
        }
    }
}
