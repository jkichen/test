<template>
  <div class="top">
    <div class="left">
      <span class="lbtn" @click="goHome">首页</span>
    </div>
    <div class="center">
      <div class="title">智慧旅游可视化大数据平台</div>
    </div>
    <div class="right">
      <span class="rbtn">统计报告</span>
      <span class="time">当前时间:{{ time }}</span>
    </div>
  </div>
</template>
<script setup lang="ts" name="Top">
import { useRouter } from 'vue-router'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import moment from 'moment'
// 存储当前时间
let time = ref<string>(moment().format('YYYY年MM月DD日 hh:mm:ss'))
let timer = ref(0)
const $router = useRouter()
// 按钮的点击回调
const goHome = () => {
  $router.push('/home')
}
onMounted(() => {
  timer.value = setInterval(() => {
    time.value = moment().format('YYYY年MM月DD日 hh:mm:ss')
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(timer.value)
})
</script>
<style scoped lang="scss">
.top {
  width: 100%;
  height: 40px;
  display: flex;

  .left {
    flex: 1.5;
    background: url(../../images/dataScreen-header-left-bg.png) no-repeat;
    background-size: cover;

    .lbtn {
      float: right;
      width: 100px;
      height: 40px;
      background: url(../../images/dataScreen-header-btn-bg-l.png) no-repeat;
      background-size: cover;
      text-align: center;
      line-height: 40px;
      color: #29fcff;
      font-size: 20px;
    }
  }
  .center {
    flex: 2;

    .title {
      width: 100%;
      height: 74px;
      background: url(../../images/dataScreen-header-center-bg.png) no-repeat;
      background-size: 100% 100%;
      text-align: center;
      line-height: 74px;
      color: #29fcff;
      font-size: 30px;
    }
  }
  .right {
    flex: 1.5;
    background: url(../../images/dataScreen-header-left-bg.png) no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .rbtn {
      width: 150px;
      height: 40px;
      background: url(../../images/dataScreen-header-btn-bg-r.png) no-repeat;
      background-size: 100% 100%;
      text-align: center;
      line-height: 40px;
      color: #29fcff;
    }

    .time {
      color: #29fcff;
      font-size: 20px;
      margin-right: 30px;
    }
  }
}
</style>
