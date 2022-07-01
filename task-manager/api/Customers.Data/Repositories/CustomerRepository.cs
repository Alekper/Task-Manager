using Customers.Data.Interfaces;
using Customers.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Customers.Data.Repositories
{
    public class CustomerRepository : CustomersInterface
    {
        static List<Customer> Customers { get; } 
       
        static CustomerRepository()
        {
            Customers = new List<Customer>
            {
                    //new Customer {Id=1, FullName = "Chester Bennington", Amount = 420, CardNumber="0000000000000000", CVV=911, Date="20/04"},
                    //new Customer {Id=2, FullName = "Oliver Sykes", Amount = 987, CardNumber="00001111222233334444", CVV=123, Date="11/09"},
                    //new Customer {Id=3, FullName = "Kurt Cobain", Amount = 1994, CardNumber="0123456789109876", CVV=111, Date="05/04"},
                    //new Customer {Id=4, FullName = "Marilyn Manson", Amount = 420, CardNumber="8765432112345678", CVV=876, Date="31/12"},
                    //new Customer {Id=5, FullName = "David  Gilmour", Amount = 420, CardNumber="1234567812345678", CVV=980, Date="28/02"},

                new Customer {Id=1, FullName="Oliver Sykes", Password = "olly911", Mail = "oliver@gmail.com"},
                new Customer {Id=2, FullName="Chester Bennington", Password = "chester069", Mail = "chester@gmail.com"},
                new Customer {Id=3, FullName="Kurt Cobain", Password = "kurt420", Mail = "kurt@gmail.com"}

            };
        }
        public List<Customer> GetAllCustomers()
        {
            return Customers;
        }
        public Customer GetCustomer(int id)
        {
            return Customers.FirstOrDefault(x => x.Id == id);
    }
        static int nextId = 4;
        public static void Add(Customer customer)
        {

            customer.Id = nextId++;
            Customers.Add(customer);
        }
      




    }

}
