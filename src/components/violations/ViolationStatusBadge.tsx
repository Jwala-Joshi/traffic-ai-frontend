import { CheckCircle, Clock } from 'lucide-react'
import type { ViolationStatus } from '../../types/violations'

interface ViolationStatusBadgeProps {
  status: ViolationStatus
}

function ViolationStatusBadge({
  status,
}: ViolationStatusBadgeProps) {
  const isReviewed = status === 'reviewed'

  return (
    <span
      className={`violation-status-badge ${
        isReviewed ? 'reviewed' : 'pending'
      }`}
    >
      {isReviewed ? (
        <CheckCircle size={14} />
      ) : (
        <Clock size={14} />
      )}

      {isReviewed ? 'Reviewed' : 'Pending'}
    </span>
  )
}

export default ViolationStatusBadge