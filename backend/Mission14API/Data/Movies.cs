using System.ComponentModel.DataAnnotations;
namespace Mission14API.Data
{
	public class Movies
	{
		[Key]
		[Required]
		public int movieID { get; set; }

		public string? category { get; set; }
		public string? title { get; set; }
        public double? year { get; set; }
        public string? director { get; set; }
        public string? rating { get; set; }
        public string? lentTo { get; set; }
        public string? notes { get; set; }
        public string? edited { get; set; }
	
	}
}

