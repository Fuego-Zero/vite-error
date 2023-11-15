<script setup lang="ts">
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'vue3-dnd'

import IconSvg from '@/IconSvg'
</script>

<template>
  <IconSvg name="tasks"></IconSvg>
  <DndProvider :backend="HTML5Backend"></DndProvider>
</template>

<style lang="scss" scoped></style>
