using Customers.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Customers.Data.Interfaces
{
    public interface CustomersInterface
    {
        List<Customer> GetAllCustomers();
        Customer GetCustomer(int id);
    }
}
