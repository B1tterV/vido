<template>
  <button
    class="btn"
    :class="setClass"
    :type="type"
  >
    <slot>

    </slot>
  </button>
</template>

<script>
import '@/assets/btn.scss'

export default {
  name: 'Btn',
  props: {
    type: String,
    //Button type
    authorisation: Boolean,
    primary: Boolean,
    secondary: Boolean,
    search: Boolean,
    cancel: Boolean,
    reset: Boolean,
    save: Boolean,
    sidebarReset: Boolean,
    sidebarShow: Boolean,
    showMore: Boolean,
  },
  computed: {
    setClass() {
      const typeBtn = this.authorisation 
      ? 'authorisation'
      : this.primary
      ? 'primary'
      : this.secondary
      ? 'secondary'
      : this.search
      ? 'search'
      : this.cancel
      ? 'cancel'
      : this.reset
      ? 'reset'
      : this.save
      ? 'save'
      : this.sidebarReset
      ? 'sidebarReset'
      : this.sidebarShow
      ? 'sidebarShow'
      : this.showMore
      ? 'showMore'
      : ''

      return 'btn_' + typeBtn 

    }
  }
}
</script>