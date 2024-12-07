import '@testing-library/jest-dom';
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extiende los matchers de Vitest con los de jest-dom
expect.extend(matchers as any);

afterEach(() => {
  cleanup();
});