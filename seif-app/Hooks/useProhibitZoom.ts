import { useEffect, useState } from "react"

const useProhibitZoom = () => {

  const [lastTouchEnd, setLastTouchEnd] = useState<number>(0)

  useEffect(() => {
    let element = document.body;
    if (element != null) {
      const handleTouchStart = (e: TouchEvent) => {
        if (e.touches.length > 1) {
          e.preventDefault()
        }
      }

      const handleTouchMove = (e: Event) => {
        e.preventDefault()
      }

      const handleTouchEnd = (e: TouchEvent) => {
        var now = (new Date()).getTime()
        if (now - lastTouchEnd <= 300) {
          e.preventDefault()
        }
        setLastTouchEnd(now)
      }

      element.addEventListener('touchstart', handleTouchStart)
      element.addEventListener('touchend', handleTouchEnd)
      element.addEventListener('touchMove', handleTouchMove)
      return () => {
        element.removeEventListener('touchstart', handleTouchStart)
        element.removeEventListener('touchend', handleTouchEnd)
        element.removeEventListener('touchMove', handleTouchMove)
      }
    }
  })
}

export default useProhibitZoom