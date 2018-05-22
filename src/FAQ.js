import React from "react";
import Footer from "./Footer";
import {H2, H3} from './Styled'

class FAQ extends React.Component {
  render() {
    return (
      <div>
      <div className="FAQCSS">
        <H2>Frequently Asked Questions</H2>

        <H3>1. What's our goal?</H3>

        <p>
          By accessing this web site, you are agreeing to be bound by these web
          site Terms and Conditions of Use, all applicable laws and regulations,
          and agree that you are responsible for compliance with any applicable
          local laws. If you do not agree with any of these terms, you are
          prohibited from using or accessing this site. The materials contained
          in this web site are protected by applicable copyright and trade mark
          law.
        </p>

        <H3>2. Why are we creating a new social dating platform?</H3>

        <ol type="a">
          <li>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on DecoDating's web site for
            personal, non-commercial transitory viewing only. This is the grant
            of a license, not a transfer of title, and under this license you
            may not:
            <ol type="i">
              <li>modify or copy the materials;</li>
              <li>
                use the materials for any commercial purpose, or for any public
                display (commercial or non-commercial);
              </li>
              <li>
                attempt to decompile or reverse engineer any software contained
                on DecoDating's web site;
              </li>
              <li>
                remove any copyright or other proprietary notations from the
                materials; or
              </li>
              <li>
                transfer the materials to another person or "mirror" the
                materials on any other server.
              </li>
            </ol>
          </li>
          <li>
            This license shall automatically terminate if you violate any of
            these restrictions and may be terminated by DecoDating at any time.
            Upon terminating your viewing of these materials or upon the
            termination of this license, you must destroy any downloaded
            materials in your possession whether in electronic or printed
            format.
          </li>
        </ol>

        <H3>3. Why we want you to use our site</H3>

        <ol type="a">
          <li>
            The materials on DecoDating's web site are provided "as is".
            DecoDating makes no warranties, expressed or implied, and hereby
            disclaims and negates all other warranties, including without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights. Further,
            DecoDating does not warrant or make any representations concerning
            the accuracy, likely results, or reliability of the use of the
            materials on its Internet web site or otherwise relating to such
            materials or on any sites linked to this site.
          </li>
        </ol>

        <H3>4. How to report someone.</H3>

        <p>
          In no event shall DecoDating or its suppliers be liable for any
          damages (including, without limitation, damages for loss of data or
          profit, or due to business interruption,) arising out of the use or
          inability to use the materials on DecoDating's Internet site, even if
          DecoDating or a DecoDating authorized representative has been notified
          orally or in writing of the possibility of such damage. Because some
          jurisdictions do not allow limitations on implied warranties, or
          limitations of liability for consequential or incidental damages,
          these limitations may not apply to you.
        </p>

        <H3>5. How do I recover my account if I got hacked?</H3>

        <p>
          The materials appearing on DecoDating's web site could include
          technical, typographical, or photographic errors. DecoDating does not
          warrant that any of the materials on its web site are accurate,
          complete, or current. DecoDating may make changes to the materials
          contained on its web site at any time without notice. DecoDating does
          not, however, make any commitment to update the materials.
        </p>

        <H3>6. Why is it limited only within Quebec?</H3>

        <p>
          DecoDating has not reviewed all of the sites linked to its Internet
          web site and is not responsible for the contents of any such linked
          site. The inclusion of any link does not imply endorsement by
          DecoDating of the site. Use of any such linked web site is at the
          user's own risk.
        </p>

        <H3>7. What's the purpose behind all the questionaire?</H3>

        <p>
          DecoDating may revise these terms of use for its web site at any time
          without notice. By using this web site you are agreeing to be bound by
          the then current version of these Terms and Conditions of Use.
        </p>

        <H3>8. Will there be more feature added in the future?</H3>

        <p>
          Any claim relating to DecoDating's web site shall be governed by the
          laws of the State of Quebec without regard to its conflict of law
          provisions.
        </p>

        <p>General Terms and Conditions applicable to Use of a Web Site.</p>
        
      </div>
      <Footer />
      </div>
    );
  }
}

export default FAQ;
