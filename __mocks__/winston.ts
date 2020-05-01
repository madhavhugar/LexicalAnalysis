export default {
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
  debug: jest.fn(),
  transports: { File: jest.fn() },
  handleExceptions: jest.fn(),
  add: jest.fn(),
};
