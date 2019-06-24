<template>
  <div class="mobile">
    <p>We are in mobile</p>
    <component v-bind:is="component"></component>
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from '@/mobile-landing/Landing'

import Q1 from '@/mobile-question/Q1'
import Q2 from '@/mobile-question/Q2'
import Q3 from '@/mobile-question/Q3'
import Q4 from '@/mobile-question/Q4'
import Q5 from '@/mobile-question/Q5'
import Q6 from '@/mobile-question/Q6'
import Q7 from '@/mobile-question/Q7'
import Q8 from '@/mobile-question/Q8'

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
