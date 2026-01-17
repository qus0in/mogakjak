import { describe, it, expect } from 'vitest'
import { cn } from './utils'

describe('cn utility', () => {
    it('should merge tailwind classes correctly', () => {
        const result = cn('text-red-500', 'bg-blue-500')
        expect(result).toBe('text-red-500 bg-blue-500')
    })

    it('should handle conditional classes', () => {
        const result = cn('text-red-500', true && 'bg-blue-500', false && 'text-green-500')
        expect(result).toBe('text-red-500 bg-blue-500')
    })

    it('should resolve tailwind conflicts', () => {
        // twMerge handles this: last one wins
        const result = cn('text-red-500', 'text-blue-500')
        expect(result).toBe('text-blue-500')
    })
})
