using Customers.Data.Models;
using Customers.Data.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using System.Net;

namespace WebApplication1.Controllers
{
    [Route("api/customer-list")]
    [ApiController]
    public class CustomerController1 : ControllerBase
    {
        


        private CustomerRepository customers = new CustomerRepository();

        [HttpGet]
        public ActionResult<IEnumerable<Customer>> GettAllCustomers()
        {
            return customers.GetAllCustomers();
        }
        [HttpGet("{id}")]
        public ActionResult<Customer> GetCustomer(int id)

        {
            var customer = customers.GetCustomer(id);
                if (customer == null)
            {
                return NotFound();

            }


            return customer; 

        }

        [HttpPost]
        public IActionResult Create(Customer customer)
        {
            CustomerRepository.Add(customer);
            return CreatedAtAction(nameof(Create), new { id = customer.Id }, customer);

        }

         
    }
}
