import { computed, defineComponent, type PropType, toRefs } from 'vue'

import tasks from './images/tasks.svg'
import type { IconSvgName } from './types'

export default defineComponent({
  name: 'IconSvg',
  props: {
    /**
     * 高优先级
     */
    name: {
      type: String as PropType<IconSvgName>,
      default: ''
    },
    /**
     * 低优先级
     *
     * @description 当name未传入或未匹配时生效，建议只是传入svg文件路径
     */
    src: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 50
    }
  },
  setup(props) {
    const { name, size, src } = toRefs(props)

    const svg = computed(() => {
      let svg

      switch (name.value) {
        case 'tasks':
          svg = tasks
          break

        default:
          svg = src.value
      }

      return svg
    })

    return () => (
      <img
        style={{
          width: size.value + 'px'
        }}
        src={svg.value}
      />
    )
  }
})
