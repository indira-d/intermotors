import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { publicRequest } from '../utils';

const initialState = {
	cars: [],
	car: {},
	sliderData: [],
	loading: false,
	categories: [],
	carTraker: []
}


export const getCars = createAsyncThunk(
	'cars/getCars',
	async () => {
		try {
			const {data} = await publicRequest.get('/vehicles/')
			return data
		} catch (error) {
			 console.log(error)
		}

	}
)

export const getSliderData = createAsyncThunk(
	'cars/getSlider',
	async () => {
		try {
			const {data} = await publicRequest.get('/main-slider/')
			return data 
		} catch (error) {
			console.log(error)
		}
	}
)

export const getCarDetails = createAsyncThunk(
	'cars/getCarDetails',
	async(id) => {
		try {
			const {data} = await publicRequest.get(`/vehicles/${id}`)
			return data
		} catch (error) {
			console.log(error)
		}
	}
)

export const filterByBrand = createAsyncThunk(
	'cars/filter',
	async(id) => {
		try {
			const {data} = await publicRequest.get(`categories/${id}/vehicles/`)
			return data
		} catch (error) {
			console.log(error)
		}
	}
)

export const getCategories = createAsyncThunk(
	'cars/getCategories',
	async() => {
		try {
			const {data} = await publicRequest.get('/categories/')
			return data
		} catch (error) {
			console.log(error)
		}
	}
)

export const findCarByVincode = createAsyncThunk(
	'cars/car-tracker',
	async(vincode) => {
		try {
			const {data} = await publicRequest.get(`/car-tracker/${vincode}/`)
			return data
		} catch (error) {
			
		}
	}
)

export const createOrder = createAsyncThunk(
	'cars/create-order',
	async(params) => {
		try {
			const {data} = await publicRequest.post(`/order/create/`, params)
			return data
		} catch (error) {
			console.log(error)
		}
	}
)

export const carSlice = (createSlice({
	name: 'cars',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder

			.addCase(getCars.pending, state => {
				state.loading =  true
			}) 
			.addCase(getCars.fulfilled, (state, action) => {
				state.cars = action.payload
				state.loading =  false
			}) 
			.addCase(getCars.rejected, state => {
				state.loading =  false
			}) 
			

			.addCase(getCarDetails.pending, state => {
				state.loading =  true
			}) 
			.addCase(getCarDetails.fulfilled, (state, action) => {
				state.car = action.payload
				state.loading =  false
			}) 
			.addCase(getCarDetails.rejected, state => {
				state.loading =  false
			}) 


			.addCase(getSliderData.pending, state => {
				state.loading =  true
			}) 
			.addCase(getSliderData.fulfilled, (state, action) => {
				state.sliderData = action.payload
				state.loading =  false
			}) 
			.addCase(getSliderData.rejected, state => {
				state.loading =  false
			}) 


			.addCase(getCategories.pending, state => {
				state.loading =  true
			}) 
			.addCase(getCategories.fulfilled, (state, action) => {
				state.categories = action.payload
				state.loading =  false
			}) 
			.addCase(getCategories.rejected, state => {
				state.loading =  false
			}) 

			.addCase(filterByBrand.pending, state => {
				state.loading =  true
			}) 
			.addCase(filterByBrand.fulfilled, (state, action) => {
				state.cars = action.payload
				state.loading =  false
			}) 
			.addCase(filterByBrand.rejected, state => {
				state.loading =  false
			}) 


			.addCase(findCarByVincode.pending, state => {
				state.loading =  true
			}) 
			.addCase(findCarByVincode.fulfilled, (state, action) => {
				state.carTraker = action.payload
				state.loading =  false
			}) 
			.addCase(findCarByVincode.rejected, state => {
				state.loading =  false
			}) 
	}
}))

export default carSlice.reducer