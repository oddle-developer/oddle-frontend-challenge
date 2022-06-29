import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const useLoading = (): boolean => {
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }

    router.events.on('routeChangeStart', start)
    router.events.on('routeChangeComplete', end)
    router.events.on('routeChangeError', end)
    return () => {
      router.events.off('routeChangeStart', start)
      router.events.off('routeChangeComplete', end)
      router.events.off('routeChangeError', end)
    }
  }, [])

  return loading
}

export default useLoading
