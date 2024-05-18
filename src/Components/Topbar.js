import React from 'react'
import { Link } from 'react-router-dom'

export default function Topbar() {
  return (
    <>
    
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
       
       <Link class="navbar-brand ps-3" href="index.html">Start Bootstrap</Link>
     
       <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
     
       <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
           <div class="input-group">
               <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
               <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
           </div>
       </form>
      
       <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
           <li class="nav-item dropdown">
               <Link class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></Link>
               <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                   <li><Link class="dropdown-item" href="#!">Settings</Link></li>
                   <li><Link class="dropdown-item" href="#!">Activity Log</Link></li>
                   <li><hr class="dropdown-divider" /></li>
                   <li><Link class="dropdown-item" href="#!">Logout</Link></li>
               </ul>
           </li>
       </ul>
   </nav>
    </>
  )
}
