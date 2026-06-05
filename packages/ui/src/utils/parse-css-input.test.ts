import { describe, expect, it, vi } from "vitest";
import { parseCssInput, parseShadowVariables } from "./parse-css-input";

// Mock the config/theme import because the file is missing in the environment
vi.mock("@/config/theme", () => ({
	defaultThemeState: {
		light: {
			background: "oklch(1 0 0)",
			foreground: "oklch(0.145 0 0)",
			primary: "oklch(0.205 0 0)",
			radius: "0.625rem",
		},
		dark: {
			background: "oklch(0.145 0 0)",
			foreground: "oklch(0.985 0 0)",
		},
	},
	COMMON_STYLES: ["radius"],
}));

describe("parse-css-input", () => {
	describe("parseCssInput", () => {
		it("should parse valid CSS input correctly", () => {
			const input = `
        :root {
          --background: 100% 0 0;
          --foreground: 14.5% 0 0;
          --radius: 0.5rem;
        }
        .dark {
          --background: 14.5% 0 0;
          --foreground: 98.5% 0 0;
        }
      `;
			const result = parseCssInput(input);

			expect(result.lightColors).toEqual({
				background: "hsl(100% 0 0)",
				foreground: "hsl(14.5% 0 0)",
				radius: "0.5rem",
			});
			expect(result.darkColors).toEqual({
				background: "hsl(14.5% 0 0)",
				foreground: "hsl(98.5% 0 0)",
			});
		});

		it("should handle errors during parsing and log to console.error", () => {
			const consoleSpy = vi
				.spyOn(console, "error")
				.mockImplementation(() => {});

			// Passing undefined as input will cause input.match(regex) to throw in extractCssBlockContent
			// @ts-expect-error - testing invalid input
			parseCssInput(undefined);

			expect(consoleSpy).toHaveBeenCalledWith(
				"Error parsing CSS input:",
				expect.any(Error),
			);
			consoleSpy.mockRestore();
		});
	});

	describe("parseShadowVariables", () => {
		it("should parse valid shadow variables correctly", () => {
			const input = `
        :root {
          --shadow-color: hsl(0 0% 0%);
          --shadow-opacity: 0.1;
          --shadow-blur: 3px;
          --shadow-spread: 0px;
          --shadow-offset-x: 0;
          --shadow-offset-y: 1px;
        }
      `;
			const result = parseShadowVariables(input);

			expect(result.lightShadows["shadow-color"]).toBe("hsl(0 0% 0%)");
			expect(result.lightShadows["shadow-opacity"]).toBe("0.1");
		});

		it("should handle errors during shadow parsing and log to console.error", () => {
			const consoleSpy = vi
				.spyOn(console, "error")
				.mockImplementation(() => {});

			// @ts-expect-error - testing invalid input
			parseShadowVariables(null);

			expect(consoleSpy).toHaveBeenCalledWith(
				"Error parsing shadow variables:",
				expect.any(Error),
			);
			consoleSpy.mockRestore();
		});
	});
});
