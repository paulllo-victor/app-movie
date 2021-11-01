<template>
    <form @submit.prevent="searchMovies" class="search-box">
      <input type="text"  placeholder="What are you looking for?" v-model="search">
      <input type="submit" value="Search">
    </form>
</template>

<script>
export default {
    data () {
        return {
            search: ''
        }
    },
    methods: {
        searchMovies() {
            console.log(this.search);
            this.$emit('searchMovies',this.search)
        }
    }
}
</script>

<style lang="scss" scoped>
.search-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px;
    align-items: center;

    input{
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;

      &[type="text"]{
        width: 100%;
        color: #fff;
        background-color: #496583;
        font-size: 20px;
        padding: 10px 16px;
        border-radius: 8px;
        transition: 0.4s;

        &::placeholder {
          color: #f3f3f3
        }

        &:focus {
          box-shadow: 0px 3px 6px rgba(0,0,0,0.2);
        }
      }

      &[type="submit"] {
        width: 100%;
        max-width: 300px;
        background-color: #42B883;
        padding: 16px;
        border-radius: 8px;
        color: #fff;
        font-size: 20px;
        text-transform: uppercase;
        transition: 0.4s;
        margin-top: 16px;

        &:active {
          background-color: #3b8070;

        }
      }
    }
}
</style>