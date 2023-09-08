<template>

  <div class="welcome-page" :class="{ 'flash-animation': isFlashing }">
   <p class="title">“智现在，至未来”  嘉年华</p>   
    <button @click="checkIn" class="check-in-button">请刷卡</button>
   
  </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      isFlashing: false, 
    };
  },

  computed: mapState(['roleIndex']),
  
  methods: {
    checkIn() {
      this.isFlashing = true; 
      this.$store.commit('setRoleIndex', this.roleIndex + 1)
      
     // 增加页面跳转之前的延迟时间
    setTimeout(() => {
      this.isFlashing = false; // 停止闪烁动画
      this.$router.push('/role');
    }, 1000); // 增加到1秒或更长的时间
    }
  } 
}
</script>

<style scoped>
.welcome-page {
  text-align: center;
  margin-top: 100px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 300px;
}

.check-in-button {
  background-color: #007bff; 
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.check-in-button:hover {
  background-color: #0258b5; 
}
.flash-animation {
  animation: flash 1s infinite alternate; 
}

@keyframes flash {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>