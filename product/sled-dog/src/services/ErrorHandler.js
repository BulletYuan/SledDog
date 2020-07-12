class ErrorHandler {
  constructor(ctx) {
    // this.errorList = [];
    this.errorList = {};
    this.self = ctx || window;
    this.self._errorList = this.errorList;
    this._nativeConsoleError = this.self.console.error;
  }

  _error() {
    this._pushError(0, arguments);
  }
  _promiseerror(event) {
    this._pushError(3, event.reason);
    event.preventDefault();
  }
  _pushError(type, errors) {  // type: [0 NormalFunctionError | 1 ConsoleError | 2 PromiseError]
    const time = new Date().getTime();
    const tk = Math.floor(time / 1000);
    const errObj = {
      time,
      type,
      errors
    }
    // this.errorList.push(errObj);
    if (!this.errorList[tk]) { this.errorList[tk] = [] }
    this.errorList[tk].push(errObj);
    // this.self._errorList[tk].push(errObj);
  }

  watch() {
    this.self.onerror = () => {
      this._pushError(0, arguments);
      return false;
    }
    this.self.console.error = () => {
      // this.self.console.error(...arguments)
      this._pushError(1, arguments);
      this._nativeConsoleError(...arguments);
    }
    this.self.onunhandledrejection = (event) => {
      this._pushError(3, event.reason);
      event.preventDefault();
    }
    this.self.addEventListener('error', this._error);
    this.self.addEventListener('unhandledrejection', this._promiseerror);
  }

  stop() {
    this.self.onerror = null;
    this.self.console.error = () => console.error(...arguments);
    this.self.onunhandledrejection = null;
    this.self.removeEventListener('error', this._error);
    this.self.removeEventListener('unhandledrejection', this._promiseerror);
  }
  clean() {
    this.stop();
    this.errorList = {};
    delete this.self._errorList;
  }

  logs(secondRange = 60) {
    const keys = Object.keys(this.errorList);
    if (!this.errorList || keys.length === 0) { return; }
    const now = new Date().getTime();
    const tk = Math.floor(now / 1000);
    const values = Object.values(this.errorList);
    const vaildVal = values.reduce((ov, cv, i) => {
      const k = Number(keys[i]);
      if (tk - secondRange >= k) {
        return [].concat(ov, cv);
      }
      return ov;
    });
    return vaildVal || [];
  }
}

export default ErrorHandler;