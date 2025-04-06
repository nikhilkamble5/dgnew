import "../../pages/styles/perks-benefits.css"
import { Briefcase, Watch, Heart, Sprout, Smile } from "lucide-react"

const PerksBenefits = () => {
  return (
    <div className="perks-container">
      <h1 className="perks-title">Perks & benefits</h1>

      <div className="perks-content">
        <div className="perks-note">
          <p>
            OUR PERKS PRIORITIZE GROWTH,
            <br />
            WELL-BEING, COMMUNITY, AND
            <br />
            WORK-LIFE BALANCE FOR
            <br />
            EMPLOYEES
          </p>
        </div>

        <div className="perks-grid">
          <div className="perks-category">
            <div className="category-header">
              <Briefcase className="category-icon" />
              <h2 className="category-title">Work environment</h2>
            </div>
            <ul className="category-list">
              <li>Remote work</li>
              <li>Flexible work hours</li>
              <li>Fun workspaces</li>
            </ul>
          </div>

          <div className="perks-category">
            <div className="category-header">
              <Watch className="category-icon" />
              <h2 className="category-title">Time</h2>
            </div>
            <ul className="category-list">
              <li>Paid vacations</li>
              <li>Maternity and paternity leave</li>
              <li>Paid bereavement leave</li>
            </ul>
          </div>

          <div className="perks-category">
            <div className="category-header">
              <Heart className="category-icon" />
              <h2 className="category-title">Health and well-being</h2>
            </div>
            <ul className="category-list">
              <li>Accidental insurance & medical claims</li>
              <li>Free online health consultations</li>
              <li>Access to mental health sessions</li>
            </ul>
          </div>

          <div className="perks-category">
            <div className="category-header">
              <Sprout className="category-icon" />
              <h2 className="category-title">Growth</h2>
            </div>
            <ul className="category-list">
              <li>Professional development ladder programs</li>
              <li>Educational reimbursements</li>
              <li>Global events & conferences</li>
            </ul>
          </div>

          <div className="perks-category">
            <div className="category-header">
              <Smile className="category-icon" />
              <h2 className="category-title">Happiness</h2>
            </div>
            <ul className="category-list">
              <li>Awards & recognitions</li>
              <li>Get-togethers & dinners</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerksBenefits

