import { onMounted } from 'vue'

export function useFocus() {
  onMounted(() => {
    const firstFocusable = document.querySelector<HTMLElement>(
      'input, button, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (firstFocusable) firstFocusable.focus()
  })
}
