import { CheckCircle, ArrowLeft } from 'lucide-react'
import type { ViolationStatus } from '../../types/violations'

interface ViolationReviewActionsProps {
  status: ViolationStatus
  onBack: () => void
  onMarkReviewed: () => void
}

function ViolationReviewActions({
  status,
  onBack,
  onMarkReviewed,
}: ViolationReviewActionsProps) {
  const isReviewed = status === 'reviewed'

  return (
    <section className="review-actions">
      <button
        className="review-back-button"
        onClick={onBack}
      >
        <ArrowLeft size={17} />
        Back to Violations
      </button>

      {!isReviewed && (
        <button
          className="review-confirm-button"
          onClick={onMarkReviewed}
        >
          <CheckCircle size={17} />
          Mark as Reviewed
        </button>
      )}

      {isReviewed && (
        <div className="review-completed">
          <CheckCircle size={17} />
          Violation Reviewed
        </div>
      )}
    </section>
  )
}

export default ViolationReviewActions