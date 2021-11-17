<template>
  <div class="txt-c">
    homeindex
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'homeIndex',
  data () {
    return {

    }
  },
  components: {},
  computed: {

  },
  methods: {
    ...mapActions([
      'handleLogin'
    ])
  }
}
</script>

<style lang="scss" scoped>
</style>
