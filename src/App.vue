<template>
  <div>
    <b-navbar style="background-color: chartreuse">
      <template slot="start">
        <b-navbar-item href="#">
          <router-link to="/main2" class="navbar-item bd-navbar-item-videos" role="menuitem">第二部劇情</router-link>
        </b-navbar-item>
        <b-navbar-item href="#">
          <router-link to="/calculation" class="navbar-item bd-navbar-item-videos" role="menuitem">兄貴材料目標計算機</router-link>
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="section">
      <router-view/>
    </div>
  </div>
</template>

<style>
</style>
