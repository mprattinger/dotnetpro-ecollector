using System;

namespace server.Models
{
    public class Link
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public KnowledgeEntry KnowledgeEntry { get; set; }
        public int KnoledgeEntryId { get; set; }
    }
}