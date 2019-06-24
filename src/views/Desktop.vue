<template>
  <div class="desktop">
    <p>We are in desktop</p>
    <component v-bind:is="component"></component>
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from '@/desktop-landing/Landing'

import Q1 from '@/desktop-question/Q1'
import Q2 from '@/desktop-question/Q2'
import Q3 from '@/desktop-question/Q3'
import Q4 from '@/desktop-question/Q4'
import Q5 from '@/desktop-question/Q5'
import Q6 from '@/desktop-question/Q6'
import Q7 from '@/desktop-question/Q7'
import Q8 from '@/desktop-question/Q8'

export default {
  name: 'home',
  components: {
    'landing': Landing,

    'q1':Q1,
    'q2':Q2,
    'q3':Q3,
    'q4':Q4,
    'q5':Q5,
    'q6':Q6,
    'q7':Q7,
    'q8':Q8
  },
  data(){
    return {
      component: 'landing'
    }
  }
}
</script>
