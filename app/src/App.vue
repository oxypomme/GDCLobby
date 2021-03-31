<template>
  <div id="app">
    <b-navbar variant="light">
      <b-navbar-brand>
        <router-link to="/" exact>GDCLobby</router-link>
      </b-navbar-brand>
    </b-navbar>
    <b-nav vertical variant="light" class="sidebar bg-light">
      <b-nav-item to="/" exact exact-active-class="active">
        <font-awesome-icon :icon="['fas', 'globe-americas']" /> Missions
      </b-nav-item>
      <b-nav-item to="/AAA" exact exact-active-class="active">
        <font-awesome-icon :icon="['fas', '']" /> Not Found
      </b-nav-item>
    </b-nav>
    <router-view class="main" />
  </div>
</template>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.sidebar {
  z-index: 1;
  position: absolute;
  width: 250px;
  margin-top: 51px;
  margin: 0;
  height: 100%;
  text-align: initial;
  border-right: 1px solid #e7e7e7;
}

.navbar a,
.sidebar a {
  color: #444444;
}

.navbar a:hover,
.sidebar a:hover {
  color: #5e5e5e;
  text-decoration: none;
}

.navbar,
.nav-link {
  border-bottom: 1px solid #e7e7e7;
}

.nav-link:hover,
.nav-link.active {
  background: #eeeeee;
}

.main {
  margin-left: 250px;
}
</style>
