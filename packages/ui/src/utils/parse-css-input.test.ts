import { describe, it, expect, vi } from 'vitest'
import { parseShadowVariables, parseCssInput } from './parse-css-input'

describe('parse-css-input', () => {
  describe('parseShadowVariables', () => {
    it('should extract shadow variables correctly from valid CSS', () => {
      const cssContent = `
        :root {
          --shadow-color: hsl(0 0% 0%);
          --shadow-opacity: 0.2;
          --shadow-blur: 5px;
          --shadow-spread: 2px;
          --shadow-offset-x: 1px;
          --shadow-offset-y: 1px;
        }
        .dark {
          --shadow-color: hsl(0 0% 100%);
          --shadow-opacity: 0.4;
        }
      `

      const result = parseShadowVariables(cssContent)

      expect(result.lightShadows['shadow-color']).toBe('hsl(0 0% 0%)')
      expect(result.lightShadows['shadow-opacity']).toBe('0.2')
      expect(result.darkShadows['shadow-color']).toBe('hsl(0 0% 100%)')
      expect(result.darkShadows['shadow-opacity']).toBe('0.4')
      expect(result.darkShadows['shadow-blur']).toBe('3px') // Default
    })

    it('should handle complex shadow extraction (e.g. --shadow-sm) with hsl', () => {
      const cssContent = `
        :root {
          --shadow-sm: 0 1px 2px 0 hsl(0 0% 0% / 0.05);
        }
      `

      const result = parseShadowVariables(cssContent)

      expect(result.lightShadows['shadow-offset-x']).toBe('0')
      expect(result.lightShadows['shadow-offset-y']).toBe('1px')
      expect(result.lightShadows['shadow-blur']).toBe('2px')
      expect(result.lightShadows['shadow-spread']).toBe('0')
      expect(result.lightShadows['shadow-color']).toBe('hsl(0 0% 0%)')
      expect(result.lightShadows['shadow-opacity']).toBe('0.05')
    })

    it('should handle rgba in complex shadows', () => {
      const cssContent = `
        :root {
          --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }
      `

      const result = parseShadowVariables(cssContent)

      expect(result.lightShadows['shadow-color']).toBe('rgba(0, 0, 0, 0.05)')
    })

    it('should catch errors and log them to console.error', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

      // Passing null will cause extractCssBlockContent to throw when calling .match()
      const result = parseShadowVariables(null as any)

      expect(consoleSpy).toHaveBeenCalledWith('Error parsing shadow variables:', expect.any(Error))
      expect(result).toEqual({ lightShadows: {}, darkShadows: {} })

      consoleSpy.mockRestore()
    })
  })

  describe('parseCssInput', () => {
    it('should catch errors and log them to console.error', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

      const result = parseCssInput(null as any)

      expect(consoleSpy).toHaveBeenCalledWith('Error parsing CSS input:', expect.any(Error))
      expect(result).toEqual({ lightColors: {}, darkColors: {} })

      consoleSpy.mockRestore()
    })
  })
})
