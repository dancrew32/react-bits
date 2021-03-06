/**
 * Typography Component
 * We can extend the idea of Base components to create Typography components
 * this pattern helps ensure consistency and keep your styling DRY.
 *
 * @Reference:
 * http://jxnblk.com/writing/posts/patterns-for-style-composition-in-react/
 * https://github.com/vasanthk/react-bits/blob/master/styling/05.base-component.jsx
 */

// Example
import React from 'react';
import { alternateFont, typeScale, boldFontWeight } from './styles';

const Text = ({
  tag = 'span',
  size = 4,
  alt,
  center,
  bold,
  caps,
  ...props
  }) => {
  const Tag = tag;
  const sx = {
    fontFamily: alt ? alternateFont : null,
    fontSize: typeScale[size],
    fontWeight: bold ? boldFontWeight : null,
    textAlign: center ? 'center' : null,
    textTransform: caps ? 'uppercase' : null
  };

  return <Tag {...props} style={sx}/>
};

const LeadText = (props) => <Text {...props} tag='p' size={3}/>;
const Caps = (props) => <Text {...props} caps/>;
const MetaText = (props) => <Text {...props} size={5} caps/>;
const AltParagraph = (props) => <Text {...props} tag='p' alt/>;

const CapsButton = ({ children, ...props }) => (
  <Button {...props}>
    <Caps>
      {children}
    </Caps>
  </Button>
);

// Usage example
const TypographyComponent = () => (
  <div>
    <LeadText>
      This is a lead with some<Caps>all caps</Caps>.
    It has a larger font size than the default paragraph.
    </LeadText>
    <MetaText>
      This is smaller text, like form helper copy.
    </MetaText>
  </div>
);