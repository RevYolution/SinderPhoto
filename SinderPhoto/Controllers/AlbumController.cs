﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SniderPhoto.Controllers
{
    public class AlbumController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Landscapes()
        {
            return View();
        }

        public IActionResult RealEstate()
        {
            return View();
        }

        public IActionResult Portraits()
        {
            return View();
        }
    }
}
