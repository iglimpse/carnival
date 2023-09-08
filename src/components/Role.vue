<template>


  <div class="role-page" :class="{ 'flash-animation': isFlashing }">
    <img :src="roleImage" height="100" width="90" />
  <h3 class="role-text">  {{roleText}}</h3>
    <h2 class="challenge-title">请开始你的挑战!</h2>
   
    </div>  

</template>

<script>
import { mapState } from 'vuex'


export default {


  data() {
    return {
      timeout: null ,
      roleImages: {
        '小来': '小来.png',
        '小未': '小未.png',
        '小现': '小现.png',
        '小在': '小在.png',
        '小智': '小智.png'  
      },
      roleNames: ['小来', '小未', '小现', '小在', '小智'],
      isFlashing: false, 
    }
  },
  
  computed: {
    ...mapState(['roleIndex']),
    
    roleName() {
    return this.roleNames[this.roleIndex % 5] 
  },

  roleText() {
    return `hi! 你来了,${this.roleName}`
  },
  roleImage() {
  return this.roleImages[this.roleName]
}
  },

  
  created() {
    this.isFlashing = true; 
    this.timeout = setTimeout(() => {
      this.$router.push('/')
    }, 4000)
  },
  
  beforeDestroy() {
    clearTimeout(this.timeout) 
  }
}
</script>


<style scoped>
.role-page {
  text-align: center;
  margin-top: 100px;
}


.role-text {
  font-size: 24px;
  margin-bottom: 200px;
}

.challenge-title {
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
}
.flash-animation {
  animation: flash 2s infinite alternate; 
}

@keyframes flash {
  100% {
    opacity: 1;
  }
  0% {
    opacity: 0;
  }
}
</style>