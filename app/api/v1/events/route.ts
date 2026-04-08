import { NextRequest, NextResponse } from "next/server"

/**
 * ENTRÃ by DER â API de Eventos
 * GET /api/v1/events â Lista eventos del organizador
 */

const DEMO_EVENTS = [
  {
    id: "evt-001",
    name: "Noche ElectrÃ³nica â Vol. 12",
    date: "2026-04-15T23:00:00-03:00",
    location: "Club Araoz, Palermo, CABA",
    status: "active",
    tickets: { total: 2000, sold: 1247, available: 753 },
    categories: [
      { name: "General", price: 8500, currency: "ARS", available: 500 },
      { name: "VIP", price: 15000, currency: "ARS", available: 150 },
      { name: "Early Bird", price: 6000, currency: "ARS", available: 0 },
    ],
    access_control: {
      gates: ["puerta-principal", "puerta-vip-01", "puerta-vip-02"],
      checked_in: 0,
      api_enabled: true,
    },
  },
  {
    id: "evt-002",
    name: "Rock en el Parque 2026",
    date: "2026-05-20T18:00:00-03:00",
    location: "Parque Centenario, CABA",
    status: "upcoming",
    tickets: { total: 5000, sold: 3200, available: 1800 },
    categories: [
      { name: "Campo", price: 12000, currency: "ARS", available: 1200 },
      { name: "Platea", price: 20000, currency: "ARS", available: 400 },
      { name: "VIP Meet & Greet", price: 35000, currency: "ARS", available: 200 },
    ],
    access_control: {
      gates: ["acceso-norte", "acceso-sur", "acceso-vip"],
      checked_in: 0,
      api_enabled: true,
    },
  },
]

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization")
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json(
      { error: "unauthorized", message: "API key requerida." },
      { status: 401 }
    )
  }

  const searchParams = request.nextUrl.searchParams
  const status = searchParams.get("status")

  let events = DEMO_EVENTS
  if (status) {
    events = events.filter((e) => e.status === status)
  }

  return NextResponse.json({
    data: events,
    total: events.length,
    page: 1,
    per_page: 20,
  })
}
