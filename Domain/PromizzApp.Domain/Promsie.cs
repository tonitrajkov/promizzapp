﻿using System;

namespace PromizzApp.Domain
{
    public class Promsie
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public PromiseState State { get; set; }
        public User RequestedBy { get; set; }
        public string Color { get; set; }
        public DateTime EndDate { get; set; }
    }
}
