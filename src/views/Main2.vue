<template>
  <div>
    <div id="navMenuDocumentation2" class="navbar-menu" v-bind:class="[isActive ? 'is-active' : '']" role="navigation">
      <div class="navbar-start" role="presentation">
        <router-link to="/main2/level1" class="navbar-item bd-navbar-item-videos" role="menuitem">序章</router-link>
        <router-link to="/main2/level2ing" class="navbar-item bd-navbar-item-videos" role="menuitem">第二章戰鬥中</router-link>
        <router-link to="/main2/level2" class="navbar-item bd-navbar-item-videos" role="menuitem">第二章戰前戰後</router-link>
        <router-link to="/main2/level1-5" class="navbar-item bd-navbar-item-videos" role="menuitem">第二章1~5</router-link>
        <router-link to="/main2/anniversary" class="navbar-item bd-navbar-item-videos" role="menuitem">週年慶劇情</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>



