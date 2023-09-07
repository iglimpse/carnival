<template>
  <div >
    <img :src="roleImage" height="100" width="90"/>
  <p>  {{roleText}}</p>
    <h3>请开始你的挑战</h3>
    </div>  
</template>

<script>
import { mapState } from 'vuex'


export default {


  data() {
    return {
      timeout: null ,
      roleImages: {
        '角色1': 'role1.png',
        '角色2': 'role2.png',
        '角色3': 'role3.jpg',
        '角色4': 'role4.jpg',
        '角色5': 'role5.jpg'  
      }
    }
  },
  
  computed: {
    ...mapState(['roleIndex']),
    
    roleText() {
      const name = '角色' + (this.roleIndex % 5 + 1)  
      return `Hi,你来了,${name}` 
    },
    roleImage() {
      return this.roleImages[this.roleText.split(',')[2]] 
    },
  },

  
  created() {
    this.timeout = setTimeout(() => {
      this.$router.push('/')
    }, 4000)
  },
  
  beforeDestroy() {
    clearTimeout(this.timeout) 
  }
}
</script>