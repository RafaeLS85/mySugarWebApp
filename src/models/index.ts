export type ExcelColumns = {
    DATE: Date
    HOUR_1?: string
    MEASURING_1?: number
    HOUR_2?: string
    MEASURING_2: number
    HOUR_3?: string
    MEASURING_3?: number
    HOUR_4?: string
    MEASURING_4?: number
    HOUR_5?: string
    MEASURING_5?: number
    HOUR_6?: string
    MEASURING_6?: number
    HOUR_7?: string
    MEASURING_7?: number
    HOUR_8?: string
    MEASURING_8?: number
    HOUR_9?: string
    MEASURING_9?: number
    HOUR_10?: string
    MEASURING_10?: number
}

export type ExcelSheets  = {
    enero: ExcelColumns[],
    febrero: ExcelColumns[],
    marzo: ExcelColumns[],
    abril: ExcelColumns[],
    mayo: ExcelColumns[],
    junio: ExcelColumns[],
    julio: ExcelColumns[],
    agosto: ExcelColumns[],
    septiembre: ExcelColumns[],
    octubre: ExcelColumns[],
    noviembre: ExcelColumns[],
    diciembre: ExcelColumns[],
}