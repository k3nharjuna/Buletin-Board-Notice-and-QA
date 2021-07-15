<template>
  <div class="">
    <Navbar />
    <div class="container">
      <div class="my-5">
        <HeadNoticeCard title="Latest Notice"/>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Navbar from '@/components/Navbar.vue'
  import HeadNoticeCard from '@/components/HeadNoticeCard.vue'
  export default {
    name: 'Home',
    components: {
      Navbar,
      HeadNoticeCard
    }
  }
</script>
