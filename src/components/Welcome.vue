<template>
  <div class="welcome-page" :class="{ 'flash-animation': isFlashing }">
    <p class="title">“智现在，至未来” 嘉年华</p>
    <div
        tabindex="0"
        style="outline: none;"
        @keyup="handleKey"
        ref="keyListener"
        @click="startTyping"
    >
      <span class="large-text">请刷卡!</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      isFlashing: false,
      lastRoute: null,
      isNavigating: false, // 添加一个状态标志来表示是否正在导航
    };
  },

  computed: mapState(['roleIndex']),

  methods: {
    handleKey(event) {
      if (event.key !== null && !this.isNavigating) {
        const targetRoute = '/role';

        if (this.$route.path !== targetRoute) {
          this.isNavigating = true; // 标记为正在导航

          this.isFlashing = true;
          this.$store.commit('setRoleIndex', this.roleIndex + 1);
          setTimeout(() => {
            this.isFlashing = false;
            this.$router.push(targetRoute);
            this.isNavigating = false; // 导航完成后取消导航标志
          }, 1000);
        }
      }
    },

    startTyping() {
      this.$refs.keyListener.focus();
    },
  },

  mounted() {
    this.startTyping();
  },
}
</script>




<style scoped>
.welcome-page {
  text-align: center;
  margin-top: 100px;
}

.title {
  font-size: 32px;
  font-weight: bold;
  margin-top: 200px;
  margin-bottom: 300px;
}

.large-text {
  font-size: 30px; /* 设置文字的大点尺寸 */
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