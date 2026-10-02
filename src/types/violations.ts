export type ViolationStatus = 'pending' | 'reviewed'

export type ViolationType =
  | 'red-light'
  | 'stop-line'
  | 'helmet'
  | 'speed'

export interface Violation {
  id: number
  vehicleNumber: string
  violationType: ViolationType
  violationLabel: string
  camera: string
  location: string
  confidence: number
  date: string
  time: string
  status: ViolationStatus
}

export interface ViolationsData {
  violations: Violation[]
}