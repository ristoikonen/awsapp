import { View, Flex } from '@aws-amplify/ui-react';
// Grid, Card, Flex, Heading, Text, Badge, Button, Image, SearchField, Divider
import '@aws-amplify/ui-react/styles.css'; 
import '.././style/table.css'; 

// , onEdit
export default function Terms() {



  return (
    <View 
      padding={{ base: '1.5rem', medium: '3rem' }} 
      backgroundColor="var(--amplify-colors-background-secondary)"
      minHeight="100vh"
    >
      <Flex direction="column" gap="2.5rem" maxWidth="1200px" margin="0 auto">
        <Flex direction={{ base: 'column', medium: 'row' }} justifyContent="space-between" alignItems="left" gap="1.5rem">
        </Flex>

          
<h1>Terms of Service</h1>
    <div className="last-updated">Last Updated: 28.8.2026</div>

    <p>Welcome to <strong>ristoikonen.com</strong>. By accessing or using our website and services, you agree to comply with and be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our service.</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By registering for an account or using ristoikonen.com, you confirm that you are at least the minimum legal age in Australia and possess the legal authority to enter into this agreement.</p>

    <h2>2. User Accounts and Google Authentication</h2>
    <p>To access certain features of our application, you are required to authenticate and log in using the <strong>Google Auth Platform (OAuth 2.0)</strong>.</p>
    <ul>
        <li><strong>Account Creation:</strong> When you log in via Google, an account is automatically created for you using your Google profile information (such as your name and email address).</li>
        <li><strong>Security:</strong> Because authentication is handled securely through Google, we do not collect or store your Google account password. You are responsible for maintaining the security of your Google account credentials.</li>
        <li><strong>Account Revocation:</strong> You can disconnect ristoikonen.com from your Google Account at any time by modifying your permissions directly in your <a href="https://google.com" target="_blank" rel="noopener noreferrer">Google Account Security Settings</a>.</li>
    </ul>

    <h2>3. Acceptable Use Policy</h2>
    <p>You agree to use ristoikonen.com only for lawful purposes. You strictly agree <strong>not</strong> to:</p>
    <ul>
        <li>Disrupt, compromise, or bypass the security infrastructure of our service or the Google Auth system.</li>
        <li>Engage in automated data harvesting, scraping, or heavy loading tactics that degrade performance for other users.</li>
        <li>Use the application to transmit malicious code, malware, spam, or defamatory content.</li>
        <li>Attempt to impersonate other users or gain unauthorized access to data belonging to third parties.</li>
    </ul>

    <h2>4. Intellectual Property</h2>
    <p>All software, branding, design, logos, and UI elements within ristoikonen.com remain the exclusive intellectual property of ristoikonen.com or its licensors. Your utilization of the service grants you a limited, non-exclusive, non-transferable licence to access the platform in accordance with these Terms.</p>

    <h2>5. Termination and Modification</h2>
    <p>We reserve the right to temporarily suspend or permanently terminate your access to ristoikonen.com without prior notice if we determine you have violated these Terms. We also reserve the right to modify or discontinue any part of our service at our sole discretion.</p>

    <h2>6. Limitation of Liability and Disclaimers</h2>
    <p><em>Ristoikonen.com is provided on an "as-is" and "as-available" basis.</em> To the maximum extent permitted by applicable law:</p>
    <ul>
        <li>We offer no express or implied warranties regarding service uptime, operational reliability, or fitness for a particular purpose.</li>
        <li>We shall not be held liable for any indirect, incidental, special, or consequential damages arising from your use of, or inability to use, our service.</li>
        <li>We are not responsible for any connectivity disruptions, data losses, or policy changes initiated by the Google Auth Platform or Google LLC.</li>
    </ul>

    <h2>7. Governing Law</h2>
    <p>These Terms are governed by and construed in accordance with the laws of <strong>Australia</strong>, without regard to its conflict of law principles.</p>

    <h2>8. Changes to These Terms</h2>
    <p>We may update our Terms of Service from time to time to reflect operational or regulatory changes. We will notify you of any material changes by updating the "Last Updated" date at the top of this page. Your continued use of the platform after updates take effect implies full acceptance of the revised Terms.</p>

    <h2>9. Contact Us</h2>
    <p>If you have any questions or concerns regarding these Terms of Service, please contact us at:</p>
    <p>Email: <a href="mailto:ristosmail@gmx.com">ristosmail@gmx.com</a></p><p>&copy; 2026 Risto Ikonen. All rights reserved.</p>



      </Flex>
    </View>
  );
};
