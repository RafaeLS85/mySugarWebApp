import axios from 'axios'
import { Values } from "./types";
import Papa from 'papaparse'

const URL = process.env.NEXT_PUBLIC_URL;

const api = {
    list: async (): Promise<Values[] | []> => {

        console.log('api call')

        if(!URL) return []

        return axios
        .get(URL, { responseType: 'blob'})
        .then(res => {
            return new Promise<Values[]>((resolve, reject) => {
                Papa.parse(res.data, {
                    header: true,
                    complete: results => {
                        const products = results.data as Values[]
                        return resolve( products.map(value => ({
                            ...value                        })))
                    },
                    error: error => reject(error.message),
                })
            })
        })
    }
}

export default api;