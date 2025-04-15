# @matheusslg/vitest-preview

Visual Debugging Experience for Vitest 🧪🖼⚡️

This package provides a visual debugging experience for your Vitest tests, allowing you to preview and interact with your components during test execution.

## Installation

```bash
npm install --save-dev @matheusslg/vitest-preview
# or
pnpm add -D @matheusslg/vitest-preview
# or
yarn add -D @matheusslg/vitest-preview
```

### Add script vitest-preview

`vitest-preview` has a CLI that opens **Vitest Preview Dashboard** where you can preview your tests' UI. You can update your `package.json` to add a script for more convenience:

```json
"scripts": {
  "vitest-preview": "vitest-preview",
  "pretest": "npx tailwindcss -i ./path/to/your/globals.css -o ./.vitest-preview/styles.css",
  "test": "npm run pretest && vitest"
},
```

> **Important**: If you're using Tailwind CSS, you need to add the `pretest` script that compiles your Tailwind styles before running the tests. This ensures your Tailwind styles are properly included in the preview.

## Usage

1. Import the package in your test file:

```typescript
import { debug } from '@matheusslg/vitest-preview';
```

2. Use the `debug()` function in your test to visualize the component:

```typescript
import { test } from 'vitest';
import { debug } from '@matheusslg/vitest-preview';
import YourComponent from './YourComponent';

test('should render component correctly', () => {
  render(<YourComponent />);\
  debug()
  // Your test assertions here
});
```

3. Run your tests, and a preview server will automatically start, allowing you to see your component in the browser.

## Features

- 🖼 Visual preview of components during test execution
- ⚡️ Fast and lightweight
- 🧪 Seamless integration with Vitest
- 🔄 Auto-refresh on test re-runs
- 🎨 Support for styling and CSS

## Configuration

You need to configure `vitest` to process CSS by:

```diff
// vite.config.js
export default defineConfig({
  test: {
+    css: true,
  },
});

```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

This package is a fork of [vitest-preview](https://www.vitest-preview.com/) by [Hung Viet Nguyen](https://github.com/nvh95).
