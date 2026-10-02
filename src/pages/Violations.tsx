import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router'

import ViolationFilters from '../components/violations/ViolationFilters'
import ViolationTable from '../components/violations/ViolationTable'
import { getViolationsData } from '../services/violationsService'
import type { Violation } from '../types/violations'

import '../css/violations.css'

function Violations() {
  const navigate = useNavigate()

  const [violations, setViolations] = useState<Violation[]>([])
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')
  const [type, setType] = useState('all')

  useEffect(() => {
    getViolationsData().then((data) => {
      setViolations(data.violations)
    })
  }, [])

  const filteredViolations = useMemo(() => {
    return violations.filter((violation) => {
      const matchesSearch =
        violation.vehicleNumber
          .toLowerCase()
          .includes(search.toLowerCase())

      const matchesStatus =
        status === 'all' || violation.status === status

      const matchesType =
        type === 'all' || violation.violationType === type

      return matchesSearch && matchesStatus && matchesType
    })
  }, [violations, search, status, type])

  const pendingCount = violations.filter(
    (violation) => violation.status === 'pending',
  ).length

  const reviewedCount = violations.filter(
    (violation) => violation.status === 'reviewed',
  ).length

  return (
    <div className="violations-page">
      <div className="violations-heading">
        <div>
          <h1>Violations</h1>
          <p>
            Review and manage detected traffic violations.
          </p>
        </div>

        <div className="violations-summary">
          <div>
            <strong>{violations.length}</strong>
            <span>Total</span>
          </div>

          <div>
            <strong>{pendingCount}</strong>
            <span>Pending</span>
          </div>

          <div>
            <strong>{reviewedCount}</strong>
            <span>Reviewed</span>
          </div>
        </div>
      </div>

      <section className="violations-card">
        <ViolationFilters
          search={search}
          status={status}
          type={type}
          onSearchChange={setSearch}
          onStatusChange={setStatus}
          onTypeChange={setType}
        />

        <div className="violations-table-header">
          <div>
            <h2>Violation Records</h2>
            <span>
              Showing {filteredViolations.length} of {violations.length}{' '}
              violations
            </span>
          </div>
        </div>

        <ViolationTable
          violations={filteredViolations}
          onView={(id) => navigate(`/violations/${id}`)}
        />

        <div className="violations-pagination">
          <button disabled>Previous</button>

          <span className="active">1</span>
          <span>2</span>
          <span>3</span>

          <button>Next</button>
        </div>
      </section>
    </div>
  )
}

export default Violations