using System.ComponentModel.DataAnnotations;
namespace Mission14API.Data
{
	public class Movies
	{
		[Key]
		[Required]
		public int MovieID { get; set; }

		public string? Category { get; set; }
		public string? Title { get; set; }
        public double? Year { get; set; }
        public string? Director { get; set; }
        public string? Rating { get; set; }
        public string? LentTo { get; set; }
        public string? Notes { get; set; }
        public string? Edited { get; set; }
	
	}
}

