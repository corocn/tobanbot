<template>
  <p>Signing off...</p>
</template>

<script>
import { unsetToken, logout } from '~/utils/auth'

export default {
  mounted () {
    unsetToken()
    logout()
  }
}
</script>
