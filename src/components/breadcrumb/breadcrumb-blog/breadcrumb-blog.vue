<template>
  <section class="breadcrumb-area pb-0 overlay-dark d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Breamcrumb Content -->
          <div class="breadcrumb-content text-center">
            <h2 class="m-0">Blog</h2>
            <ol class="breadcrumb d-flex justify-content-center">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item"><a href="#">Community</a></li>
              <li class="breadcrumb-item active">Blog</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="button-group">
        <a class="btn btn-bordered-white" href="/explore-one"
          ><i class="icon-rocket mr-2"></i>Explore</a
        >
        <a
          class="btn btn-bordered-white"
          @click="$router.push({ name: 'create-blog' })"
          ><i class="icon-note mr-2"></i>Create</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.button-group {
  display: flex;
  justify-content: center;
}
</style>
