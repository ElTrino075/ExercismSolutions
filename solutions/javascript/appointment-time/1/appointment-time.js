// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  const startPunt = new Date(now ?? Date.now());

  startPunt.setDate(startPunt.getDate() + days);

  return startPunt;
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  const appointment = new Date(appointmentDate);
  return appointment.toISOString();
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {

  const datum = new Date(timestamp);

  return {
    year:   datum.getFullYear(),
    month:  datum.getMonth(),
    date:   datum.getDate(),
    hour:   datum.getHours(),
    minute: datum.getMinutes()
    };
  }

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {

  const datum = new Date(timestamp);
  
  const handlers = {
    year:   (d, v) => d.setFullYear(v),
    month:  (d, v) => d.setMonth(v),  
    date:   (d, v) => d.setDate(v),
    hour:   (d, v) => d.setHours(v),
    minute: (d, v) => d.setMinutes(v),
  };
  
  for (const [key, value] of Object.entries(options)) {
      handlers[key]?.(datum, value);
  }
  
  return {
    year:   datum.getFullYear(),
    month:  datum.getMonth(),
    date:   datum.getDate(),
    hour:   datum.getHours(),
    minute: datum.getMinutes()
    };
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {

  const appointmentA = new Date(timestampA);
  const appointmentB = new Date(timestampB); 
  
  const tBResult = (appointmentB.getTime() - appointmentA.getTime())/1000;

  return Math.round(tBResult);
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  return (appointmentTimestamp > currentTimestamp);
}
