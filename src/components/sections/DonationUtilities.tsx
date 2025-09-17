"use client";
import { useState } from "react";

export function CopyPayment({ icon, label, number, type }: { icon: string, label: string, number: string, type: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(number);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <div className="donation-method" style={{ minWidth: 220, background: '#fff', borderRadius: 8, boxShadow: '0 4px 18px rgba(0,0,0,0.10)', padding: 16, textAlign: 'center', display: 'flex', alignItems: 'center', gap: 10 }}>
      <img src={icon} alt={label} style={{ height: 32, marginRight: 8 }} />
      <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span><strong>{label}</strong> {number} <small style={{ color: '#888' }}>({type})</small></span>
        <button onClick={handleCopy} style={{ marginTop: 2, fontSize: 12, background: '#f7efe0', border: '1px solid #e1c286', borderRadius: 4, padding: '2px 8px', cursor: 'pointer', color: '#b5842d' }}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

export function CopyBankPayment({ icon, bank, account, name, branch }: { icon: string, bank: string, account: string, name: string, branch: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(account);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <div className="donation-method" style={{ minWidth: 280, background: '#fff', borderRadius: 8, boxShadow: '0 4px 18px rgba(0,0,0,0.10)', padding: 16, textAlign: 'center', display: 'flex', alignItems: 'center', gap: 10 }}>
      <img src={icon} alt="Bank" style={{ height: 32, marginRight: 8 }} />
      <div style={{ textAlign: 'left', fontSize: '0.98rem', display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span><strong>Bank:</strong> {bank}</span>
        <span><strong>A/C:</strong> {account}</span>
        <span><strong>Name:</strong> {name}</span>
        <span><strong>Branch:</strong> {branch}</span>
        <button onClick={handleCopy} style={{ marginTop: 2, fontSize: 12, background: '#f7efe0', border: '1px solid #e1c286', borderRadius: 4, padding: '2px 8px', cursor: 'pointer', color: '#b5842d', alignSelf: 'flex-start' }}>
          {copied ? 'Copied!' : 'Copy A/C'}
        </button>
      </div>
    </div>
  );
}
