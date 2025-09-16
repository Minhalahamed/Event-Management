import React, { useMemo, useState } from "react";
import eventsData from "../data/ecard.json";

import { Link } from "react-router-dom";

function toDate(value) {
  // supports 'YYYY-MM-DD' or any valid Date parseable string
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return d;
}

function byDateKey(date) {
  const y = date.getFullYear();
  const m = `${date.getMonth() + 1}`.padStart(2, "0");
  const d = `${date.getDate()}`.padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function endOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

function startOfCalendarGrid(date) {
  const first = startOfMonth(date);
  const day = first.getDay(); // 0=Sun
  return addDays(first, -day);
}

function endOfCalendarGrid(date) {
  const last = endOfMonth(date);
  const day = last.getDay(); // 0=Sun
  return addDays(last, 6 - day);
}

function EventCalendar() {
  const [cursor, setCursor] = useState(new Date());
  const [selectedDateKey, setSelectedDateKey] = useState("");

  const eventsByDate = useMemo(() => {
    const map = new Map();
    for (const e of eventsData) {
      const parsed = toDate(e.date);
      if (!parsed) continue;
      const key = byDateKey(parsed);
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(e);
    }
    return map;
  }, []);

  const gridStart = startOfCalendarGrid(cursor);
  const gridEnd = endOfCalendarGrid(cursor);

  const cells = [];
  for (let d = new Date(gridStart); d <= gridEnd; d = addDays(d, 1)) {
    cells.push(new Date(d));
  }

  const monthLabel = cursor.toLocaleString(undefined, {
    month: "long",
    year: "numeric",
  });

  const selectedEvents = selectedDateKey
    ? eventsByDate.get(selectedDateKey) || []
    : [];

  return (
    <div
      className="container"
      style={{ paddingTop: "6rem", paddingBottom: "2rem" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <button
          className="btn btn-outline"
          onClick={() =>
            setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))
          }
        >
          ‹ Prev
        </button>
        <h2 style={{ margin: 0 }}>{monthLabel}</h2>
        <button
          className="btn"
          onClick={() =>
            setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))
          }
        >
          Next ›
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "8px",
          borderTop: "1px solid #e2e8f0",
          borderLeft: "1px solid #e2e8f0",
        }}
      >
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div
            key={d}
            style={{
              padding: "8px",
              fontWeight: 600,
              textAlign: "center",
              background: " rgba(3, 35, 52, 0.85)",
              color: "white",
              borderRight: "1px solid #e2e8f0",
              borderBottom: "1px solid #e2e8f0",
            }}
          >
            {d}
          </div>
        ))}

        {cells.map((date) => {
          const inMonth = date.getMonth() === cursor.getMonth();
          const key = byDateKey(date);
          const hasEvents = eventsByDate.has(key);
          const isSelected = selectedDateKey === key;

          return (
            <button
              key={key}
              onClick={() => setSelectedDateKey(key)}
              style={{
                textAlign: "left",
                padding: "8px",
                minHeight: "80px",
                background: isSelected ? "rgba(3,35,52,0.08)" : "#ffffff",
                color: inMonth ? "#0f172a" : "#94a3b8",
                borderRight: "1px solid #e2e8f0",
                borderBottom: "1px solid #e2e8f0",
                position: "relative",
                cursor: "pointer",
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: "6px" }}>
                {date.getDate()}
              </div>
              {hasEvents && (
                <span
                  style={{
                    position: "absolute",
                    right: "8px",
                    bottom: "8px",
                    width: "8px",
                    height: "8px",
                    borderRadius: "9999px",
                    background: "rgb(185,10,10)",
                  }}
                  aria-label="Has events"
                />
              )}
            </button>
          );
        })}
      </div>

      <div style={{ marginTop: "1.25rem" }}>
        {selectedDateKey ? (
          <>
            <h3 style={{ marginBottom: "0.5rem" }}>
              Events on {selectedDateKey}
            </h3>
            {selectedEvents.length === 0 ? (
              <div>No events.</div>
            ) : (
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {selectedEvents.map((e) => (
                  <li
                    key={e.id}
                    style={{
                      padding: "12px",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      marginBottom: "8px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600 }}>{e.title}</div>
                      <div style={{ fontSize: "0.9rem", color: "#64748b" }}>
                        {e.category}
                      </div>
                    </div>
                    <Link
                      to={`/events/${e.id}`}
                      aria-label={`View details of ${e.title}`}
                      className="btn btn-outline"
                    >
                      Details
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <div style={{ color: "#64748b" }}>Select a date to see events.</div>
        )}
      </div>
    </div>
  );
}

export default EventCalendar;
