import React from 'react';
import { Language, translations } from '../translations';
import { LineIcon, IconName } from './icons/LineIcon';
import { BotanicalDivider } from './BotanicalDivider';

interface HouseRulesGuidelinesProps {
  lang: Language;
}

interface RuleCardStyle {
  icon: IconName;
  theme: 'gold' | 'night' | 'coral' | 'rose' | 'sage' | 'mint' | 'amber' | 'lavender' | 'teal';
}

const RULE_STYLES: RuleCardStyle[] = [
  { icon: 'key', theme: 'sage' },       // Check-in
  { icon: 'clock', theme: 'gold' },      // Checkout
  { icon: 'users', theme: 'amber' },     // Capacity
  { icon: 'moon', theme: 'night' },      // Quiet hours
  { icon: 'noSmoking', theme: 'rose' },  // Smoking & parties
  { icon: 'car', theme: 'teal' },        // Parking
  { icon: 'sprout', theme: 'mint' },     // Garden
  { icon: 'shield', theme: 'lavender' },  // Safety
  { icon: 'calendar', theme: 'coral' },  // Extended stays
];

export const HouseRulesGuidelines: React.FC<HouseRulesGuidelinesProps> = ({ lang }) => {
  const t = translations[lang].rulesFaqSection;

  const subtitleNote = lang === 'pl'
    ? 'Życzymy udanego i relaksującego wypoczynku. Prosimy o chwilę na zapoznanie się z naszymi zasadami:'
    : lang === 'de'
    ? 'Wir wünschen Ihnen einen erholsamen Aufenthalt. Bitte nehmen Sie sich kurz Zeit für unsere Hausregeln:'
    : lang === 'fr'
    ? 'Nous vous souhaitons un agréable séjour. Merci de prendre un instant pour lire notre règlement :'
    : 'We want you to have a relaxing and enjoyable stay. Please take a moment to read our house rules:';

  const footerThanks = lang === 'pl'
    ? 'Dziękujemy za traktowanie The Edinburgh Garden House z troską i szacunkiem. Życzymy wspaniałego pobytu! ♡'
    : lang === 'de'
    ? 'Vielen Dank, dass Sie The Edinburgh Garden House mit Sorgfalt behandeln. Genießen Sie Ihren Aufenthalt! ♡'
    : lang === 'fr'
    ? 'Merci de prendre soin de The Edinburgh Garden House. Nous vous souhaitons un merveilleux séjour ! ♡'
    : 'Thank you for treating The Edinburgh Garden House with care and respect. We hope you enjoy your stay! ♡';

  return (
    <div className="house-rules-poster-card">
      {/* Decorative corner watercolor sprigs like on the printed poster */}
      <div className="watercolor-corner watercolor-corner--top-left" aria-hidden="true">
        <img src="/florals/corner-bouquet.png" alt="" />
      </div>
      <div className="watercolor-corner watercolor-corner--top-right" aria-hidden="true">
        <img src="/florals/corner-bouquet.png" alt="" />
      </div>

      <div className="rules-poster-header text-center" style={{ position: 'relative', zIndex: 2 }}>
        <BotanicalDivider />
        <span className="rules-poster-eyebrow">GUEST GUIDELINES</span>
        <h3 className="rules-poster-title">{t.title}</h3>
        <p className="rules-poster-lead">{subtitleNote}</p>
      </div>

      {/* Grid of 9 pastel cards matching the client's guest house poster */}
      <div className="rules-cards-grid">
        {t.rules.map((rule, idx) => {
          const style = RULE_STYLES[idx % RULE_STYLES.length];
          return (
            <div key={idx} className={`rule-guideline-card theme-${style.theme}`}>
              <div className="rule-card-icon-wrap">
                <LineIcon name={style.icon} size={22} />
              </div>
              <div className="rule-card-text">
                <div className="rule-card-num-title">
                  <span className="rule-card-num">{idx + 1}.</span>
                  <h4 className="rule-card-title">{rule.title.replace(':', '')}</h4>
                </div>
                <p className="rule-card-desc">{rule.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Poster footer sign-off */}
      <div className="rules-poster-footer text-center">
        <div className="rules-heart-badge">🌿 ♡ 🌿</div>
        <p className="rules-footer-message">{footerThanks}</p>
      </div>
    </div>
  );
};
