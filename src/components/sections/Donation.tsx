import { CopyPayment, CopyBankPayment } from "./DonationUtilities";

export default function Donation() {
  return (
    <section id="donation" className="donation" style={{ paddingBottom: '16px', background: '#f8fafc' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
            <h3 style={{ margin: 0, color: '#142235' }}>Sadaqah & Donations</h3>
          </div>
          <div style={{ height: 1, width: 80, background: 'linear-gradient(90deg, rgba(193,146,51,0.9), rgba(193,146,51,0.3))', margin: '6px auto 12px' }} />
          <p style={{ margin: '6px auto 0', color: '#6b7280', maxWidth: 720, fontSize: '0.98rem' }}>
            Support our mosque and community through sadaqah and donations. Your generosity helps maintain our facilities and support religious education.
          </p>
        </div>
        <div className="donation-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24 }}>
          {/* Group into Mobile Banking and Bank Transfer for clarity */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            <div>
              <h4 style={{ margin: '0 0 8px 0', color: '#c19233' }}>Send via Mobile Wallets — (bKash · Nagad · Rocket)</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <CopyPayment
                  icon="/bkash.png"
                  label="bKash"
                  number="+880 1716-939119"
                  type="Personal"
                />
                <CopyPayment
                  icon="/nagad.png"
                  label="Nagad"
                  number="+880 1716-939119"
                  type="Personal"
                />
                <CopyPayment
                  icon="/rocket.png"
                  label="Rocket"
                  number="+880 1716-939119"
                  type="Personal"
                />
              </div>
            </div>

            <div>
              <h4 style={{ margin: '0 0 8px 0', color: '#c19233' }}>Bank Transfer — (Account Details)</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <CopyBankPayment
                  icon="/meghna_bank.jpg"
                  bank="Meghna Bank PLC"
                  account="710111100001247"
                  name="Sultanpur Dokkhinpara Jame Moshjid"
                  branch="Shathibari"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
