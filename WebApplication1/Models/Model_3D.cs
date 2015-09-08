﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Model_Base
    {
        public int id { get; set; }
        public int [] WorkFlowState { get; set; }
        public string Name { get; set; }
        public string TypeFile { get; set; }
       
    }
    public class Model_3D : Model_Base
    {
       
        public byte[] OriginalModel3D { get; set; }

    }
    public class Model_2D : Model_Base
    {

        public byte[] OriginalModel2D { get; set; }
      

    }
}