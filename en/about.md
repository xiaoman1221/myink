---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/xiaoman1221.png',
    name: 'Jiuqi Man',
    title: 'xiaoman1221',
    links: [
      { icon: 'github', link: 'https://github.com/xiaoman121' },
      { icon: 'twitter', link: 'https://twitter.com/xiaoman1221' },
      { icon: 'wordpress', link: 'https://www.manjiuqi.com/' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      About Me
    </template>
    <template #lead>
        My name is JiuqiMan,Nice to meet you
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>