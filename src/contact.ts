import { Language } from './translations';

/**
 * Single source of truth for host contact details.
 * The host works during the day and asked for NO phone calls –
 * only SMS and e-mail. Never add `tel:` or WhatsApp links here.
 */
export const HOST_PHONE = '+447988065088';
export const HOST_PHONE_DISPLAY = '+44 7988 065088';
export const HOST_EMAIL = 'jacek31-76@hotmail.com';

interface InquiryDates {
  checkIn?: string;
  checkOut?: string;
  guests?: string;
}

export const inquiryMessage = (lang: Language, dates?: InquiryDates): string => {
  const d = dates?.checkIn ? { in: dates.checkIn, out: dates.checkOut || '', g: dates.guests || '' } : null;
  switch (lang) {
    case 'pl':
      return `Dzień dobry, piszę ze strony The Edinburgh Garden House w sprawie rezerwacji${d ? ` (termin: ${d.in} – ${d.out}, ${d.g})` : ''}. Proszę o informację o dostępności.`;
    case 'de':
      return `Hallo Jacek, ich interessiere mich für eine Buchung im The Edinburgh Garden House${d ? ` (${d.in} bis ${d.out}, ${d.g})` : ''}. Ist das Haus verfügbar?`;
    case 'fr':
      return `Bonjour Jacek, je vous contacte pour une réservation à The Edinburgh Garden House${d ? ` (du ${d.in} au ${d.out}, ${d.g})` : ''}. Le logement est-il disponible ?`;
    default:
      return `Hello Jacek, I am inquiring about booking The Edinburgh Garden House${d ? ` (${d.in} to ${d.out}, ${d.g})` : ''}. Is it available?`;
  }
};

/** `sms:` URI – `?&body=` works on both iOS and Android. */
export const smsHref = (body: string) => `sms:${HOST_PHONE}?&body=${encodeURIComponent(body)}`;

export const mailHref = (body: string, subject = 'The Edinburgh Garden House – booking inquiry') =>
  `mailto:${HOST_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
