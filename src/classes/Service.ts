import { isEmpty } from '../utils/utils'

interface IMethods {
  fetch: null | (() => Promise<any>)
  start: null | (() => void)
  success: null | ((data: any) => void)
  error: null | ((error: any) => void)
  noData: null | (() => void)
}

export class Service {
  #data = []
  #status = ''

  #methods: IMethods = {
    fetch: null,
    start: null,
    success: null,
    error: null,
    noData: null,
  }

  set data(data) {
    this.#data = data
  }

  get data() {
    return this.#data
  }

  set status(status) {
    this.#status = status
  }

  get status() {
    return this.#status
  }

  static init() {
    return new Service()
  }

  method(cb: any) {
    this.#methods.fetch = cb
    return this
  }

  onStart(cb: any) {
    this.#methods.start = cb
    return this
  }

  onSuccess(cb: any) {
    this.#methods.success = cb
    return this
  }

  onError(cb: any) {
    this.#methods.error = cb
    return this
  }

  onNoData(cb: any) {
    this.#methods.noData = cb
    return this
  }

  async fire() {
    if (!isEmpty(this.#methods.start)) {
      this.#methods.start!()
    }

    const response = await this.#methods.fetch!()

    if (response === null) {
      this.#methods.error!(response)
    } else if (isEmpty(response)) {
      this.#methods.noData!()
    } else {
      this.#methods.success!(response)
    }

    return
  }

  execute() {
    return this.fire()
  }
}
