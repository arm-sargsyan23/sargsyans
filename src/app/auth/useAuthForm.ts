import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useRef, useTransition } from 'react'
import type ReCAPTCHA from 'react-google-recaptcha'
import type { SubmitHandler, UseFormReset } from 'react-hook-form'

import { PAGE } from '@/config/public-page.config'

import type { IAuthData, IAuthForm } from './auth-form.types'
import { authService } from '@/services/auth.service'

export function useAuthForm(type: 'login' | 'register', reset: UseFormReset<IAuthForm>) {
  const router = useRouter()

  const [isPending, startTransition] = useTransition()

  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const { mutateAsync, isPending: isAuthPending } = useMutation({
    mutationKey: [type],
    mutationFn: (data: IAuthData) => authService.main(type, data, recaptchaRef.current?.getValue())
  })

  const onSubmit: SubmitHandler<IAuthForm> = async ({ email, password }) => {
    const token = recaptchaRef.current?.getValue()

    const { toast } = await import('react-hot-toast')
    if (!token) {
      toast.error('Pass the captcha!', { id: 'recaptcha' })
      return
    }

    toast.promise(mutateAsync({ email, password }), {
      loading: 'Loading...',
      success: () => {
        startTransition(() => {
          reset()
          router.push(PAGE.HOME)
        })
        return 'Success login!'
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      error: (e: any) => {
        if (axios.isAxiosError(e)) {
          return e.response?.data?.message
        }
      }
    })
  }

  const isLoading = isPending || isAuthPending

  return { onSubmit, isLoading, recaptchaRef }
}
