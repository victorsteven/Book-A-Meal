class ResponseUtility {
  constructor() {
    this.statusCode = null;
    this.data = [] || {};
    this.message = null;
  }

  success(statusCode, data, message) {
    this.statusCode = statusCode;
    if (this.message != null) {
      this.message = message;
    }
    if (this.data != null) {
      this.data = data;
    }
  }

  failure(statusCode, data, message) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
  }

  // send(res) {
  //   // return
  // }
}

export default ResponseUtility;
