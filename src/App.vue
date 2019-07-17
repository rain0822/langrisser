<template>
  <div class="section">
    <div id="navMenuDocumentation" class="navbar-menu" v-bind:class="[isActive ? 'is-active' : '']" role="navigation">
      <div class="navbar-start" role="presentation">
        <router-link to="/main2" class="navbar-item bd-navbar-item-videos" role="menuitem">第二部劇情</router-link>
        <router-link to="/calculation" class="navbar-item bd-navbar-item-videos" role="menuitem">兄貴材料目標計算機</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>



<style>
</style>
