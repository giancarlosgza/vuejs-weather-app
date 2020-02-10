<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top d-none d-sm-none d-sm-block">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../src/assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="Vue Logo">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link to="/" class="nav-link">Weather</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">API</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
    <!-- BOTTOM NAVBAR FOR WEB -->
    <div class="bottom-nav mt-3 d-block d-sm-none">
      <div class="row text-center">
        <div class="col-6">
          <router-link to="/" class="active">
            <i class="material-icons" style="font-size: 32px">home</i><br>
            
          </router-link>
        </div>
        <div class="col-6">
          <router-link to="/about" class="">
            <i class="material-icons" style="font-size: 32px">cloud_download</i><br>
            
          </router-link>
        </div>
      </div>
    </div>
    <!-- END BOTTOM NAVBAR FOR WEB -->
  </div>
</template>

<script>

</script>

<style lang="scss">
  /////////////////////// - VARIABLES - ///////////////////////

  // background-color
  $bg-primary-light: #ffa689;
  $bg-primary: #ff815a;
  $bg-primary-dark: #ff6334;
  $bg-secondary: #ffab00;
  $bg-success-light: #cdffd6;
  $bg-warning-light: #fdfcb8;
  $bg-danger-light: #ffe3e3;
  $bg-white: #263238;
  $bg-dark: #263238;
  $bg-body: #000a12; 
  $bg-card: #424950;
  $bg-orange-gradient: linear-gradient(to right, #ff7878, #ff9c6b);
  $bg-purple-gradient: linear-gradient(to right, #aa99ff, #e09cff);
  $bg-blue-gradient: linear-gradient(to right, #4497f5, #75ddff);
  $bg-red-gradient: linear-gradient(to right, #f58080, #f5a1a1);
  // text-color
  $text-primary-light: #ffa689;
  $text-primary: #ff815a;
  $text-primary-dark: #ff6334;
  $text-secondary-light: #ffdc1c;
  $text-secondary: #ffab00;
  $text-secondary-dark: #fe7f00;
  // general
  $font-roboto: Roboto,
  'sans-serif';
  $font-poppins: Poppins,
  'sans-serif';
  $text-black: #ffffff;
  $text-white: #ffffff;
  $text-white50: #e0e0e0;
  $text-white80: #f5f5f5;
  // border-radius
  $border-radius-8: 8px;
  $border-radius-12: 12px;
  $border-radius-25: 25px;
  // elevation
  $md-elevation-0: none;
  $md-elevation-1: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14),
  0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  $md-elevation-2: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
  0px 2px 2px 0px rgba(0, 0, 0, 0.14),
  0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  $md-elevation-4: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  0px 4px 5px 0px rgba(0, 0, 0, 0.14),
  0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  $md-elevation-8: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
  0px 8px 10px 1px rgba(0, 0, 0, 0.14),
  0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  // transition
  $transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  /////////////////////// - COMPONENTS STYLES - ///////////////////////
  body {
    font-family: $font-roboto;
    color: $text-black;
    background: $bg-body !important;
  }

  .font-roboto {
    font-family: $font-roboto
  }

  .font-poppins {
    font-family: $font-poppins
  }

  .text-white50 {
    color: $text-white50;
  }

  .text-white80 {
    color: $text-white80;
  }

  .text-primary-light {
    color: $text-primary-light !important;
  }

  .text-primary {
    color: $text-primary !important;
  }

  .text-primary-dark {
    color: $text-primary-dark !important;
  }

  .text-secondary {
    color: $text-secondary !important;
  }

  .bg-primary-light {
    background-color: $bg-primary-light !important;
  }

  .bg-primary {
    background-color: $bg-primary !important;
  }

  .bg-primary-dark {
    background-color: $bg-primary-dark !important;
  }

  .bg-secondary {
    background-color: $bg-secondary !important;
  }

  .bg-success-light {
    background-color: $bg-success-light;
    color: #268c46;
  }

  .bg-warning-light {
    background-color: $bg-warning-light;
    color: #a73d00;
  }

  .bg-danger-light {
    background-color: $bg-danger-light;
    color: #a70c00;
  }

  .bg-card {
    background-color: $bg-card !important;
  }

  .bg-orange-gradient {
    background: $bg-orange-gradient;
  }

  .bg-purple-gradient {
    background: $bg-purple-gradient;
  }

  .bg-blue-gradient {
    background: $bg-blue-gradient;
  }

  .bg-red-gradient {
    background: $bg-red-gradient;
  }

  .text-wrap-primary {
    background-color: $bg-primary-light;
    color: $text-primary-dark;
    margin: 5px;
    padding-top: 5px;
    padding-bottom: 1px;
    border-radius: $border-radius-8;
  }

  .border-radius-8 {
    border-radius: $border-radius-8 !important;
  }

  .border-radius-12 {
    border-radius: $border-radius-12 !important;
  }

  .border-radius-25 {
    border-radius: $border-radius-25 !important;
  }

  .shadow-none {
    box-shadow: $md-elevation-0;
  }

  .navbar {
    box-shadow: $md-elevation-8;
    background-color: $bg-card;

    .nav-item .nav-link a {
      font-family: $font-poppins;
      color: $text-primary-light !important;
      text-transform: uppercase;
      font-size: 14px;
      text-decoration: none;

      &:hover {
        color: $text-primary !important;
      }

      &:focus {
        color: $text-primary-dark !important;
      }

    }

    .nav-link.active {
      color: $text-primary !important;
      font-weight: 500;
    }
  }

  .btn {
    background-color: $bg-white;
    border-radius: $border-radius-8;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 1.25px;
    transition: $transition;
    box-shadow: $md-elevation-2;

    &:hover {
      box-shadow: $md-elevation-4;
    }

    &.btn-primary {
      background-color: $bg-primary;
      border: $bg-primary;
      color: $text-white;

      &:hover {
        background-color: $bg-primary;
        border: $bg-primary;
        color: $text-white;
      }

      &:focus {
        background-color: $bg-primary-dark !important;
        border: $bg-primary-dark;
        color: $text-white;
      }
    }

    &.btn-primary-light {
      background-color: $bg-primary-light;
      border: $bg-primary-light;
      color: $text-primary-dark;

      &:hover {
        background-color: $bg-primary-light;
        border: $bg-primary-light;
        color: $text-primary-dark;
      }

      &:focus {
        background-color: $bg-primary-light !important;
        border: $bg-primary-light;
        color: $text-primary-dark;
      }
    }
  }

  .card {
    background-color: $bg-dark;
    box-shadow: $md-elevation-1;
    transition: $transition;
    border-radius: $border-radius-12;

    &:hover {
      box-shadow: $md-elevation-8;
    }

    .card-img-top {
      border-top-left-radius: $border-radius-8;
      border-top-right-radius: $border-radius-8;
    }
  }

  .form-control {
    border-radius: $border-radius-25;
  }

  .footer {
    background-color: $bg-primary;
    color: $text-white;
    flex-shrink: none;

    .span {
      color: $text-white !important;
    }
  }

  .horizontal-scroll>.row {
    overflow-x: auto;
    white-space: nowrap;
  }

  .horizontal-scroll>.row>.col-8 {
    display: inline-block;
    float: none;
  }

  .bottom-nav {
    background-color: $bg-card;
    color: #ffffff;
    padding: 8px;
    position: fixed;
    width: 100%;
    bottom: 0;
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    z-index: 999;
    border-top-left-radius: $border-radius-8;
    border-top-right-radius: $border-radius-8;
  }

  .bottom-nav a {
    color: #cececed3 !important;
    text-decoration: none;
  }

  .bottom-nav .active {
    color: #ffffff !important;
  }
</style>