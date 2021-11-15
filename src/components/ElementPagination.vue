<template>
  <div class="pagination">
      <p>{{page}}</p>
  </div>
</template>

<script>
export default {
    props: {
        page:{
            type: Number,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.pagination{
    padding: 10px;
    border-radius: 2px;
    background-color: white;
    display: inline-block;
    cursor: pointer;

    p{
        font-weight: bolder;
    }
}
</style>