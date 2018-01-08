<template>
  <div id="show-auth"/>
</template>

<script>
import { show } from '~/utils/auth'

export default {
  mounted () {
    show('show-auth')
  }
}
</script>
