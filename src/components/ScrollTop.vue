<template>
  <div>
    <img  @click="scrollTop" class="scrollTop" src="../assets/scrollTop.png" alt="">
  </div>
</template>

<script>
export default {
  methods: {
    scrollTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style>
.scrollTop{
  position: fixed;
  right: 0;
  bottom: 0;
  border: none;
  cursor: pointer;
  width: 50px;
}
</style>
