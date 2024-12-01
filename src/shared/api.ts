export class Backend {
  protected async get<T>(url: string): Promise<T | null> {
    return new Promise((resolve, reject) => {
      if (!url) {
        reject('No URL specified')
      }

      const storageUrl = `data_${url}`

      const data = JSON.parse(localStorage.getItem(storageUrl))

      resolve(data)
    })
  }

  protected async post<T, D = unknown>(url: string, data?: D): Promise<T> {
    return new Promise((resolve, reject) => {
      if (!url) {
        reject('No URL specified')
      }

      const storageUrl = `data_${url}`

      const currentData = JSON.parse(localStorage.getItem(storageUrl))

      console.log(currentData)

      if (Array.isArray(currentData)) {
        localStorage.setItem(storageUrl, JSON.stringify([...currentData, data]))
      } else {
        localStorage.setItem(storageUrl, JSON.stringify([data]))
      }

      const newData = JSON.parse(localStorage.getItem(storageUrl))

      resolve(newData)
    })
  }
}
