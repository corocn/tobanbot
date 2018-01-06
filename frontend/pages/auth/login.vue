<template>
  <div id="show-auth"/>
</template>

<script>
import { show } from '~/utils/auth'

export default {
  // middleware: 'anonymous',
  mounted () {
    show('show-auth')
  }
}
</script>
