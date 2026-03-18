import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ImporteMargenCuatrimestre {
  CUATRIMESTRE: number
  IMPORTE_TOTAL: number
  MARGEN_TOTAL: number
}

export interface MargenPorSucursal {
  nombre_sucursal: string
  MARGEN_TOTAL: number
}

export interface ImportePorSucursal {
  nombre_sucursal: string
  IMPORTE_TOTAL: number
}

export interface TopClienteMargen {
  nombre_cliente: string
  MARGEN_TOTAL: number
}

export interface TopVendedorMargen {
  nombre_vendedor: string
  MARGEN_TOTAL: number
}

export interface MargenPorLinea {
  nombre_linea: string
  MARGEN_TOTAL: number
}

export interface AllDataState {
  importe_margen_cuatrimestre: ImporteMargenCuatrimestre[]
  margen_por_sucursal: MargenPorSucursal[]
  importe_por_sucursal: ImportePorSucursal[]
  top_clientes_margen: TopClienteMargen[]
  top_vendedores_margen: TopVendedorMargen[]
  margen_por_linea: MargenPorLinea[]
  importe_total: number
  ganancia_bruta: number
  kilos_vendidos: number
}

export interface DataState {
    data: AllDataState
}
// Define the initial state using that type
const initialState: DataState = {
    data: {
        importe_margen_cuatrimestre: [],
        margen_por_sucursal: [],
        importe_por_sucursal: [],
        top_clientes_margen: [],
        top_vendedores_margen: [],
        margen_por_linea: [],
        importe_total: 0,
        ganancia_bruta: 0,
        kilos_vendidos: 0
    }
}

export const dataSlice = createSlice({
  name: 'dashboardData',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    storeData: (state, action: PayloadAction<AllDataState>) => {
      state.data = action.payload
    },
  },
})

export const { storeData } = dataSlice.actions
export default dataSlice.reducer