<template>
  <div>
   <p>智现在，至未来</p>   
    <button @click="checkIn">打卡</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['roleIndex']),
  
  methods: {
    checkIn() {
      this.$store.commit('setRoleIndex', this.roleIndex + 1)
      
      this.$router.push('/role')
    }
  } 
}
</script>