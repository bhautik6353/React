import React from 'react'


export default function Navbar() {
  return (
<div className='main'>
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand ms-5" href="#">
        <img src="https://preview.colorlib.com/theme/thepetcare/assets/img/logo/logo.png" alt="" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active fw-semibold me-4" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active fw-semibold me-4" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active fw-semibold me-4" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active fw-semibold me-4" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active fw-semibold me-4" href="#">Contact</a>
        </li>
       <button className='btn1 me-5'>Get Quote</button>
      </ul>
    </div>
  </div>
</nav>
</div>

  )
}
