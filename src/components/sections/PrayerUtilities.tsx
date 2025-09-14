"use client";
import { useState, useEffect } from "react";

export function NextKhutbah() {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(t);
  }, []);
  
  // compute next Friday at 12:20 Dhaka time (UTC+6). We assume Dhaka uses a fixed +6 offset (no DST).
  const target = (() => {
    const MS = 1000;
    const MIN = 60 * MS;
    const HOUR = 60 * MIN;
    const OFFSET = 6 * HOUR; // Dhaka is UTC+6

    // get now in UTC milliseconds
    const nowUtc = now.getTime();
    // compute Dhaka local time by adding offset
    const dhakaNow = new Date(nowUtc + OFFSET);
    const day = dhakaNow.getUTCDay(); // 0=Sun, 5=Fri

    // compute next Friday (in Dhaka local date)
    const daysUntilFriday = (5 - day + 7) % 7 || 7;

    // candidate date in Dhaka local (as UTC ms)
    const candidateDhakaDate = new Date(Date.UTC(dhakaNow.getUTCFullYear(), dhakaNow.getUTCMonth(), dhakaNow.getUTCDate() + daysUntilFriday, 12, 20, 0));
    // candidateDhakaDate currently represents 12:20 UTC; convert to UTC timestamp that corresponds to 12:20 Dhaka by subtracting OFFSET
    const candidateUtcForDhaka = candidateDhakaDate.getTime() - OFFSET;
    // If today is Friday and current Dhaka time is before 12:20, use today
    if (day === 5) {
      const todayDhakaTarget = new Date(Date.UTC(dhakaNow.getUTCFullYear(), dhakaNow.getUTCMonth(), dhakaNow.getUTCDate(), 12, 20, 0)).getTime() - OFFSET;
      if (nowUtc < todayDhakaTarget) return new Date(todayDhakaTarget);
    }

    return new Date(candidateUtcForDhaka);
  })();

  const diff = target.getTime() - now.getTime();
  const absDiff = Math.abs(diff);

  const fmt = (ms: number) => {
    const total = Math.max(0, Math.floor(ms / 60000)); // minutes
    const days = Math.floor(total / 1440);
    const hours = Math.floor((total % 1440) / 60);
    const minutes = total % 60;
    if (days > 0) return `${days}d ${hours}h ${minutes}m`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    if (minutes > 0) return `${minutes}m`;
    return `less than 1m`;
  };

  let statusText = '';
  if (diff > 0) {
    statusText = `in ${fmt(diff)}`;
  } else if (diff <= 0 && absDiff < 60 * 60 * 1000) {
    // within 1 hour after start -> live
    statusText = 'Khutbah happening now';
  } else {
    statusText = `started ${fmt(absDiff)} ago`;
  }

  const dfDate = new Intl.DateTimeFormat(undefined, { timeZone: 'Asia/Dhaka', weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
  const dfTime = new Intl.DateTimeFormat(undefined, { timeZone: 'Asia/Dhaka', hour: 'numeric', minute: '2-digit', hour12: true });
  const dateStr = dfDate.format(target);
  const timeStr = dfTime.format(target);

  return (
    <div>
      <div style={{ color: '#6b7280' }}>{dateStr} • {timeStr}</div>
      <div style={{ marginTop: 8, background: '#fff7eb', padding: 8, borderRadius: 6, color: '#b5842d', display: 'inline-block' }}>
        <strong>Khutbah begins at {timeStr}</strong>
      </div>
      <div style={{ marginTop: 8, color: '#6b7280', fontSize: 13 }} aria-live="polite">
        {statusText}
      </div>
    </div>
  );
}

export function NextPrayer() {
  const [now, setNow] = useState<Date>(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(t);
  }, []);

  // prayer times (uses the times shown on the page)
  const schedule = [
    { name: 'Fajr', time: '05:40' },
    { name: 'Sunrise', time: '06:20' },
    { name: 'Dhuhr', time: '13:05' },
    { name: 'Asr', time: '16:54' },
    { name: 'Maghrib', time: '19:59' },
    { name: 'Isha', time: '21:22' },
  ];

  // build Date for given HH:mm in Dhaka (UTC+6). We'll compute the UTC timestamp that corresponds to that wall-clock time.
  const toDate = (timeStr: string, base: Date) => {
    const [h, m] = timeStr.split(':').map(Number);
    // Dhaka offset in ms
    const OFFSET = 6 * 3600 * 1000;
    // Use base's Dhaka date components
    const baseUtc = base.getTime();
    const dhakaDate = new Date(baseUtc + OFFSET);
    const y = dhakaDate.getUTCFullYear();
    const mo = dhakaDate.getUTCMonth();
    const da = dhakaDate.getUTCDate();
    // create UTC timestamp for Dhaka wall-clock y-mo-da h:m by subtracting offset
    const utcForDhaka = Date.UTC(y, mo, da, h, m, 0) - OFFSET;
    return new Date(utcForDhaka);
  };

  const today = new Date(now);
  // find next prayer today
  let next = null as null | { name: string; date: Date };
  for (const p of schedule) {
    const dt = toDate(p.time, today);
    if (dt.getTime() > now.getTime()) {
      next = { name: p.name, date: dt };
      break;
    }
  }
  if (!next) {
    // next is tomorrow's first prayer
    const dt = toDate(schedule[0].time, new Date(now.getTime() + 24 * 3600 * 1000));
    next = { name: schedule[0].name, date: dt };
  }

  const diff = next.date.getTime() - now.getTime();

  const fmt = (ms: number) => {
    const total = Math.max(0, Math.floor(ms / 60000)); // minutes
    const hours = Math.floor(total / 60);
    const minutes = total % 60;
    if (hours > 0) return `${hours}h ${minutes}m`;
    if (minutes > 0) return `${minutes}m`;
    return `less than 1m`;
  };

  // Use a fixed locale to avoid SSR/CSR mismatch
  const dfTime = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Dhaka', hour: 'numeric', minute: '2-digit', hour12: true });
  const timeStr = mounted ? dfTime.format(next.date) : '';

  return (
    <div>
      <small style={{ color: '#6b7280' }}>Next Prayer</small>
      <div style={{ fontSize: 18, fontWeight: 700, color: '#c19233' }}>{next.name} — {mounted ? timeStr : ''}</div>
      <small style={{ color: '#6b7280' }}>{mounted ? (diff > 0 ? `in ${fmt(diff)}` : 'now') : ''}</small>
    </div>
  );
}
