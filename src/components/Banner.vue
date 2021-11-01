<template>
  <div class="feature-card">
     <router-link to="/movie/tt0409591">
      <img src="https://br.web.img3.acsta.net/pictures/16/04/11/16/56/089875.jpg" alt="Naruto poster" class="featured-img">
      <div class="detail">
        <h3>Naruto</h3>
        <p>Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage.</p>
      </div>
     </router-link>
   </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.feature-card {
    position: relative;

    .featured-img {
      display: block;
      width: 100%;
      height: 300px;
      object-fit: cover;

      position: relative;
      z-index: 0;
    }

    .detail{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.6);
      padding: 16px;
      z-index: 1;

      h3{
        color: white;
        margin-bottom: 16px;
      }

      p {
        color: #FFF;
      }
    }
}
</style>