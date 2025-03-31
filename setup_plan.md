# E2E Testing Setup Plan for Viscera

## 1. Initial Setup
```json
// package.json dependencies
{
  "devDependencies": {
    "jest": "^29.0.0",
    "ts-jest": "^29.0.0",
    "@types/jest": "^29.0.0",
    "puppeteer": "^21.0.0",
    "@types/puppeteer": "^21.0.0",
    "jest-puppeteer": "^9.0.0",
    "@types/jest-environment-puppeteer": "^5.0.0",
    "typescript": "^5.0.0",
    "ts-node": "^10.0.0"
  }
}
```

## 2. Configuration Files

### jest.config.js
```javascript
module.exports = {
  preset: 'jest-puppeteer',
  testMatch: ['**/__tests__/**/*.e2e.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testEnvironment: 'jest-environment-puppeteer',
};
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "types": ["jest", "puppeteer", "jest-environment-puppeteer"]
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## 3. Test Structure

```
📁 src/
├── 📁 __tests__/
│   └── 📁 e2e/
│       ├── videoInput.e2e.ts
│       ├── timeControls.e2e.ts
│       ├── clippingProcess.e2e.ts
│       └── helpers/
│           └── testUtils.ts
└── 📁 types/
    └── global.d.ts
```

## 4. E2E Test Cases

### videoInput.e2e.ts
- Test loading sample video
- Test entering custom video URL
- Test invalid video URL handling

### timeControls.e2e.ts
- Test start time input
- Test end time input
- Test video preview with time controls
- Test invalid time inputs

### clippingProcess.e2e.ts
- Test clip button functionality
- Test clipping progress indication
- Test successful clip creation
- Test error handling during clipping
- Test viewing clipped videos grid

## 5. Test Utilities (helpers/testUtils.ts)
- Video URL test helpers
- Time input helpers
- Clip creation helpers
- Element selectors
- Wait conditions

## 6. Implementation Steps

1. Initialize project with package.json
2. Install dependencies
3. Set up configuration files
4. Create directory structure
5. Implement test utilities
6. Write E2E tests
7. Set up test running scripts

## 7. Next Actions

Switch to Code mode to:
1. Initialize the project with npm
2. Install required dependencies
3. Set up configuration files
4. Create the directory structure
5. Begin implementing the E2E tests