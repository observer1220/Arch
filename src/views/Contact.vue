<template>
  <div class="contact">
    <!-- 使用iframe將Google表單鑲入HTML網站中 -->
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSekAS3ym7uppdbaXopIGWxL_S5v6B_37H4kzbrAWZ270PH6fw/viewform?embedded=true"
    width="100%" height="939" scrolling="no" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
  </div>
</template>

<script>
export default {}
</script>
<style  lang="scss">
.contact{
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  margin-top:90px;
  form{
    fieldset{
      margin-top: 90px;
      display: flex;
      flex-direction: column;
    }
  }
}
@media (min-width:320px) and (max-width:767px) {
  .contact{
    margin-top: 140px;
  }
}
</style>
