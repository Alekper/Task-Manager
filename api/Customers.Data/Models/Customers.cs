using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Customers.Data.Models
{
    public class Customer
    {
        public string FullName { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
        public string organizationName { get; set; }
        public string organizationAddress { get; set; }
        public string phoneNumber { get; set; }
        public string Mail { get; set; }
        public string Password { get; set; }
        public int Id { get; set; }

        //public int Amount { get; set; }
        //public string CardNumber { get; set; }
        //public int CVV { get; set; }
        //public string Date { get; set; }
    }
}
