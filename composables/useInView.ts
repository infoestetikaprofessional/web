export function useInView(options?: IntersectionObserverInit) {
  const target = ref<HTMLElement>()
  const isInView = ref(false)
  let observer: IntersectionObserver | undefined
  let timeoutId: ReturnType<typeof setTimeout> | undefined

  onMounted(() => {
    if (!target.value) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      isInView.value = true
      return
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isInView.value = true
          observer?.disconnect()
          clearTimeout(timeoutId)
        }
      },
      { threshold: 0.1, ...options }
    )

    observer.observe(target.value)

    // Safety fallback: ensure content is never permanently hidden
    timeoutId = setTimeout(() => {
      if (!isInView.value) {
        isInView.value = true
        observer?.disconnect()
      }
    }, 3000)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    clearTimeout(timeoutId)
  })

  return { target, isInView }
}
