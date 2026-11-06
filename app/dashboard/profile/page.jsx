import Icon from "@/components/Icon";

export const metadata = { title: "My Profile · SCPL" };

const AGENT = {
  name:       "Ankit Kumar",
  id:         "A1042",
  role:       "SCPL Agent",
  joined:     "12 January 2024",
  dob:        "15 March 1990",
  gender:     "Male",
  mobile:     "+91 98112 34567",
  altMobile:  "+91 88001 23456",
  email:      "ankit.kumar@example.com",
  address:    "Flat 4B, Shanti Nagar, Ranchi",
  city:       "Ranchi",
  state:      "Jharkhand",
  pincode:    "834001",
  pan:        "ABCDE1234F",
  aadhaar:    "XXXX XXXX 8421",
  kycStatus:  "verified",
  commission: "2.5%",
  tier:       "Gold Agent",
  totalTxns:  "1,428",
  thisMonth:  "142",
  revenue:    "₹8,24,300",
};

export default function ProfilePage() {
  return (
    <div className="profile-page">

      {/* Hero banner */}
      <div className="profile-hero">
        <div className="profile-avatar-wrap">
          <div className="profile-avatar-large">A</div>
          <button className="profile-avatar-edit" aria-label="Change photo">
            <Icon name="edit" size={13} stroke={2} />
          </button>
        </div>

        <div className="profile-hero-info">
          <h2>{AGENT.name}</h2>
          <p>{AGENT.role} · Joined {AGENT.joined}</p>
          <div className="profile-badges">
            <span className="profile-badge verified">
              <Icon name="check" size={12} stroke={2.5} />
              KYC Verified
            </span>
            <span className="profile-badge">
              <Icon name="shield" size={12} stroke={2} />
              IRCTC Authorised
            </span>
            <span className="profile-badge">
              <Icon name="trend" size={12} stroke={2} />
              {AGENT.tier}
            </span>
          </div>
        </div>

        <div className="profile-hero-stats">
          <div className="profile-hero-stat">
            <strong>{AGENT.totalTxns}</strong>
            <small>Total txns</small>
          </div>
          <div className="profile-hero-stat">
            <strong>{AGENT.thisMonth}</strong>
            <small>This month</small>
          </div>
          <div className="profile-hero-stat">
            <strong>{AGENT.revenue}</strong>
            <small>Lifetime GMV</small>
          </div>
        </div>
      </div>

      {/* Details grid */}
      <div className="profile-grid">

        {/* Personal details */}
        <div className="profile-section">
          <div className="profile-section-head">
            <div className="profile-section-title">
              <span className="profile-section-icon">
                <Icon name="user" size={17} stroke={1.9} />
              </span>
              Personal details
            </div>
            <button className="btn-edit-section">
              <Icon name="edit" size={13} stroke={2} />
              Edit
            </button>
          </div>
          <div className="profile-fields">
            <div className="profile-field-row">
              <div className="profile-field">
                <label>Full name</label>
                <span>{AGENT.name}</span>
              </div>
              <div className="profile-field">
                <label>Agent ID</label>
                <span>#{AGENT.id}</span>
              </div>
            </div>
            <div className="profile-field-row">
              <div className="profile-field">
                <label>Date of birth</label>
                <span>{AGENT.dob}</span>
              </div>
              <div className="profile-field">
                <label>Gender</label>
                <span>{AGENT.gender}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & address */}
        <div className="profile-section">
          <div className="profile-section-head">
            <div className="profile-section-title">
              <span className="profile-section-icon">
                <Icon name="landline" size={17} stroke={1.9} />
              </span>
              Contact &amp; address
            </div>
            <button className="btn-edit-section">
              <Icon name="edit" size={13} stroke={2} />
              Edit
            </button>
          </div>
          <div className="profile-fields">
            <div className="profile-field-row">
              <div className="profile-field">
                <label>Mobile</label>
                <span>{AGENT.mobile}</span>
              </div>
              <div className="profile-field">
                <label>Alternate mobile</label>
                <span>{AGENT.altMobile}</span>
              </div>
            </div>
            <div className="profile-field">
              <label>Email address</label>
              <span>{AGENT.email}</span>
            </div>
            <div className="profile-field">
              <label>Address</label>
              <span>{AGENT.address}</span>
            </div>
            <div className="profile-field-row">
              <div className="profile-field">
                <label>City / State</label>
                <span>{AGENT.city}, {AGENT.state}</span>
              </div>
              <div className="profile-field">
                <label>PIN code</label>
                <span>{AGENT.pincode}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Documents & KYC */}
        <div className="profile-section">
          <div className="profile-section-head">
            <div className="profile-section-title">
              <span className="profile-section-icon">
                <Icon name="id" size={17} stroke={1.9} />
              </span>
              Documents &amp; KYC
            </div>
            {AGENT.kycStatus === "verified" ? (
              <span className="profile-kyc-badge verified">
                <Icon name="check" size={12} stroke={2.5} />
                Verified
              </span>
            ) : (
              <span className="profile-kyc-badge pending">Pending</span>
            )}
          </div>
          <div className="profile-fields">
            <div className="profile-field">
              <label>PAN card number</label>
              <span>{AGENT.pan}</span>
            </div>
            <div className="profile-field">
              <label>Aadhaar number</label>
              <span>{AGENT.aadhaar}</span>
            </div>
            <div className="profile-field">
              <label>KYC status</label>
              <span className="profile-kyc-badge verified" style={{ alignSelf: "flex-start" }}>
                <Icon name="check" size={12} stroke={2.5} />
                Fully verified
              </span>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="profile-section">
          <div className="profile-section-head">
            <div className="profile-section-title">
              <span className="profile-section-icon">
                <Icon name="shield" size={17} stroke={1.9} />
              </span>
              Security
            </div>
          </div>
          <div className="profile-security-list">
            <div className="profile-security-item">
              <div className="profile-security-info">
                <strong>Password</strong>
                <span>Last changed 45 days ago</span>
              </div>
              <button className="btn-sec-action">Change</button>
            </div>
            <div className="profile-security-item">
              <div className="profile-security-info">
                <strong>Two-factor authentication</strong>
                <span>OTP via registered mobile</span>
              </div>
              <button className="btn-sec-action">Manage</button>
            </div>
            <div className="profile-security-item">
              <div className="profile-security-info">
                <strong>Active sessions</strong>
                <span>1 device · Chrome on macOS</span>
              </div>
              <button className="btn-sec-action danger">Revoke all</button>
            </div>
          </div>
        </div>
      </div>

      {/* Business details — full width */}
      <div className="profile-business-card">
        <div className="profile-section-head" style={{ marginBottom: 0, borderBottom: "1px solid var(--line)", paddingBottom: "16px" }}>
          <div className="profile-section-title">
            <span className="profile-section-icon">
              <Icon name="briefcase" size={17} stroke={1.9} />
            </span>
            Business details
          </div>
        </div>
        <div className="profile-business-grid">
          <div className="profile-business-stat">
            <label>Agent ID</label>
            <span>#{AGENT.id}</span>
          </div>
          <div className="profile-business-stat">
            <label>Agent tier</label>
            <span>{AGENT.tier}</span>
          </div>
          <div className="profile-business-stat">
            <label>Commission rate</label>
            <span>{AGENT.commission}</span>
          </div>
          <div className="profile-business-stat">
            <label>Member since</label>
            <span>{AGENT.joined}</span>
          </div>
          <div className="profile-business-stat">
            <label>Total transactions</label>
            <span>{AGENT.totalTxns}</span>
          </div>
          <div className="profile-business-stat">
            <label>Lifetime GMV</label>
            <span>{AGENT.revenue}</span>
          </div>
        </div>
      </div>

      <p className="copyright center">
        © 2026 SCPL स्वेच्छा केंद्र. All rights reserved.
      </p>
    </div>
  );
}
