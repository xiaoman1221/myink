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
    title: '小满1221',
    links: [
      { icon: 'github', link: 'https://github.com/xiaoman1221' },
      { icon: 'twitter', link: 'https://twitter.com/xiaoman1221' },
      { icon: 'wordpress', link: 'https://www.manjiuqi.com/' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      关于我
    </template>
    <template #lead>
        小满，是个人
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>