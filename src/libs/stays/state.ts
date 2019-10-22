import { Record } from 'immutable'

interface IStaysPackage {
	hotel_id: string
	room_details: {
		room_code: string
		rate_plan_code: string
		description: string
		food: number
		non_refundable: boolean
		room_type: string
		room_view: string
		beds: object
		supplier_description: string
	}
	booking_key: string
	room_rate: number
	room_rate_currency: string
	client_commission: number
	client_commission_currency: string
	chargeable_rate: number
	chargeable_rate_currency: string
	indicative_market_rates: Array<object>
	rate_type: string
}
interface IStaysPrice {
	isAvailable: boolean
	currency: string
	basePrice: number
	taxes: number
	serviceFee: number
	totalPrice: number
	package: IStaysPackage
}
interface IStays {
	id: string
	pid: string
	price: IStaysPrice
	amenities: Array<string>
	partnerItemRef: string
	hotelChain: string | null
	itemType: string
	address: object
	media: {
		images: Array<string>
	}
	type: string
	integrationType: string
	partner: string
	name: string
	guidePrice: number
	currency: string
	starRating: number
	category: string
}

interface IStaysState {
	initialized: boolean
	loading: boolean
	error: string | null
	homepage_stays: Array<IStays> | Array<null>
	stays: Array<IStays> | Array<null>
}

const IinitialState = Record<IStaysState>({
	initialized: false,
	loading: false,
	error: null,
	homepage_stays: [],
	stays: []
})

const initialState = new IinitialState()

export default initialState
export type StaysState = typeof initialState
