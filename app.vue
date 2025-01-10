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

    <VNavigationDrawer v-model="isDrawerOpen" class="drawer">
      <VList class="flex-1">
        <template v-for="(linkGroup, index) in links">
          <VListItem
            v-for="link in linkGroup"
            :key="link.title"
            :href="link.url"
            target="_blank"
            class="d-flex items-center"
            color="burnt_sienna"
          >
            <template #prepend>
              <div class="mr-8">
                <template v-if="link.icon?.name">
                  <VIcon :color="link.icon?.color" width="24" height="24">
                    {{ link.icon?.name }}
                  </VIcon>
                </template>
                <template v-else>
                  <div class="text-2xl">{{ link.icon?.emoji }}</div>
                </template>
              </div>
            </template>
            <VListItemTitle>{{ link.title }}</VListItemTitle>
          </VListItem>

          <VDivider v-if="index !== links.length - 1" class="border-rose-950" />
        </template>
      </VList>

      <template #append>
        <VListItem
          to="/about"
          prepend-icon="mdi-text-box-search"
          title="關於"
        />
      </template>
    </VNavigationDrawer>

    <VMain class="bg-burnt_sienna-200">
      <div class="flex flex-col h-full">
        <VContainer class="flex-1">
          <NuxtPage />
        </VContainer>

        <div>
          <VFooter color="anti_flash_white">
            <VIcon>mdi-information-outline</VIcon>
          </VFooter>
        </div>
      </div>
    </VMain>
  </VApp>
</template>

<script setup lang="ts">
import { links } from '~/assets/links';

const isDrawerOpen = ref(false);
</script>

<style scoped>
.drawer:deep(.v-navigation-drawer__content) {
  @apply flex flex-1;
}
</style>
