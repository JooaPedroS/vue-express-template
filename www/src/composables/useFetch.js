import { ref } from 'vue'
import { apiFetch } from '@/services/api'

export function useFetch() {
    const data = ref(null)
    const error = ref(null)

    async function execute(path, options = {}) {
        data.value = null
        error.value = null

        try {
            data.value = await apiFetch(path, options)
        } catch (err) {
            error.value = err.message || 'Erro inesperado'
        }

        return { data, error }
    }

    return {
        data,
        error,
        execute,
    }
}
