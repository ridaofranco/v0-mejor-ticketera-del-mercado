import { NextRequest, NextResponse } from "next/server"

/**
 * ENTRÃ by DER â API de Control de Accesos
 * POST /api/v1/checkin
 *
 * Valida un ticket QR en el ingreso del evento.
 * DiseÃ±ado para ser consumido por apps de terceros.
 *
 * Headers requeridos:
 *   Authorization: Bearer <API_KEY>
 *   Content-Type: application/json
 *
 * Body:
 *   {
 *     "ticket_qr": string,     // Contenido del QR escaneado
 *     "gate_id": string,        // Identificador de la puerta/acceso
 *     "event_id"?: string       // Opcional, para validaciÃ³n cruzada
 *   }
 *
 * Response 200:
 *   {
 *     "valid": boolean,
 *     "attendee": string,
 *     "ticket_type": string,
 *     "ticket_id": string,
 *     "checked_in_at": string (ISO 8601),
 *     "gate": string,
 *     "already_used": boolean,
 *     "capacity": {
 *       "total": number,
 *       "checked_in": number,
 *       "remaining": number
 *     }
 *   }
 */

// Simulated ticket database for demo purposes
const DEMO_TICKETS: Record<string, {
  attendee: string
  ticket_type: string
  ticket_id: string
  event_id: string
  used: boolean
}> = {
  "QR-ENTRA-001": {
    attendee: "Juan PÃ©rez",
    ticket_type: "VIP",
    ticket_id: "TKT-12345-ABC",
    event_id: "evt-001",
    used: false,
  },
  "QR-ENTRA-002": {
    attendee: "MarÃ­a LÃ³pez",
    ticket_type: "General",
    ticket_id: "TKT-67890-DEF",
    event_id: "evt-001",
    used: false,
  },
  "QR-ENTRA-003": {
    attendee: "Carlos RodrÃ­guez",
    ticket_type: "VIP",
    ticket_id: "TKT-54321-GHI",
    event_id: "evt-001",
    used: true, // Already used for demo
  },
}

const DEMO_CAPACITY = {
  total: 2000,
  checked_in: 847,
}

function validateApiKey(request: NextRequest): boolean {
  const authHeader = request.headers.get("authorization")
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return false
  }
  // In production, validate against database
  const apiKey = authHeader.split(" ")[1]
  return apiKey.length > 0
}

export async function POST(request: NextRequest) {
  // Validate API key
  if (!validateApiKey(request)) {
    return NextResponse.json(
      {
        error: "unauthorized",
        message: "API key invÃ¡lida o faltante. IncluÃ­ el header: Authorization: Bearer <TU_API_KEY>",
      },
      { status: 401 }
    )
  }

  try {
    const body = await request.json()
    const { ticket_qr, gate_id, event_id } = body

    if (!ticket_qr) {
      return NextResponse.json(
        {
          error: "bad_request",
          message: "El campo 'ticket_qr' es obligatorio.",
        },
        { status: 400 }
      )
    }

    if (!gate_id) {
      return NextResponse.json(
        {
          error: "bad_request",
          message: "El campo 'gate_id' es obligatorio.",
        },
        { status: 400 }
      )
    }

    // Look up the ticket
    const ticket = DEMO_TICKETS[ticket_qr]

    if (!ticket) {
      return NextResponse.json({
        valid: false,
        error: "ticket_not_found",
        message: "El ticket no existe o el QR es invÃ¡lido.",
        gate: gate_id,
        checked_in_at: new Date().toISOString(),
        capacity: {
          total: DEMO_CAPACITY.total,
          checked_in: DEMO_CAPACITY.checked_in,
          remaining: DEMO_CAPACITY.total - DEMO_CAPACITY.checked_in,
        },
      })
    }

    // Validate event match if provided
    if (event_id && ticket.event_id !== event_id) {
      return NextResponse.json({
        valid: false,
        error: "event_mismatch",
        message: "Este ticket no corresponde al evento seleccionado.",
        attendee: ticket.attendee,
        ticket_type: ticket.ticket_type,
        ticket_id: ticket.ticket_id,
        gate: gate_id,
        checked_in_at: new Date().toISOString(),
        capacity: {
          total: DEMO_CAPACITY.total,
          checked_in: DEMO_CAPACITY.checked_in,
          remaining: DEMO_CAPACITY.total - DEMO_CAPACITY.checked_in,
        },
      })
    }

    // Check if already used
    if (ticket.used) {
      return NextResponse.json({
        valid: false,
        already_used: true,
        error: "ticket_already_used",
        message: "Este ticket ya fue utilizado anteriormente.",
        attendee: ticket.attendee,
        ticket_type: ticket.ticket_type,
        ticket_id: ticket.ticket_id,
        gate: gate_id,
        checked_in_at: new Date().toISOString(),
        capacity: {
          total: DEMO_CAPACITY.total,
          checked_in: DEMO_CAPACITY.checked_in,
          remaining: DEMO_CAPACITY.total - DEMO_CAPACITY.checked_in,
        },
      })
    }

    // Success â mark as used
    // In production: update database, emit webhook, update real-time dashboard
    const newCheckedIn = DEMO_CAPACITY.checked_in + 1

    return NextResponse.json({
      valid: true,
      already_used: false,
      attendee: ticket.attendee,
      ticket_type: ticket.ticket_type,
      ticket_id: ticket.ticket_id,
      checked_in_at: new Date().toISOString(),
      gate: gate_id,
      capacity: {
        total: DEMO_CAPACITY.total,
        checked_in: newCheckedIn,
        remaining: DEMO_CAPACITY.total - newCheckedIn,
      },
    })
  } catch {
    return NextResponse.json(
      {
        error: "invalid_json",
        message: "El body del request debe ser JSON vÃ¡lido.",
      },
      { status: 400 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    name: "ENTRÃ by DER â API de Control de Accesos",
    version: "1.0.0",
    documentation: "https://docs.entra.ar/api/v1/checkin",
    endpoints: {
      "POST /api/v1/checkin": "Validar ticket QR en el ingreso",
      "GET /api/v1/events": "Listar eventos del organizador",
      "GET /api/v1/events/:id/tickets": "Listar tickets de un evento",
      "POST /api/v1/webhooks": "Configurar webhooks",
    },
    authentication: "Bearer token via Authorization header",
    rate_limit: "1000 requests/minute",
    contact: "api@somosder.com.ar",
  })
}
