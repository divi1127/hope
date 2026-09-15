// Service abstraction layer — frontend only.
//
// These stubs are placeholders so that the frontend can later connect to
// a Node.js / Express backend without UI changes. For now they resolve
// with realistic mock data or simulate a network delay.
//
// When the backend is ready, replace each method body with a fetch() call.

const delay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms))

export const appointmentService = {
  async createAppointment(payload) {
    await delay()
    return { ok: true, message: 'Request received', data: payload }
  },
}

export const enquiryService = {
  async submitEnquiry(payload) {
    await delay()
    return { ok: true, message: 'Enquiry received', data: payload }
  },
}

export const blogService = {
  async getPosts() {
    await delay()
    return []
  },
}

export const galleryService = {
  async getImages() {
    await delay()
    return []
  },
}