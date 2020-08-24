import _ from "lodash"
import { PaymentService } from "medusa-interfaces"
import axios from "axios"
import fs from "fs"

class ApplePayAdyenService extends PaymentService {
  static identifier = "applepayAdyen"

  constructor({ adyenService }, options) {
    super()

    this.options_ = options

    this.adyenService_ = adyenService
  }

  /**
   * Status for Adyen payment.
   * @param {Object} paymentData - payment method data from cart
   * @returns {string} the status of the payment
   */
  async getStatus(paymentData) {
    const { resultCode } = paymentData
    let status = "initial"

    if (resultCode === "Authorised") {
      status = "authorized"
    }

    return status
  }

  async createPayment(_) {
    return {}
  }

  async validateSession(validationUrl) {
    const uri = `https://${validationUrl}/paymentSession`

    const cert = fs.readFileSync("./apple-pay-cert.pem", "utf-8")

    const request = {
      merchantIdentifier: this.options.applepayMerchantId,
      displayName: this.options.applepayDisplayName,
      initiative: "web",
      initiativeContext: this.options.applepayDomainName,
      key: cert,
      cert,
    }

    return axios.post(uri, request)
  }

  async authorizePayment(cart, paymentMethod) {
    return this.adyenService_.authorizePayment(cart, paymentMethod)
  }

  async retrievePayment(data) {
    return this.adyenService_.retrievePayment(data)
  }

  async updatePayment(data, _) {
    return this.adyenService_.updatePayment(data)
  }

  async deletePayment(data) {
    return this.adyenService_.deletePayment(data)
  }

  async capturePayment(data) {
    return this.adyenService_.capturePayment(data)
  }

  async refundPayment(data) {
    return this.adyenService_.refundPayment(data)
  }

  async cancelPayment(data) {
    return this.adyenService_.cancelPayment(data)
  }
}

export default ApplePayAdyenService
