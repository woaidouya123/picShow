<template>
  <div class="hello">
    <img v-for="album in albumList" :src="album.url" :key="album.url" />
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from '@vue/runtime-core';
import { queryAllAlbum } from '@/api';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    let data = reactive({
      albumList: [],
    })
    onMounted(() => {
      queryAllAlbum().then(res => {
        data.albumList = res.data.slice(0, 100).map(v => ({
          ...v,
          url: `http://localhost:8088/pic?url=${v.url}`
        }));
      })
    })
    return {
      ...toRefs(data),
    }
  }
}
</script>
<style scoped>
</style>
