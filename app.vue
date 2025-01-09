<template>
  <VApp>
    <VAppBar color="burnt_sienna">
      <template #prepend>
        <VAppBarNavIcon @click="isDrawerOpen = !isDrawerOpen" />
      </template>
      <VAppBarTitle>
        <div class="flex items-center">
          <NuxtLink class="font-bold" to="/">玖玖巴音效版</NuxtLink>
        </div>
      </VAppBarTitle>
    </VAppBar>

    <VNavigationDrawer v-model="isDrawerOpen">
      <VList>
        <VListItem
          v-for="link in links"
          :key="link.title"
          :href="link.url"
          target="_blank"
          class="d-flex items-center"
          color="burnt_sienna"
        >
          <template #prepend>
            <VIcon :color="link['icon-color']">{{ link.icon }}</VIcon>
          </template>
          <VListItemTitle>{{ link.title }}</VListItemTitle>
        </VListItem>
      </VList>

      <template #append>
        <VListItem
          to="/about"
          prepend-icon="mdi-information-outline"
          title="關於"
        />
      </template>
    </VNavigationDrawer>

    <VMain class="bg-burnt_sienna-200">
      <VContainer>
        <NuxtPage />
      </VContainer>
      <VFooter color="anti_flash_white">
        <VIcon>mdi-information-outline</VIcon>
      </VFooter>
    </VMain>
  </VApp>
</template>

<script setup lang="ts">
import links from '~/assets/links.json';
console.log(links);

const isDrawerOpen = ref(false);
</script>
